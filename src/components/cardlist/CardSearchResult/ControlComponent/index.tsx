import React from 'react';

import Card from '@data/types/Card';
import DeckQuantityComponent from './DeckQuantityComponent';
import { CardCount } from './CardCount';
import CardUpgradeButton from './CardUpgradeButton';
import CardToggle from './CardToggle';
import CardQuantityComponent from './CardQuantityComponent';
import { EditSlotsActions } from '@components/core/hooks';
import { DeckId } from '@actions/types';
import ShuffleButton, { DraftButton } from './ShuffleButton';
import { DiscountComponent } from './DiscountComponent';

export type ControlType = {
  type: 'deck';
  deckId: DeckId;
  limit: number;
  side?: boolean;
} | {
  type: 'quantity';
  count: number;
  countChanged: EditSlotsActions;
  limit: number;
  showZeroCount: boolean;
  reversed?: boolean;
} | {
  type: 'count';
  count: number;
  deltaCountMode?: boolean;
  showZeroCount?: boolean;
} | {
  type: 'upgrade';
  deckId: DeckId;
  limit: number;
  side?: boolean;
  editable: boolean;
  onUpgradePress?: (card: Card) => void;
} | {
  type: 'toggle';
  value: boolean;
  disabled?: boolean;
  toggleValue: (value: boolean) => void;
} | {
  type: 'count_with_toggle';
  count: number;
  value: boolean;
  toggleValue: (value: boolean) => void;
} | {
  type: 'shuffle';
  onShufflePress: () => void;
} | {
  type: 'draft';
  onDraft: (card: Card) => void;
} | {
  type: 'discount';
  available: number;
  used: number;
}

interface Props {
  card: Card;
  control: ControlType;
}
export function ControlComponent({ card, control }: Props) {
  switch (control.type) {
    case 'deck':
      return <DeckQuantityComponent deckId={control.deckId} limit={control.limit} code={card.code} side={control.side} editable />;
    case 'shuffle':
      return <ShuffleButton onPress={control.onShufflePress} />;
    case 'draft':
      return <DraftButton card={card} onPress={control.onDraft} />;
    case 'count':
      return <CardCount count={control.count} deltaCountMode={control.deltaCountMode} showZeroCount={control.showZeroCount} />;
    case 'upgrade':
      return (
        <CardUpgradeButton
          onUpgradePress={control.onUpgradePress}
          card={card}
          deckId={control.deckId}
          editable={control.editable}
          limit={control.limit}
          side={control.side}
        />
      );
    case 'toggle':
      return <CardToggle value={control.value} toggleValue={control.toggleValue} disabled={control.disabled} />;
    case 'count_with_toggle':
      return (
        <>
          <CardCount count={control.count} />
          <CardToggle value={control.value} toggleValue={control.toggleValue} />
        </>
      );
    case 'quantity':
      return (
        <CardQuantityComponent
          code={card.code}
          count={control.count}
          countChanged={control.countChanged}
          limit={control.limit}
          showZeroCount={control.showZeroCount}
          reversed={control.reversed}
        />
      );
    case 'discount':
      return (
        <DiscountComponent available={control.available} used={control.used} />
      );
  }
}