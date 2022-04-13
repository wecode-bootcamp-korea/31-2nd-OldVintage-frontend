export const FILTER_WINETYPE_INFO = [
  { id: 1, info: 'Red', infoType: 'wineSort' },
  { id: 2, info: 'White', infoType: 'wineSort' },
  { id: 3, info: 'Sparkling', infoType: 'wineSort' },
];

export const FILTER_GRAPE_INFO = [
  { id: 1, info: 'CabernetSauvignon', infoType: 'grape' },
  { id: 2, info: 'Chardonnay', infoType: 'grape' },
  { id: 3, info: 'Geobong', infoType: 'grape' },
  { id: 4, info: 'Malbec', infoType: 'grape' },
  { id: 5, info: 'Montepulciano', infoType: 'grape' },
  { id: 6, info: 'Moscato', infoType: 'grape' },
];

export const FILTER_WINERY_INFO = [
  { id: 1, info: 'Dongtan', infoType: 'winery' },
  { id: 2, info: 'Hereseibe', infoType: 'winery' },
  { id: 3, info: 'Kennolith', infoType: 'winery' },
  { id: 4, info: 'Meraufroid', infoType: 'winery' },
  { id: 5, info: 'Oaytheldan', infoType: 'winery' },
  { id: 6, info: 'Pradwinus', infoType: 'winery' },
];

export const FILTER_COUNTRY_INFO = [
  { id: 1, info: 'France', infoType: 'country' },
  { id: 2, info: 'Chille', infoType: 'country' },
  { id: 3, info: 'Spain', infoType: 'country' },
  { id: 4, info: 'Portugal', infoType: 'country' },
  { id: 5, info: 'Korea', infoType: 'country' },
];

export const FILTER_FOODPAIRING_INFO = [
  { id: 1, info: 'Pork', infoType: 'foodPairing' },
  { id: 2, info: 'Beef', infoType: 'foodPairing' },
  { id: 3, info: 'Lamb', infoType: 'foodPairing' },
  { id: 4, info: 'Mushroom', infoType: 'foodPairing' },
  { id: 5, info: 'Fish', infoType: 'foodPairing' },
];

export const FILTER_CHECKBOX_CATEGORY = [
  {
    id: 1,
    title: 'Wine Types',
    filterData: FILTER_WINETYPE_INFO,
  },
  {
    id: 2,
    title: 'Wineries',
    filterData: FILTER_WINERY_INFO,
  },
  {
    id: 3,
    title: 'Countries',
    filterData: FILTER_COUNTRY_INFO,
  },
  {
    id: 4,
    title: 'Grapes',
    filterData: FILTER_GRAPE_INFO,
  },
  { id: 5, title: 'Food Pairings', filterData: FILTER_FOODPAIRING_INFO },
];

export const QUERY_FILTER_CONDITION = {
  Red: 1,
  White: 2,
  Sparkling: 3,

  Hereseibe: 1,
  Kennolith: 2,
  Meraufroid: 3,
  Oaytheldan: 4,
  Pradwinus: 5,
  Dongtan: 6,

  France: 1,
  Chille: 2,
  Spain: 3,
  Portugal: 4,
  Korea: 5,

  Malbec: 1,
  CabernetSauvignon: 2,
  Montepulciano: 3,
  Chardonnay: 4,
  Geobong: 5,
  Moscato: 6,

  Pork: 1,
  Beef: 2,
  Lamb: 3,
  Mushroom: 4,
  Fish: 5,
};
