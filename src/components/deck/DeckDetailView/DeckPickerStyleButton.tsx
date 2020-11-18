import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Ripple from '@lib/react-native-material-ripple';
import StyleContext from '@styles/StyleContext';
import space, { s, xs } from '@styles/space';
import AppIcon from '@icons/AppIcon';
interface Props {
  icon: string;
  title: string;
  valueLabel: string;
  valueLabelDescription?: string;
  first?: boolean;
  last?: boolean;
  editable: boolean;
  onPress: () => void;
  noLabelDivider?: boolean;
}

function iconSize(icon: string) {
  switch (icon) {
    case 'xp':
      return 32;
    case 'card-outline':
      return 34;
    case 'parallel':
    case 'taboo_thin':
      return 26;
    default:
      return 28;
  }
}

export default function DeckPickerStyleButton({
  icon,
  title,
  valueLabel,
  valueLabelDescription,
  first,
  last,
  editable,
  onPress,
  noLabelDivider,
}: Props) {
  const { colors, fontScale, typography } = useContext(StyleContext);
  return (
    <Ripple
      onPress={onPress}
      disabled={!editable}
      style={[
        space.paddingSideS,
        space.paddingTopS,
        first ? styles.roundTop : undefined,
        last ? styles.roundBottom : undefined,
        { backgroundColor: colors.L20 },
      ]}
      rippleColor={colors.L30}
    >
      <View style={[styles.row, space.paddingBottomS, !last ? { borderBottomWidth: StyleSheet.hairlineWidth, borderColor: colors.L10 } : undefined]}>
        <View style={styles.leftRow}>
          <View style={styles.icon}>
            <AppIcon name={icon} size={iconSize(icon)} color={colors.M} />
          </View>
          <View style={styles.column}>
            <Text style={[typography.smallLabel, typography.dark, typography.italic]}>
              { title }
            </Text>
            <View style={styles.row}>
              <Text style={[typography.large]}>
                { valueLabel }
              </Text>
              { !!valueLabelDescription && (
                <Text style={[typography.small, { color: colors.M, lineHeight: 24 * fontScale }]}>
                  { noLabelDivider ? `  ${valueLabelDescription}` : ` · ${valueLabelDescription}` }
                </Text>
              ) }
            </View>
          </View>
        </View>
        { !!editable && (
          <View style={styles.editIcon}>
            <AppIcon name="edit" size={20} color={colors.M} />
          </View>
        ) }
      </View>
    </Ripple>
  );
}

const styles = StyleSheet.create({
  column: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  leftRow: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  icon: {
    width: 32,
    height: 32,
    marginRight: xs,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  editIcon: {
    width: 32,
    height: 32,
    marginLeft: s,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  roundTop: {
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
  },
  roundBottom: {
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
});
