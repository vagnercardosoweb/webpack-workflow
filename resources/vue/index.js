import Vue from 'vue';

import TestComponent from './components/test';

[TestComponent].forEach((component) =>
  Vue.component(component.name, component)
);

new Vue({ el: '[vue-root]' });
