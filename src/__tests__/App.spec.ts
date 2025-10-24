import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'
import App from '../App.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [],
})

describe('App', () => {
  it('renders navigation links', () => {
    const wrapper = mount(App, {
      global: {
        plugins: [router, createPinia()],
      },
    })
    expect(wrapper.text()).toContain('Home')
    expect(wrapper.text()).toContain('Filmes')
    expect(wrapper.text()).toContain('Programas de TV')
  })
})
