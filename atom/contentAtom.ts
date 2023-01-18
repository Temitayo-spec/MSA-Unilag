import { atom } from 'recoil';
import { RecoilState } from 'recoil';

export interface ContentAtomType {
  content: string;
  title: string;
  author: string;
}

export const contentAtom: RecoilState<ContentAtomType> = atom({
  key: 'contentAtom',
  default: {
    content: '',
    title: '',
    author: '',
  },
});
