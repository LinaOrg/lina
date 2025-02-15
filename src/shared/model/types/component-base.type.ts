import { TSize } from "./size.type";
import { TColors } from "./colors.type";

export type TComponentBase = {
  size?: TSize;
  color?: TColors;
  isDisabled?: boolean;
  className?: string;
};
