import { atom } from "recoil"

const itemsToCompare = atom({
  key: 'itemsToCompare',
  default: []
});

export default itemsToCompare;