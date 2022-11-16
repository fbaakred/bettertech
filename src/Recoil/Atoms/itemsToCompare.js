import { atom } from "recoil"

import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

const itemsToCompare = atom({
  key: 'itemsToCompare',
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export default itemsToCompare;