// Vue
import Vue, { VNode, VNodeChildren } from "vue";

// Types
import { PropValidator } from "vue/types/options";
import { VConfirmBtn, Colors } from "@gn5r/vue-common-confirm/types";

// Component
import {
  VDialog,
  VCard,
  VCardTitle,
  VCardText,
  VCardActions,
  VSpacer,
  VToolbar,
  VToolbarTitle,
  VToolbarItems,
  VIcon,
  VBtn,
  VDivider,
} from "vuetify/lib";

export default Vue.extend({
  name: "v-confirm",
  model: {
    prop: "value",
    event: "change",
  },
  mixins: [],
  props: {
    value: Boolean,
    width: {
      type: [String, Number],
      default: 800,
    },
    closeable: Boolean,
    title: String,
    titleColor: {
      type: String,
      default: "primary",
    } as PropValidator<Colors>,
    titleIcon: String,
    message: String,
    btns: {
      type: Array,
      default: () => [],
    } as PropValidator<VConfirmBtn[]>,
  },
  data() {
    return {
      isActive: this.value,
    };
  },
  methods: {
    genCard(children: VNodeChildren): VNode {
      return this.$createElement(VCard, children);
    },
    genHeader(): VNode {
      const children = [];
      // create close button
      if (this.closeable) {
        const spacer = this.$createElement(VSpacer);
        children.push(spacer);
        const closeIcon = this.$createElement(
          VIcon,
          {
            on: {
              click: () => (this.internalValue = false),
            },
          },
          "mdi-close"
        );
        const toolbarItem = this.$createElement(VToolbarItems, [closeIcon]);
        children.push(toolbarItem);
      }
      // create title icon
      const titleIcon = this.titleIcon
        ? this.$createElement(VIcon, { props: { dark: true } }, this.titleIcon)
        : "";
      // create v-toolbar
      const toolbar = this.$createElement(
        VToolbar,
        {
          props: {
            color: this.titleColor,
            dense: true,
            dark: true,
          },
        },
        [
          this.$createElement(VToolbarTitle, [titleIcon, this.title]),
          ...children,
        ]
      );
      return this.$createElement(
        VCardTitle,
        {
          style: {
            padding: "0px",
          },
        },
        [toolbar]
      );
    },
    genContent(): VNode {
      return this.$createElement(
        VCardText,
        {
          class: ["black--text", "text-body-1"],
          style: {
            "overflow-wrap": "break-word",
            "white-space": "pre-wrap",
            padding: "16px",
          },
        },
        this.message
      );
    },
    genActions(): VNodeChildren {
      if (this.btns.length === 0) return [];
      const children = [];
      for (const btn of this.btns) {
        const button = this.$createElement(
          VBtn,
          {
            props: {
              color: btn.color,
              outlined: btn.outlined,
            },
            on: {
              click: btn.function,
            },
            class: btn.class ? btn.class : [],
          },
          btn.text
        );
        children.push(button);
      }
      return [
        this.$createElement(VDivider),
        this.$createElement(VCardActions, { class: ["justify-end"] }, [
          ...children,
        ]),
      ];
    },
  },
  computed: {
    internalValue: {
      set(val: boolean) {
        this.isActive = val;
        this.$emit("change", val);
      },
      get(): boolean {
        return this.isActive;
      },
    },
  },
  watch: {
    value(val: boolean): void {
      this.isActive = val;
    },
  },
  render(h): VNode {
    return h(
      VDialog,
      {
        props: {
          value: this.internalValue,
          scrollable: true,
          persistent: true,
          width: this.width,
        },
      },
      [this.genCard([this.genHeader(), this.genContent(), this.genActions()])]
    );
  },
});
