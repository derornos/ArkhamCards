import { DeckMeta, Slots } from '@actions/types';

const starterDecks: {
  cards: { [investigatorId: string]: Slots | undefined; };
  meta: { [investigatorId: string]: DeckMeta | undefined; };
} = {
  meta: {
    '06002': {
      deck_size_selected: '30',
      faction_selected: 'rogue',
    },
    '06003': {
      faction_selected: 'guardian',
    },
  },
  cards: {
    // Roland Banks
    '01001': {
      '01000': 1,
      '01006': 1,
      '01007': 1,
      '01016': 1,
      '01017': 1,
      '01018': 1,
      '01019': 1,
      '01020': 1,
      '01021': 1,
      '01022': 1,
      '01023': 1,
      '01024': 1,
      '01025': 1,
      '01030': 1,
      '01031': 1,
      '01032': 1,
      '01033': 1,
      '01034': 1,
      '01035': 1,
      '01036': 1,
      '01037': 1,
      '01038': 1,
      '01039': 1,
      '01086': 2,
      '01087': 2,
      '01088': 2,
      '01089': 2,
      '01092': 2,
    },
    // Daisy Walker
    '01002': {
      '01000': 1,
      '01008': 1,
      '01009': 1,
      '01030': 1,
      '01031': 1,
      '01032': 1,
      '01033': 1,
      '01034': 1,
      '01035': 1,
      '01036': 1,
      '01037': 1,
      '01038': 1,
      '01039': 1,
      '01058': 1,
      '01059': 1,
      '01060': 1,
      '01061': 1,
      '01062': 1,
      '01063': 1,
      '01064': 1,
      '01065': 1,
      '01066': 1,
      '01067': 1,
      '01086': 2,
      '01087': 2,
      '01088': 2,
      '01090': 2,
      '01092': 2,
    },
    // Skids O Toole
    '01003': {
      '01000': 1,
      '01010': 1,
      '01011': 1,
      '01016': 1,
      '01017': 1,
      '01018': 1,
      '01019': 1,
      '01020': 1,
      '01021': 1,
      '01022': 1,
      '01023': 1,
      '01024': 1,
      '01025': 1,
      '01044': 1,
      '01045': 1,
      '01046': 1,
      '01047': 1,
      '01048': 1,
      '01049': 1,
      '01050': 1,
      '01051': 1,
      '01052': 1,
      '01053': 1,
      '01086': 2,
      '01087': 2,
      '01088': 2,
      '01089': 2,
      '01091': 2,
    },
    // Agnes Baker
    '01004': {
      '01000': 1,
      '01012': 1,
      '01013': 1,
      '01058': 1,
      '01059': 1,
      '01060': 1,
      '01061': 1,
      '01062': 1,
      '01063': 1,
      '01064': 1,
      '01065': 1,
      '01066': 1,
      '01067': 1,
      '01072': 1,
      '01073': 1,
      '01074': 1,
      '01075': 1,
      '01076': 1,
      '01077': 1,
      '01078': 1,
      '01079': 1,
      '01080': 1,
      '01081': 1,
      '01086': 2,
      '01087': 2,
      '01088': 2,
      '01090': 2,
      '01093': 2,
    },
    // Wendy Adams
    '01005': {
      '01000': 1,
      '01014': 1,
      '01015': 1,
      '01044': 1,
      '01045': 1,
      '01046': 1,
      '01047': 1,
      '01048': 1,
      '01049': 1,
      '01050': 1,
      '01051': 1,
      '01052': 1,
      '01053': 1,
      '01072': 1,
      '01073': 1,
      '01074': 1,
      '01075': 1,
      '01076': 1,
      '01077': 1,
      '01078': 1,
      '01079': 1,
      '01080': 1,
      '01081': 1,
      '01086': 2,
      '01087': 2,
      '01088': 2,
      '01091': 2,
      '01093': 2,
    },
    // Zoey Samaras
    '02001': {
      '01000': 1,
      '01016': 1,
      '01017': 1,
      '01018': 1,
      '01019': 1,
      '01020': 1,
      '01021': 1,
      '01022': 1,
      '01023': 1,
      '01024': 1,
      '01025': 1,
      '01059': 1,
      '01066': 1,
      '01067': 1,
      '01086': 2,
      '01087': 2,
      '01088': 2,
      '01089': 2,
      '01091': 2,
      '02006': 1,
      '02007': 1,
      '02016': 1,
      '02017': 2,
      '02018': 1,
      '02028': 1,
      '02030': 1,
      '02036': 1,
    },

    // Rex Murphy
    '02002': {
      '01000': 1,
      '01030': 1,
      '01031': 1,
      '01032': 1,
      '01033': 1,
      '01034': 1,
      '01035': 1,
      '01036': 1,
      '01037': 1,
      '01038': 1,
      '01039': 1,
      '01045': 1,
      '01046': 1,
      '01050': 1,
      '01053': 1,
      '01087': 2,
      '01088': 2,
      '01090': 2,
      '01092': 2,
      '02008': 1,
      '02009': 1,
      '02020': 1,
      '02022': 2,
      '02023': 2,
      '02025': 1,
      '01086': 2,
    },

    // Jenny Barnes
    '02003': {
      '01000': 1,
      '01021': 1,
      '01024': 1,
      '01025': 1,
      '01044': 1,
      '01045': 1,
      '01046': 1,
      '01047': 1,
      '01048': 1,
      '01049': 1,
      '01050': 1,
      '01051': 1,
      '01052': 1,
      '01053': 1,
      '01086': 2,
      '01087': 2,
      '01088': 2,
      '01091': 2,
      '01092': 2,
      '02010': 1,
      '02011': 1,
      '02016': 1,
      '02018': 1,
      '02024': 2,
      '02025': 1,
      '02026': 2,
    },
    // Jim Culver
    '02004': {
      '01000': 1,
      '01058': 1,
      '01059': 1,
      '01060': 1,
      '01061': 1,
      '01062': 1,
      '01063': 1,
      '01064': 1,
      '01065': 1,
      '01066': 1,
      '01067': 1,
      '01075': 1,
      '01078': 1,
      '01079': 1,
      '01080': 1,
      '01086': 2,
      '01087': 2,
      '01088': 2,
      '01089': 2,
      '01093': 2,
      '02012': 1,
      '02013': 1,
      '02028': 1,
      '02029': 2,
      '02030': 1,
      '02033': 1,
      '02036': 1,
    },

    // Ashcan Pete
    '02005': {
      '01000': 1,
      '01030': 1,
      '01031': 1,
      '01037': 1,
      '01039': 1,
      '01072': 1,
      '01073': 1,
      '01074': 1,
      '01075': 1,
      '01076': 1,
      '01077': 1,
      '01078': 1,
      '01079': 1,
      '01080': 1,
      '01081': 1,
      '01086': 2,
      '01087': 2,
      '01088': 2,
      '01090': 2,
      '01093': 2,
      '02014': 1,
      '02015': 1,
      '02020': 1,
      '02032': 2,
      '02033': 1,
      '02034': 2,
    },
    // Mark Harrington

    '03001': {
      '01000': 1,
      '01016': 1,
      '01017': 1,
      '01018': 1,
      '01019': 1,
      '01020': 1,
      '01021': 1,
      '01022': 1,
      '01023': 1,
      '01024': 1,
      '01025': 1,
      '01038': 1,
      '01050': 1,
      '01051': 1,
      '01052': 1,
      '01078': 1,
      '01086': 2,
      '01087': 2,
      '01088': 2,
      '01091': 2,
      '01092': 1,
      '03007': 1,
      '03008': 1,
      '03020': 2,
      '03021': 2,
      '03022': 2,
      '03009': 1,
    },
    // Mihn Thi Phan
    '03002': {
      '01000': 1,
      '01030': 1,
      '01031': 1,
      '01033': 1,
      '01034': 1,
      '01035': 1,
      '01036': 1,
      '01037': 1,
      '01039': 1,
      '01072': 1,
      '01073': 1,
      '01074': 1,
      '01075': 1,
      '01076': 1,
      '01077': 1,
      '01079': 1,
      '01080': 1,
      '01081': 1,
      '01086': 2,
      '01087': 2,
      '01093': 2,
      '03010': 1,
      '03011': 1,
      '03024': 2,
      '03025': 1,
      '03026': 2,
      '03038': 2,
    },
    // Sefina Rousseau
    '03003': {
      '01000': 1,
      '01044': 1,
      '01046': 1,
      '01047': 1,
      '01048': 1,
      '01049': 1,
      '01050': 1,
      '01051': 1,
      '01052': 1,
      '01053': 1,
      '01059': 1,
      '01060': 1,
      '01061': 1,
      '01062': 1,
      '01063': 1,
      '01064': 1,
      '01065': 1,
      '01066': 1,
      '01067': 1,
      '01086': 2,
      '01087': 2,
      '01088': 2,
      '01089': 1,
      '01090': 1,
      '01092': 1,
      '03012': 3,
      '03013': 1,
      '03028': 2,
      '03029': 2,
      '03030': 2,
    },
    // Akachi Onyele
    '03004': {
      '01000': 1,
      '01058': 1,
      '01059': 1,
      '01060': 1,
      '01061': 1,
      '01062': 1,
      '01063': 1,
      '01064': 1,
      '01065': 1,
      '01066': 1,
      '01067': 1,
      '01086': 2,
      '01087': 2,
      '01088': 2,
      '01089': 2,
      '01090': 2,
      '01092': 1,
      '01093': 2,
      '03014': 1,
      '03015': 1,
      '03025': 1,
      '03032': 2,
      '03033': 2,
      '03034': 2,
    },
    // William Yorick
    '03005': {
      '01000': 1,
      '01016': 1,
      '01017': 1,
      '01018': 1,
      '01019': 1,
      '01020': 1,
      '01021': 1,
      '01022': 1,
      '01023': 1,
      '01025': 1,
      '01072': 1,
      '01073': 1,
      '01074': 1,
      '01075': 1,
      '01076': 1,
      '01077': 1,
      '01079': 1,
      '01080': 1,
      '01081': 1,
      '01086': 2,
      '01087': 2,
      '01088': 2,
      '03016': 1,
      '03017': 1,
      '03036': 2,
      '03037': 2,
      '03039': 2,
    },
    // Lola Hayes
    '03006': {
      '01000': 1,
      '01016': 1,
      '01018': 1,
      '01019': 1,
      '01020': 1,
      '01023': 1,
      '01025': 1,
      '01030': 1,
      '01031': 1,
      '01033': 1,
      '01037': 1,
      '01038': 1,
      '01039': 1,
      '01072': 1,
      '01076': 1,
      '01078': 1,
      '01079': 1,
      '01080': 1,
      '01081': 1,
      '01086': 2,
      '01087': 2,
      '01088': 2,
      '01090': 2,
      '01091': 2,
      '01092': 2,
      '01093': 2,
      '03018': 2,
      '03019': 2,
      '03021': 1,
      '03026': 1,
      '03038': 1,
    },
    // Leo Anderson
    '04001': {
      '01000': 1,
      '01016': 1,
      '01017': 1,
      '01018': 1,
      '01019': 1,
      '01020': 1,
      '01021': 1,
      '01022': 1,
      '01023': 1,
      '01024': 1,
      '01025': 1,
      '01044': 1,
      '01047': 1,
      '01048': 1,
      '01049': 1,
      '01050': 1,
      '01053': 1,
      '01087': 2,
      '01088': 1,
      '01090': 1,
      '01091': 1,
      '04006': 1,
      '04007': 1,
      '04017': 2,
      '04018': 2,
      '04019': 2,
      '04026': 2,
      '04037': 1,
    },
    // Ursula Downs
    '04002': {
      '01000': 1,
      '01030': 1,
      '01031': 1,
      '01032': 1,
      '01033': 1,
      '01034': 1,
      '01035': 1,
      '01036': 1,
      '01037': 1,
      '01038': 1,
      '01039': 1,
      '01086': 1,
      '01087': 2,
      '01088': 2,
      '01089': 1,
      '01090': 1,
      '01092': 2,
      '01093': 2,
      '04008': 1,
      '04009': 1,
      '04021': 2,
      '04023': 2,
      '04024': 2,
      '04030': 2,
      '04037': 1,
    },
    // Finn Edwards
    '04003': {
      '01000': 1,
      '01044': 1,
      '01045': 1,
      '01046': 1,
      '01047': 1,
      '01048': 1,
      '01049': 1,
      '01050': 1,
      '01051': 1,
      '01052': 1,
      '01053': 1,
      '01073': 1,
      '01075': 1,
      '01077': 1,
      '01080': 1,
      '01081': 1,
      '01086': 2,
      '01087': 2,
      '01088': 2,
      '01090': 1,
      '01091': 1,
      '04010': 1,
      '04011': 1,
      '04012': 1,
      '04026': 2,
      '04027': 2,
      '04028': 2,
      '04037': 1,
    },
    // Father Mateo
    '04004': {
      '01000': 1,
      '01059': 1,
      '01060': 1,
      '01061': 1,
      '01062': 1,
      '01063': 1,
      '01064': 1,
      '01065': 1,
      '01066': 1,
      '01067': 1,
      '01071': 1,
      '01086': 1,
      '01087': 2,
      '01088': 2,
      '01089': 2,
      '01090': 1,
      '01092': 2,
      '01093': 2,
      '04013': 1,
      '04014': 1,
      '04029': 2,
      '04030': 2,
      '04031': 1,
      '04032': 2,
      '04037': 1,
    },
    // Calvin Wright
    '04005': {
      '01000': 1,
      '01065': 1,
      '01072': 1,
      '01073': 1,
      '01074': 1,
      '01075': 1,
      '01076': 1,
      '01077': 1,
      '01078': 1,
      '01079': 1,
      '01080': 1,
      '01081': 1,
      '01086': 2,
      '01087': 2,
      '01088': 2,
      '01089': 1,
      '01090': 1,
      '01091': 1,
      '01092': 1,
      '01093': 2,
      '04015': 1,
      '04016': 1,
      '04033': 2,
      '04034': 2,
      '04036': 2,
      '04037': 1,
    },
    // Carolyn Fern
    '05001': {
      '01000': 1,
      '05007': 1,
      '05008': 1,
      '01019': 1,
      '01020': 1,
      '01021': 1,
      '01030': 1,
      '01031': 1,
      '01032': 1,
      '01033': 1,
      '01034': 1,
      '01035': 1,
      '01058': 1,
      '01060': 1,
      '01086': 1,
      '01087': 2,
      '05024': 1,
      '01023': 1,
      '01036': 1,
      '01037': 1,
      '01038': 1,
      '01064': 1,
      '01065': 1,
      '01088': 2,
      '05021': 2,
      '01039': 1,
      '01067': 1,
      '01090': 1,
      '05022': 2,
    },
    // Joe Diamond
    '05002': {
      '01000': 1,
      '05009': 1,
      '05010': 1,
      '01016': 1,
      '01017': 1,
      '01018': 1,
      '01019': 1,
      '01020': 1,
      '01021': 1,
      '01030': 1,
      '01031': 1,
      '01032': 1,
      '01033': 1,
      '01034': 1,
      '01035': 1,
      '01086': 2,
      '01087': 2,
      '05024': 2,
      '01022': 1,
      '01023': 1,
      '01024': 1,
      '01036': 1,
      '01037': 1,
      '01038': 1,
      '01088': 2,
      '05020': 2,
      '05021': 2,
      '05025': 2,
      '01025': 1,
      '01039': 1,
      '01090': 1,
      '01091': 1,
      '05022': 2,
      '05026': 2,
    },
    // Preston
    '05003': {
      '01000': 1,
      '05011': 1,
      '05012': 1,
      '01048': 1,
      '01049': 1,
      '01072': 1,
      '01073': 1,
      '01074': 1,
      '01075': 1,
      '01076': 1,
      '01077': 1,
      '01086': 2,
      '01087': 2,
      '05028': 2,
      '01050': 1,
      '01051': 1,
      '01052': 1,
      '01078': 1,
      '01079': 1,
      '01080': 1,
      '01088': 2,
      '05029': 2,
      '01053': 1,
      '01081': 1,
      '01093': 2,
      '05030': 2,
    },
    // Diana
    '05004': {
      '01000': 1,
      '05013': 1,
      '05014': 1,
      '05015': 1,
      '01016': 1,
      '01017': 1,
      '01018': 1,
      '01020': 1,
      '01021': 1,
      '01058': 1,
      '01059': 1,
      '01060': 1,
      '01061': 1,
      '01062': 1,
      '01063': 1,
      '01086': 2,
      '01087': 2,
      '01022': 1,
      '01023': 1,
      '01024': 1,
      '01064': 1,
      '01065': 1,
      '01066': 1,
      '01088': 2,
      '05020': 2,
      '05021': 2,
      '05032': 2,
      '05033': 2,
      '01025': 1,
      '01067': 1,
      '01091': 1,
      '05034': 1,
    },
    // Rita
    '05005': {
      '01000': 1,
      '05016': 1,
      '05017': 1,
      '01072': 1,
      '01073': 1,
      '01074': 1,
      '01075': 1,
      '01076': 1,
      '01077': 1,
      '01086': 2,
      '01087': 2,
      '05036': 2,
      '01078': 1,
      '01079': 1,
      '01080': 1,
      '05037': 2,
      '01088': 2,
      '01081': 1,
      '01089': 2,
      '01090': 1,
      '01091': 1,
      '01092': 2,
      '01093': 2,
      '05038': 2,
    },
    // Marie
    '05006': {
      '01000': 1,
      '05018': 1,
      '05019': 1,
      '01058': 1,
      '01059': 1,
      '01060': 1,
      '01061': 1,
      '01062': 1,
      '01063': 1,
      '01086': 2,
      '01087': 2,
      '01064': 1,
      '01065': 1,
      '01066': 1,
      '01088': 2,
      '05032': 2,
      '05033': 2,
      '05037': 2,
      '01067': 1,
      '01089': 2,
      '01093': 2,
      '05034': 2,
      '05038': 2,
    },
    // Tommy Muldoon
    '06001': {
      '01000': 1,
      '06006': 1,
      '06007': 1,
      '01016': 1,
      '01017': 1,
      '01018': 1,
      '01019': 1,
      '01020': 1,
      '01021': 1,
      '01072': 1,
      '01073': 1,
      '01074': 1,
      '01075': 1,
      '01077': 1,
      '01087': 2,
      '06020': 3,
      '01022': 1,
      '01023': 1,
      '01024': 1,
      '01078': 1,
      '01079': 1,
      '01080': 1,
      '01088': 1,
      '06034': 3,
      '01025': 1,
      '01081': 1,
      '01091': 1,
    },
    // Mandy Thompson
    '06002': {
      '01000': 1,
      '06008': 1,
      '06009': 1,
      '01030': 1,
      '01031': 1,
      '01032': 1,
      '01033': 1,
      '01034': 1,
      '01035': 1,
      '01086': 2,
      '01087': 2,
      '01036': 1,
      '01037': 1,
      '01038': 1,
      '01050': 1,
      '01051': 1,
      '01052': 1,
      '01088': 2,
      '06023': 3,
      '01039': 1,
      '01053': 1,
      '01090': 2,
      '01091': 1,
      '01092': 2,
      '01093': 2,
    },
    // Tony Morgan
    '06003': {
      '01000': 1,
      '06010': 1,
      '06011': 2,
      '06012': 1,
      '01044': 1,
      '01045': 1,
      '01046': 1,
      '01047': 1,
      '01048': 1,
      '01049': 1,
      '01086': 2,
      '01087': 2,
      '06024': 2,
      '01022': 1,
      '01023': 1,
      '01024': 1,
      '01050': 1,
      '01051': 1,
      '01052': 1,
      '01088': 2,
      '01025': 1,
      '01053': 1,
      '01089': 2,
      '01090': 2,
      '01091': 2,
      '01092': 2,
    },
    // Luke Robinson
    '06004': {
      '01000': 1,
      '06013': 1,
      '06014': 1,
      '01030': 1,
      '01031': 1,
      '01032': 1,
      '01033': 1,
      '01034': 1,
      '01035': 1,
      '01058': 1,
      '01059': 1,
      '01060': 1,
      '01061': 1,
      '01062': 1,
      '01063': 1,
      '01086': 2,
      '01087': 2,
      '01036': 1,
      '01037': 1,
      '01038': 1,
      '01064': 1,
      '01065': 1,
      '01066': 1,
      '01088': 2,
      '06023': 1,
      '06029': 3,
      '01039': 1,
      '01067': 1,
    },
    // Patrice
    '06005': {
      '01000': 1,
      '06016': 1,
      '06017': 1,
      '01058': 1,
      '01059': 1,
      '01060': 2,
      '01061': 1,
      '01062': 1,
      '01063': 1,
      '01072': 1,
      '01073': 1,
      '01074': 2,
      '01075': 1,
      '01076': 2,
      '01077': 1,
      '01086': 2,
      '01087': 2,
      '01064': 1,
      '01065': 2,
      '01066': 2,
      '01078': 1,
      '01079': 1,
      '01080': 2,
      '01088': 2,
      '06034': 3,
      '06029': 3,
      '01067': 1,
      '01081': 1,
      '01089': 2,
      '01093': 2,
    },
    // Sister Mary
    '07001': {
      '01000': 1,
      '07006': 1,
      '01017': 1,
      '01018': 1,
      '01019': 1,
      '01021': 1,
      '01058': 1,
      '01059': 1,
      '01060': 1,
      '01061': 1,
      '01062': 1,
      '01087': 2,
      '07017': 2,
      '07018': 2,
      '07019': 2,
      '01022': 1,
      '01023': 1,
      '01024': 1,
      '01064': 1,
      '01065': 1,
      '01066': 1,
      '01088': 1,
      '07020': 2,
      '07031': 2,
      '01025': 1,
      '01067': 1,
      '07007': 1,
    },
    // Amanda
    '07002': {
      '01000': 1,
      '01030': 1,
      '01031': 1,
      '01032': 2,
      '01033': 1,
      '01034': 1,
      '01035': 1,
      '01086': 2,
      '01087': 2,
      '07008': 1,
      '01036': 1,
      '01037': 1,
      '01038': 1,
      '01088': 2,
      '07023': 1,
      '01039': 1,
      '01089': 2,
      '01090': 2,
      '01091': 2,
      '01092': 2,
      '01093': 2,
      '07024': 2,
      '07009': 1,
    },
    // Trish
    '07003': {
      '01000': 1,
      '01030': 1,
      '01031': 1,
      '01033': 1,
      '01034': 1,
      '01044': 1,
      '01045': 1,
      '01046': 1,
      '01047': 1,
      '01048': 1,
      '01049': 1,
      '01087': 2,
      '07021': 2,
      '07025': 2,
      '07026': 1,
      '07027': 1,
      '07010': 1,
      '01036': 1,
      '01037': 1,
      '01038': 1,
      '01050': 1,
      '01051': 1,
      '01052': 1,
      '01088': 2,
      '07023': 1,
      '07028': 1,
      '01039': 1,
      '01053': 1,
      '07011': 1,
    },
    // Dexter
    '07004': {
      '01000': 1,
      '07012': 1,
      '01044': 1,
      '01047': 1,
      '01048': 1,
      '01049': 1,
      '01058': 1,
      '01059': 1,
      '01060': 1,
      '01061': 1,
      '01062': 1,
      '01063': 1,
      '01086': 1,
      '01087': 2,
      '07026': 1,
      '07027': 1,
      '07029': 2,
      '01050': 1,
      '01052': 1,
      '01064': 1,
      '01065': 1,
      '01066': 1,
      '01088': 2,
      '07028': 1,
      '07030': 2,
      '07037': 1,
      '01053': 1,
      '01067': 1,
      '07032': 2,
      '07013': 1,
    },
    // Silas
    '07005': {
      '01000': 1,
      '07014': 1,
      '07015': 1,
      '01074': 2,
      '01075': 1,
      '01087': 2,
      '07033': 1,
      '01078': 1,
      '01079': 2,
      '01080': 2,
      '01088': 1,
      '07034': 2,
      '07037': 1,
      '01081': 1,
      '01089': 2,
      '01090': 2,
      '01091': 2,
      '01092': 2,
      '01093': 2,
      '07035': 2,
      '07036': 2,
      '07016': 1,
    },
    // Nate
    '60101': {
      '60102': 1,
      '60103': 1,
      '60104': 1,
      '60105': 2,
      '60106': 2,
      '60107': 2,
      '01017': 2,
      '60109': 2,
      '60110': 2,
      '60111': 2,
      '60112': 2,
      '01023': 2,
      '60114': 2,
      '60115': 2,
      '60116': 2,
      '60117': 2,
      '60118': 2,
      '01025': 2,
    },
    // Harvey
    '60201': {
      '60202': 1,
      '60203': 1,
      '60204': 1,
      '60205': 2,
      '60206': 2,
      '60207': 2,
      '60208': 2,
      '60209': 2,
      '60210': 2,
      '60211': 2,
      '02020': 2,
      '60213': 2,
      '60214': 2,
      '60215': 2,
      '60216': 2,
      '60217': 2,
      '02186': 2,
      '01039': 2,
    },
    // Wini
    '60301': {
      '60302': 1,
      '60303': 1,
      '60304': 1,
      '60305': 2,
      '60306': 2,
      '01044': 2,
      '04107': 2,
      '60309': 2,
      '60310': 2,
      '60311': 2,
      '03194': 2,
      '03030': 2,
      '04232': 2,
      '60315': 2,
      '60316': 2,
      '60317': 2,
      '60318': 2,
      '01053': 2,
    },
    // Jacqueline
    '60401': {
      '60402': 1,
      '60403': 1,
      '60404': 1,
      '02029': 2,
      '60406': 2,
      '60407': 2,
      '60408': 2,
      '60409': 2,
      '60410': 2,
      '60411': 2,
      '60412': 2,
      '03034': 2,
      '02153': 2,
      '60415': 2,
      '60416': 2,
      '04032': 2,
      '02190': 2,
      '60419': 2,
    },
    // Stella
    '60501': {
      '60502': 3,
      '60503': 1,
      '60504': 1,
      '60505': 2,
      '60506': 2,
      '60507': 2,
      '60508': 2,
      '60509': 2,
      '01075': 2,
      '60511': 2,
      '60512': 2,
      '60513': 2,
      '04034': 2,
      '60515': 2,
      '04200': 2,
      '01079': 2,
      '02113': 2,
      '04201': 2,
    },
  },
};

export default starterDecks;
