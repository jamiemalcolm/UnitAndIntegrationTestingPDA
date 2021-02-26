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
it('should add 1 to 4 = 5', function(){
  const actual = App.add(1, 4);
  const expected = 5;
  assert.strictEqual(actual, expected);
} )