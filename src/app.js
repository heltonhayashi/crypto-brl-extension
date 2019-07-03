import Vue from 'vue';
import App from './components/app.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faShoppingCart)
Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
    el: '#app',
    components: {
        App
    },
    render(h) {
        return h('app');
    }
});
