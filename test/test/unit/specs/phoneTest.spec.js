import Vue from 'vue'
// import { destroyVM, createTest, createVue } from 'static/util.js'
import phoneTest from '@/components/phoneTest'

describe('phoneTest.vue', () => {
  // function getRenderedVm(phoneTest, time) {
  //   const Ctor = Vue.extend(phoneTest)
  //   const vm = new Ctor({ time }).$mount()
  //   return vm
  // }
  // it('test time', () => {
  //   let childvm = getRenderedVm(phoneTest, {
  //     time: '30'
  //   });

  //   // 断言组件的child组件的props是否生效
  //   expect(childvm.time).toEqual('30');
  // });

// it('should have props from app', () => {
//   const Constructor = Vue.extend(phoneTest)
//   const vm = new Constructor().$mount()
//   const ob = {
//     time: 30,
//     msg: 'aaa',
//     hasbtn: false
//   }
//   const vue = new Vue({
//     template: '<v-phone :time="-4" :descript="msg" :hasbtn="true"></v-phone>',
//     cmponents: { phoneTest },
//     data: { ob: ob }
//   })
//   expect(vue.data.time).to.equal(30)
// })

it('input phone number', () => {
  const Constructor = Vue.extend(phoneTest);
  const ObjComponent = new Constructor().$mount();
  // set input value
  ObjComponent.newItem = '13104013181';
  // simulate click event
  const button = ObjComponent.$el.querySelector('input');
  const clickEvent = new window.Event('click');
  button.dispatchEvent(clickEvent);
  ObjComponent._watcher.run();
  // assert list contains new item
  expect(ObjComponent.$el.textContent).to.contain('发送验证码');
  // expect(ObjComponent.listItems).to.contain('brush my teeth');
})
it('btn on click', () => {
  // build component
  const Constructor = Vue.extend(phoneTest);
  const ObjComponent = new Constructor().$mount();
  // set input value
  ObjComponent.newItem = 'lalala';
  // simulate click event
  const button = ObjComponent.$el.querySelector('.btn');
  const clickEvent = new window.Event('click');
  button.dispatchEvent(clickEvent);
  ObjComponent._watcher.run();
  // assert list contains new item
  expect(ObjComponent.$el.textContent).to.contain('发送验证码');
  // expect(ObjComponent.listItems).to.contain('brush my teeth');
})
})