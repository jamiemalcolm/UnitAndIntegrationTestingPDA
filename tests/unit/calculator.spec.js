import { assert, expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
  it('enterNum changes running total', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 4
    wrapper.vm.add('5');
    expect(wrapper.vm.runningTotal).to.equal(9)
  })
})
it('should add 1 to 4 = 5', () => {
  const wrapper = shallowMount(App)
  wrapper.vm.previousTotal = 4
  wrapper.vm.add('1');
  expect(wrapper.vm.runningTotal).to.equal(5)
} )

it('should subtract 4 from 7 and get 3', () => {
  const wrapper = shallowMount(App)
  wrapper.vm.previousTotal = 7
  wrapper.vm.subtract('4');
  expect(wrapper.vm.runningTotal).to.equal(3)
})