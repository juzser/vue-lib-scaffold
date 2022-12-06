import type { App } from 'vue';
import * as components from './components';

const VueLiteModal = {
  install(Vue: App) {
    console.log('VueLiteModal: ', components);
    for (const component in components) {
      const componentElement = components[component as keyof typeof components];
      Vue.component(component, componentElement);
    }
  },
};

// Export all
export default VueLiteModal;

// Export single component
export * from './components';
