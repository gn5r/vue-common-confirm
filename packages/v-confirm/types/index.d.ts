export type Colors =
  | "primary"
  | "secondary"
  | "accent"
  | "error"
  | "info"
  | "success"
  | "warning";

export type VConfirmBtn = {
  text?: string;
  color?: Colors;
  function: FunctionConstructor;
};

import { VueConstructor } from "vue/types";
export const VConfirm: VueConstructor;
export default VConfirm;
