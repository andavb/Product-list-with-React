export interface SortType {
  [key: string]: string;
}

const sortTypes: SortType = {
  Empty: 'Sort',
  PriceTimeASC: 'High price',
  PriceTimeDESC: 'Low price',
  TitleASC: 'Title ascending',
  TitleDESC: 'Title descending',
  RatingASC: 'High rating',
  RatingDESC: 'Low rating',
};

export default sortTypes;
