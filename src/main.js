import Vue from 'vue'
import App from './App.vue'
import jQuery from 'jquery'
import 'bootstrap/dist/css/bootstrap.css'
global.jQuery = jQuery
let Bootstrap = require('bootstrap')
new Vue({
  el: '#app',
  render: h => h(App)
})
