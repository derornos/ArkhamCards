import { Theme } from "react-native-elements";

export interface FactionColors {
  text: string;
  background: string;
  darkBackground: string;
  lightBackground: string;
}

export interface ThemeColors {
  L10: string;
  L20: string;
  L30: string;
  D10: string;
  D20: string;
  D30: string;
  M: string;
  background: string;
  darkText: string;
  lightText: string;
  taboo: string;
  divider: string;
  faction: {
    guardian: FactionColors;
    seeker: FactionColors;
    rogue: FactionColors;
    mystic: FactionColors;
    survivor: FactionColors;
    neutral: FactionColors;
    mythos: FactionColors;
    dual: FactionColors;
    dead: FactionColors;
  };
}
const light10 = '#D7D3C6';
const light20 = '#F5F0E1';
const light30 = '#FFFBF2';
const dark10 = '#656C6F';
const dark20 = '#475259';
const dark30 = '#24303C';
const medium = '#9B9B9B';

export const LIGHT_THEME: ThemeColors = {
  L10: light10,
  L20: light20,
  L30: light30,
  D10: dark10,
  D20: dark20,
  D30: dark30,
  background: light30,
  lightText: dark10,
  darkText: dark30,
  taboo: 'purple',
  divider: light10,
  M: medium,
  faction: {
    guardian: {
      text: '#1072C2',
      background: '#2b80c5',
      darkBackground: '#2b80c5',
      lightBackground: '#d5e6f3',
    },
    seeker: {
      text: '#DB7C07',
      background: '#db7c07',
      darkBackground: '#db7c07',
      lightBackground: '#fbe6d4',
    },
    rogue: {
      text: '#107116',
      background: '#107116',
      darkBackground: '#107116',
      lightBackground: '#cfe3d0',
    },
    mystic: {
      text: '#4331B9',
      background: '#4331b9',
      darkBackground: '#4331b9',
      lightBackground: '#d9d6f1',
    },
    survivor: {
      text: '#CC3038',
      background: '#cc3038',
      darkBackground: '#cc3038',
      lightBackground: '#f5d6d7',
    },
    neutral: {
      text: dark20,
      background: '#444',
      darkBackground: '#444444',
      lightBackground: '#e6e6e6',
    },
    dual: {
      text: '#868600',
      background: '#9a9a00',
      darkBackground: '#c0c000',
      lightBackground: '#f2f2cc',
    },
    dead: {
      text: '#704214',
      background: '#704214',
      darkBackground: '#5a3510',
      lightBackground: '#d4c6b9',
    },
    mythos: {
      text: dark30,
      background: '#444',
      darkBackground: '#000000',
      lightBackground: '#000000',
    },
  },
};

export const DARK_THEME: ThemeColors = {
  D10: light10,
  D20: light20,
  D30: light30,
  L10: dark10,
  L20: dark20,
  L30: dark30,
  background: dark30,
  lightText: light10,
  darkText: light30,
  divider: dark10,
    taboo: 'purple',
  M: medium,
  faction: {
    guardian: {
      text: '#1D92F1',
      background: '#2b80c5',
      darkBackground: '#2b80c5',
      lightBackground: '#004880',
    },
    seeker: {
      text: '#EFA345',
      background: '#db7c07',
      darkBackground: '#db7c07',
      lightBackground: '#bf5c00',
    },
    rogue: {
      text: '#48B14F',
      background: '#107116',
      darkBackground: '#107116',
      lightBackground: '#015906',
    },
    mystic: {
      text: '#6B5BD6',
      background: '#4331b9',
      darkBackground: '#4331b9',
      lightBackground: '#46018f',
    },
    survivor: {
      text: '#D34E54',
      background: '#cc3038',
      darkBackground: '#cc3038',
      lightBackground: '#7a0105',
    },
    neutral: {
      text: light20,
      background: '#444',
      darkBackground: '#888888',
      lightBackground: '#292929',
    },
    dual: {
      text: '#bfbf4d',
      background: '#9a9a00',
      darkBackground: '#c0c000',
      lightBackground: '#f2f2cc',
    },
    dead: {
      text: '#704214',
      background: '#704214',
      darkBackground: '#5a3510',
      lightBackground: '#d4c6b9',
    },
    mythos: {
      text: light30,
      background: '#444',
      darkBackground: '#444444',
      lightBackground: '#000000',
    },
  },
};