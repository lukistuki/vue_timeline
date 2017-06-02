// this is the main JS file
// it wrap up everyting

// add data
require('./data.js');

// include moment.js library
window.moment = require('moment');


// include Vue 2 framework
window.Vue = require('vue');

// include components
Vue.component('si-timeline', require('./components/TimeLine.vue'));
Vue.component('si-event', require('./components/Event.vue'));

//start app
const app = new Vue({
    el: '#app'
});
