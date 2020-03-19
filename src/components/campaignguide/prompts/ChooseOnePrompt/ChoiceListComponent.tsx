import React from 'react';
import { flatMap } from 'lodash';

import ChoiceComponent from './ChoiceComponent';
import { Choice } from 'data/scenario/types';

interface Props {
  choices: Choice[];
  selectedIndex?: number;
  editable: boolean;
  onSelect: (index: number) => void;
  noBullet?: boolean;
  tintColor?: string | string[];
  buttonColor?: string | string[];
}

export default class ChoiceListPrompt extends React.Component<Props> {

  static getColor(idx: number, color?: string | string[]): string | undefined {
    if (Array.isArray(color)) {
      return color.length >= idx ? color[idx] : undefined;
    }
    return color;
  }
  render() {
    const {
      selectedIndex,
      choices,
      editable,
      onSelect,
      tintColor,
      buttonColor,
      noBullet,
    } = this.props;
    return flatMap(choices, (choice, idx) => {
      if (!editable && idx !== selectedIndex) {
        return null;
      }
      return (
        <ChoiceComponent
          key={idx}
          index={idx}
          onSelect={onSelect}
          choice={choice}
          selected={selectedIndex === idx}
          editable={editable}
          tintColor={ChoiceListPrompt.getColor(idx, tintColor)}
          buttonColor={ChoiceListPrompt.getColor(idx, buttonColor)}
          noBullet={noBullet}
        />
      );
    });
  }
}
