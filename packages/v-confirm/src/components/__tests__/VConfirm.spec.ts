import { createLocalVue, mount, MountOptions } from "@vue/test-utils"
import Vuetify from "vuetify"
import VConfirm from "@/components/VConfirm"
import { VConfirmBtn } from "@gn5r/vue-common-confirm/types"

describe("VConfirm.ts", () => {
  const localVue = createLocalVue()
  let vuetify: Vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
  })

  type Instance = InstanceType<typeof VConfirm>;
  const mountFunc = (options?: MountOptions<Instance>) =>
    mount(VConfirm, { localVue, vuetify, ...options })

  it("should render", () => {
    const wrapper = mountFunc()
    expect(wrapper.html()).toMatchSnapshot()
  })

  it("should render the toolbar", () => {
    const wrapper = mountFunc({
      propsData: { value: true, title: "dialog title", titleColor: "primary" }
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it("should render the close icon in toolbar", () => {
    const wrapper = mountFunc({ propsData: { value: true, closeable: true } })
    expect(wrapper.html()).toMatchSnapshot()
    const closeIcon = wrapper.find(".mdi-close")
    expect(closeIcon.exists()).toBe(true)
  })

  it("emitting change event when click the close icon", async () => {
    const wrapper = mountFunc({ propsData: { value: true, closeable: true } })
    await wrapper.find(".mdi-close").trigger("click")
    expect((wrapper.vm as any).isActive).toBe(false)
    const event = wrapper.emitted().change
    expect(event).toBeTruthy()
  })

  it("should render the message text", () => {
    const message = "test\nmessage"
    const wrapper = mountFunc({ propsData: { value: true, message: message } })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it("should render the buttons", () => {
    const btns = [
      {
        text: "test"
      }
    ] as Array<VConfirmBtn>
    const wrapper = mountFunc({ propsData: { value: true, btns: btns } })
    expect(wrapper.html()).toMatchSnapshot()
    const cardActions = wrapper.find(".v-card__actions")
    const vbtns = cardActions.element.getElementsByClassName("v-btn")
    expect(vbtns.length).not.toBe(0)
  })

  it("should a button function is executed when click the button", async () => {
    const btns = [
      {
        text: "test",
        function: jest.fn()
      }
    ]
    const wrapper = mountFunc({ propsData: { value: true, btns: btns } })
    const btnFunction = jest.spyOn((wrapper.vm as any).btns[0], "function")
    await wrapper.find(".v-card__actions .v-btn").trigger("click")
    expect(btnFunction).toBeCalled()
  })
})
