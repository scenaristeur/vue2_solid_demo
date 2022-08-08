# vue2_solid_demo

# Vue.js 2.x components to do all the boring things when creating a Solid decentralized app

[What is the Solid Project](https://solidproject.org/)

[demo](https://scenaristeur.github.io/vue2_solid_demo)

[doc](https://github.com/scenaristeur/vue2_solid)


# Usage
- create a new vuejs app !!!(be sure to choose the version Vue.js 2.x (does not work with Vue 3.x))!!!

prerequis : nodejs > 16, vue-cli


```
npm install -g @vue/cli
vue create myapp

? Please pick a preset: Manually select features
? Check the features needed for your project: Babel, PWA, Router, Vuex, Linter
? Choose a version of Vue.js that you want to start the project with 2.x
? Use history mode for router? (Requires proper server setup for index fallback in production) Yes
? Pick a linter / formatter config: Basic
? Pick additional lint features: Lint on save
? Where do you prefer placing config for Babel, ESLint, etc.? In dedicated config files
? Save this as a preset for future projects? Yes
? Save preset as: my_model



```

- install @smag0/vue2_solid
```
cd myapp
npm install --save @smag0/vue2_solid

npm run serve
```
- import Vue2Solid in the src/main.js of your app, providing the store to the plugin
```
import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import Vue2Solid from 'vue2-solid' //   <------ here
Vue.use(Vue2Solid, {store: store});     <------ & here

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
  }).$mount('#app')

  ```

  - enjoy ! and use anywhere in your app
  -- exemple in src/App.vue
  ```
  <template>
  <div id="app">
  <nav>
  <router-link to="/">Home</router-link> |
  <router-link to="/about">About</router-link>
  </nav>

  <SolidLogin clientName="My Great App" />   <------ here
  <InputText />                              <------ here
  <InputTextarea />                          <------ here



  <router-view/>
  </div>
  </template>
  ...
  ```




## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
