export interface Types {
  [key: string]: Type;
}

export interface Type {
  id: string;
  value: string;
}

const types: Types = {
  empty: {
    id: 'Type',
    value: '',
  },
  Audio: {
    id: 'Audio',
    value: 'Audio',
  },
  Video: {
    id: 'Video',
    value: 'Video',
  },
  Computers: {
    id: 'Computers',
    value: 'Computers',
  },
  Foto: {
    id: 'Foto',
    value: 'Foto',
  },
  Gaming: {
    id: 'Gaming',
    value: 'Gaming',
  },
};

export default types;
