import App from "@/App.vue"
import { flushPromises, mount } from "@vue/test-utils"
import { vuetify } from "../../src/plugins/vuetify"
import router from "../../src/router/index"

global.ResizeObserver = require('resize-observer-polyfill')

describe('Home', () => {
  it('navigates to About and does not 404', async () => {
    await router.push('/')
    await router.isReady()

    const wrapper = mount(App, {
      global: {
        plugins: [vuetify, router]
      }
    })

    expect(document.title.toLowerCase()).toContain('sc')
    expect(document.title.toLowerCase()).toContain('home page')
    expect(wrapper.html().toLowerCase()).toContain('welcome')

    const aboutBtn = wrapper.find('a[href="/about"]')
    await aboutBtn.trigger('click')
    await wrapper.vm.$nextTick()
    await router.isReady()
    await flushPromises()

    expect(document.title.toLowerCase()).toContain('about me')
    expect(wrapper.html().toLowerCase()).toContain('about myself')
  })
})
