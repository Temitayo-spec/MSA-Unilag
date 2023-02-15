import { atom } from 'recoil';

export const modalAtom = atom({
  key: 'modalAtom',
  default: {
    isOpen: false,
  },
});
