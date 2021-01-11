import React, { useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { keys, map, filter } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { Navigation } from 'react-native-navigation';
import { t } from 'ttag';

import BasicButton from '@components/core/BasicButton';
import { CampaignNotes, CUSTOM, InvestigatorData, WeaknessSet } from '@actions/types';
import CampaignLogSection from '../CampaignLogSection';
import ChaosBagSection from './ChaosBagSection';
import DecksSection from './DecksSection';
import AddCampaignNoteSectionDialog, { AddSectionFunction } from '../AddCampaignNoteSectionDialog';
import { ChaosBag } from '@app_constants';
import { updateCampaign, updateCampaignSpentXp, cleanBrokenCampaigns } from '../actions';
import { NavigationProps } from '@components/nav/types';
import { getAllDecks } from '@reducers';
import COLORS from '@styles/colors';
import StyleContext from '@styles/StyleContext';
import { useCampaign, useCampaignDetails, useCampaignScenarios, useFlag, useInvestigatorCards, useNavigationButtonPressed, usePlayerCards } from '@components/core/hooks';
import useTraumaDialog from '../useTraumaDialog';
import withDialogs, { InjectedDialogProps } from '@components/core/withDialogs';
import { showAddScenarioResult, showChaosBagOddsCalculator, showDrawWeakness, showDrawChaosBag } from '@components/campaign/nav';
import TabView from '@components/core/TabView';
import RoundedFactionBlock from '@components/core/RoundedFactionBlock';
import RoundedFooterButton from '@components/core/RoundedFooterButton';
import { EditScenarioResultProps } from '../EditScenarioResultView';
import CampaignScenarioButton from '../CampaignScenarioButton';
import { campaignNames, completedScenario } from '../constants';
import space from '@styles/space';
import CampaignSummaryHeader from '../CampaignSummaryHeader';
import ArkhamButton from '@components/core/ArkhamButton';
import LoadingSpinner from '@components/core/LoadingSpinner';
import { useTextDialog } from '@components/deck/dialogs';
import CampaignGuideFab from '@components/campaignguide/CampaignGuideFab';

export interface CampaignDetailProps {
  id: number;
}

type Props = NavigationProps & CampaignDetailProps & InjectedDialogProps

function ScenarioResultButton({ name, campaignId, componentId, status, index, onPress }: {
  name: string;
  campaignId: number;
  componentId: string;
  status: 'played' | 'playable';
  index: number;
  onPress?: () => void;
}) {
  const buttonOnPress = useCallback(() => {
    if (onPress) {
      onPress();
    } else {
      Navigation.push<EditScenarioResultProps>(componentId, {
        component: {
          name: 'Campaign.EditResult',
          passProps: {
            campaignId,
            index,
          },
        },
      });
    }
  }, [componentId, campaignId, index, onPress]);
  return (
    <CampaignScenarioButton
      onPress={buttonOnPress}
      status={status}
      title={name}
    />
  );
}

function CampaignDetailView({ id, componentId, showTextEditDialog }: Props) {
  const { backgroundStyle } = useContext(StyleContext);
  const investigators = useInvestigatorCards();
  const cards = usePlayerCards();
  const campaign = useCampaign(id);
  const decks = useSelector(getAllDecks);
  const {
    showTraumaDialog,
    investigatorDataUpdates,
    traumaDialog,
  } = useTraumaDialog({});
  const [latestDeckIds, allInvestigators] = useCampaignDetails(campaign, investigators);

  const dispatch = useDispatch();
  const updateNonDeckInvestigators = useCallback((nonDeckInvestigators: string[]) => {
    dispatch(updateCampaign(id, { nonDeckInvestigators }));
  }, [dispatch, id]);
  const updateLatestDeckIds = useCallback((latestDeckIds: number[]) => {
    dispatch(updateCampaign(id, { latestDeckIds }));
  }, [dispatch, id]);
  const updateCampaignNotes = useCallback((campaignNotes: CampaignNotes) => {
    dispatch(updateCampaign(id, { campaignNotes }));
  }, [dispatch, id]);
  const updateInvestigatorData = useCallback((investigatorData: InvestigatorData) => {
    dispatch(updateCampaign(id, { investigatorData }));
  }, [dispatch, id]);
  const updateChaosBag = useCallback((chaosBag: ChaosBag) => {
    dispatch(updateCampaign(id, { chaosBag }));
  }, [dispatch, id]);
  const updateWeaknessSet = useCallback((weaknessSet: WeaknessSet) => {
    dispatch(updateCampaign(id, { weaknessSet }));
  }, [dispatch, id]);
  const addSectionCallback = useRef<AddSectionFunction>();
  const [addSectionVisible, setAddSectionVisible] = useState(false);
  const incSpentXp = useCallback((code: string) => {
    dispatch(updateCampaignSpentXp(id, code, 'inc'));
  }, [id, dispatch]);
  const decSpentXp = useCallback((code: string) => {
    dispatch(updateCampaignSpentXp(id, code, 'dec'));
  }, [id, dispatch]);

  const showAddSectionDialog = useCallback((addSectionFunction: AddSectionFunction) => {
    addSectionCallback.current = addSectionFunction;
    setAddSectionVisible(true);
  }, [addSectionCallback, setAddSectionVisible]);
  const hideAddSectionDialog = useCallback(() => {
    setAddSectionVisible(false);
    addSectionCallback.current = undefined;
  }, [addSectionCallback, setAddSectionVisible]);

  useEffect(() => {
    if (campaign?.name) {
      Navigation.mergeOptions(componentId, {
        topBar: {
          title: {
            text: campaign.name,
          },
        },
      });
    }
  }, [campaign?.name, componentId]);

  useEffect(() => {
    if (campaign && keys(investigatorDataUpdates).length) {
      updateInvestigatorData({
        ...campaign.investigatorData,
        ...investigatorDataUpdates,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [investigatorDataUpdates, updateInvestigatorData]);

  const oddsCalculatorPressed = useCallback(() => {
    showChaosBagOddsCalculator(componentId, id, allInvestigators);
  }, [componentId, id, allInvestigators]);

  const cleanBrokenCampaignsPressed = useCallback(() => {
    dispatch(cleanBrokenCampaigns());
    Navigation.pop(componentId);
  }, [componentId, dispatch]);

  const addScenarioResultPressed = useCallback(() => {
    showAddScenarioResult(componentId, id);
  }, [id, componentId]);

  const drawChaosBagPressed = useCallback(() => {
    showDrawChaosBag(componentId, id, updateChaosBag);
  }, [id, componentId, updateChaosBag]);

  const drawWeaknessPressed = useCallback(() => {
    showDrawWeakness(componentId, id);
  }, [componentId, id]);

  const updateCampaignName = useCallback((name: string) => {
    dispatch(updateCampaign(id, { name, lastUpdated: new Date() }));
    Navigation.mergeOptions(componentId, {
      topBar: {
        title: {
          text: name,
        },
      },
    });
  }, [id, dispatch, componentId]);
  const { dialog, showDialog: showEditNameDialog } = useTextDialog({
    title: t`Name`,
    value: campaign?.name || '',
    onValueChange: updateCampaignName,
  });

  useNavigationButtonPressed(({ buttonId }) => {
    if (buttonId === 'edit') {
      showEditNameDialog();
    }
  }, componentId, [showEditNameDialog]);
  const [removeMode, toggleRemoveMode] = useFlag(false);
  const decksTab = useMemo(() => {
    if (!campaign) {
      return <LoadingSpinner />;
    }
    return (
      <View style={[styles.flex, backgroundStyle]}>
        <ScrollView contentContainerStyle={backgroundStyle}>
          <View style={[space.paddingSideS, space.paddingBottomS]}>
            { !!cards && (
              <DecksSection
                header={
                  <CampaignSummaryHeader
                    name={campaign.cycleCode === CUSTOM ? campaign.name : campaignNames()[campaign.cycleCode]}
                    cycle={campaign.cycleCode}
                    difficulty={campaign.difficulty}
                    inverted
                  />
                }
                componentId={componentId}
                campaign={campaign}
                weaknessSet={campaign.weaknessSet}
                latestDeckIds={latestDeckIds || []}
                decks={decks}
                allInvestigators={allInvestigators}
                cards={cards}
                investigatorData={campaign.investigatorData || {}}
                showTraumaDialog={showTraumaDialog}
                updateLatestDeckIds={updateLatestDeckIds}
                updateNonDeckInvestigators={updateNonDeckInvestigators}
                updateWeaknessSet={updateWeaknessSet}
                incSpentXp={incSpentXp}
                decSpentXp={decSpentXp}
                removeMode={removeMode}
                toggleRemoveMode={toggleRemoveMode}
              />
            ) }
          </View>
          <ArkhamButton
            icon="card"
            title={t`Draw random basic weakness`}
            onPress={drawWeaknessPressed}
          />
        </ScrollView>
      </View>
    );
  }, [campaign, latestDeckIds, decks, allInvestigators, cards, backgroundStyle, componentId, removeMode,
    toggleRemoveMode,
    drawWeaknessPressed, showTraumaDialog, updateLatestDeckIds, updateNonDeckInvestigators, updateWeaknessSet, incSpentXp, decSpentXp]);
  const [cycleScenarios] = useCampaignScenarios(campaign);
  const scenariosTab = useMemo(() => {
    if (!campaign) {
      return <LoadingSpinner />;
    }
    const hasCompletedScenario = completedScenario(campaign.scenarioResults);
    return (
      <View style={[styles.flex, backgroundStyle]}>
        <ScrollView contentContainerStyle={backgroundStyle}>
          { (campaign.scenarioResults.length === 0 && cycleScenarios.length === 0) ? (
            <ArkhamButton
              icon="expand"
              title={t`Record Scenario Result`}
              onPress={addScenarioResultPressed}
            />
          ) : (
            <View style={[space.paddingSideS, space.paddingBottomS]}>
              <RoundedFactionBlock faction="neutral"
                header={undefined}
                footer={<RoundedFooterButton icon="expand" title={t`Record Scenario Result`} onPress={addScenarioResultPressed} />}
              >
                { map(campaign.scenarioResults, (scenario, idx) => (
                  <ScenarioResultButton
                    key={idx}
                    componentId={componentId}
                    campaignId={campaign.id}
                    name={scenario.scenario}
                    index={idx}
                    status="played"
                  />
                )) }
                { map(
                  filter(cycleScenarios, scenario => !hasCompletedScenario(scenario)),
                  (scenario, idx) => (
                    <ScenarioResultButton
                      key={idx}
                      componentId={componentId}
                      campaignId={campaign.id}
                      name={scenario.name}
                      index={-1}
                      status="playable"
                      onPress={addScenarioResultPressed}
                    />
                  ))
                }
              </RoundedFactionBlock>
            </View>
          ) }
        </ScrollView>
      </View>
    );
  }, [backgroundStyle, campaign, addScenarioResultPressed, componentId, cycleScenarios]);
  const logsTab = useMemo(() => {
    if (!campaign) {
      return <LoadingSpinner />;
    }
    return (
      <View style={[styles.flex, backgroundStyle]}>
        <ScrollView contentContainerStyle={backgroundStyle}>
          <ChaosBagSection
            componentId={componentId}
            updateChaosBag={updateChaosBag}
            chaosBag={campaign.chaosBag}
            showChaosBag={drawChaosBagPressed}
            showOddsCalculator={oddsCalculatorPressed}
          />
          <CampaignLogSection
            campaignNotes={campaign.campaignNotes}
            allInvestigators={allInvestigators}
            updateCampaignNotes={updateCampaignNotes}
            showTextEditDialog={showTextEditDialog}
            showAddSectionDialog={showAddSectionDialog}
          />
        </ScrollView>
      </View>
    );
  }, [campaign, backgroundStyle, allInvestigators, componentId,
    updateChaosBag, drawChaosBagPressed, oddsCalculatorPressed, updateCampaignNotes, showTextEditDialog, showAddSectionDialog]);
  const tabs = useMemo(() => {
    return [
      {
        key: 'investigators',
        title: t`Decks`,
        node: decksTab,
      },
      {
        key: 'scenarios',
        title: t`Scenarios`,
        node: scenariosTab,
      },
      {
        keu: 'log',
        title: t`Log`,
        node: logsTab,
      },
    ];
  }, [decksTab, scenariosTab, logsTab]);
  const showAddInvestigator = useCallback(() => {

  }, []);
  if (!campaign) {
    return (
      <View>
        <BasicButton
          title={t`Clean up broken campaigns`}
          color={COLORS.red}
          onPress={cleanBrokenCampaignsPressed}
        />
      </View>
    );
  }
  return (
    <View style={[styles.flex, backgroundStyle]}>
      <TabView tabs={tabs} />
      <AddCampaignNoteSectionDialog
        visible={addSectionVisible}
        addSection={addSectionCallback.current}
        hide={hideAddSectionDialog}
      />
      <CampaignGuideFab
        componentId={componentId}
        campaignId={id}
        serverCampaignId={campaign?.serverId}
        campaignName={''}
        removeMode={removeMode}
        showEditNameDialog={showEditNameDialog}
        showAddInvestigator={showAddInvestigator}
        toggleRemoveInvestigator={toggleRemoveMode}
      />
      { traumaDialog }
      { dialog }
    </View>
  );
}

CampaignDetailView.options = () => {
  return {
    topBar: {
      title: {
        text: t`Campaign`,
      },
    },
  };
};
export default withDialogs(CampaignDetailView);

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
});
