import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);

//custom directives:
Vue.directive('rainbow', {
  bind(el, binding, vnode){
    el.style.color = "#" + Math.random().toString().slice(2,8);
  }
});

Vue.directive('theme', {
  bind(el, binding, vnode){
    if (binding.value == "wide") {
      el.style.maxWidth = '1200px';
    }else if (binding.value == "narrow") {
      el.style.maxWidth = '500px';
    }
  }
})

//filters
Vue.filter('to-uppercase', value => {
  return value.toUpperCase();
});

Vue.filter('snippet', value => {
  return value.slice(0,150) + ' read more...';
})

new Vue({
  el: '#app',
  render: h => h(App)
})
