import { atom } from 'recoil';

export interface BlogAtomType {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export const blogAtom = atom({
  key: 'blog',
  default: [],
});
