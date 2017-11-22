import Vue from 'vue'
import phoneTest from '@/components/phoneTest'

describe('phoneTest.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(phoneTest)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.app').textContent)
    .to.equal('1111111')
    
  })
})
