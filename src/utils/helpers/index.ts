import { isNumber } from "lodash";

export const isValidNumber = (candidate: unknown): number | null => {
  if (candidate && isNumber(Number(candidate))) {
    return Number(candidate);
  }

  return null;
};
