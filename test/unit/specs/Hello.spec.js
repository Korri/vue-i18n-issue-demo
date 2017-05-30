import Vue from 'vue';
import VueI18n from 'vue-i18n';
import Hello from '@/components/Hello';

Vue.use(VueI18n);

const i18n = new VueI18n({
    locale: 'en',
});

describe('Hello.vue', () => {
    it('should render correct contents', () => {
        const Constructor = Vue.extend(Hello);
        const vm = new Constructor({ i18n }).$mount();
        expect(vm.$el.querySelector('.hello h1').textContent)
            .to.equal('Hello World You');
        expect(vm.$el.querySelector('.hello h1').textContent)
            .to.equal('Hello World You');
    });
});
