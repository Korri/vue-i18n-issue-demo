// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueI18n from 'vue-i18n'
import App from './App'

Vue.use(VueI18n)

const i18n = new VueI18n({
    locale: 'en',
})

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    i18n,
    el: '#app',
    template: '<App/>',
    components: { App }
});
