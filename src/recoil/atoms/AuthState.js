import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const AuthStateAtom = atom({
  key: "AuthStateAtom",
  default: {
    token: null,
    loginstate: "N",
  },
  effects_UNSTABLE: [persistAtom],
});
