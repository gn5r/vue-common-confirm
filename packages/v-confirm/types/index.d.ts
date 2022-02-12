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
  class?: string | Array<string>;
  function: FunctionConstructor | VoidFunction;
};

export interface Props {
  value: boolean;
  width: string | number;
  closeable: boolean;
  title: string;
  titleColor: Colors;
  titleIcon: string;
  message: string;
  btns: Array<VConfirmBtn>;
}

import Vue, { VueConstructor } from "vue";

type CombinedVueInstance<
  Instance extends Vue,
  Data,
  Methods,
  Computed,
  Props
> = Data & Methods & Computed & Props & Instance;

type ExtendedVue<
  Instance extends Vue,
  Data,
  Methods,
  Computed,
  Props
> = VueConstructor<
  CombinedVueInstance<Instance, Data, Methods, Computed, Props> & Vue
>;

/* eslint-disable @typescript-eslint/ban-types */
declare const VConfirm: ExtendedVue<
  Vue,
  {},
  {},
  {},
  {
    value: boolean;
    width: string | number;
    closeable: boolean;
    title: string;
    titleColor: Colors;
    titleIcon: string;
    message: string;
    btns: Array<VConfirmBtn>;
  }
>;

export default VConfirm;
