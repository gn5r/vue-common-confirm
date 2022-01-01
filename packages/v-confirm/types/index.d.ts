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
  outlined?: boolean;
  class?: Array<string>;
  function: FunctionConstructor | VoidFunction;
};

import { PluginFunction } from "vue";
declare class VConfirm {
  static install: PluginFunction;
}
export default VConfirm;
