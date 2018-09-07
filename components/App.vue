<template>
  <!-- <div id="app"> -->
  <!-- <div> -->
  <!-- <full-page ref="fullpage" :options="options" id="fullpage">
        <div class="section">
          First section ...
        </div>
        <div class="section">
          Second section ...
        </div>
      </full-page> -->
  <full-page id="fullpage" ref="fullpage" :options="options">
    <div class="section">
      <h3>Section 1</h3>
    </div>
    <div class="section">
      <h3>Section 2</h3>
    </div>
    <div class="section">
      <h3>Section 3</h3>
    </div>
    <div class="section">
      <h3>Section 4</h3>
    </div>
       <div class="section">
      <h3>Section 5</h3>
    </div>
  </full-page>
  <!-- <full-page>
      <div class="section">
        <button @click="$refs.fullpage.api.moveSectionDown()">
            Next
        </button>
        Section 1
      </div>
      <div class="section">
        <button @click="$refs.fullpage.api.moveSectionUp()">
            Prev
        </button>
        Section 2
      </div>
    </full-page> -->
  <!-- <app-logo/>
      <h1 class="title">
        portfolio-vclimb-roll
      </h1>
      <h2 class="subtitle">
        Nuxt.js project
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green">Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey">GitHub</a>
      </div> -->
  <!-- </div> -->
</template>

<script>
// import Vue from "vue";

// const App = new Vue({
//   el: "#app",
//   name: "app",
//   data() {
//     return {
//       options: {
//         licenseKey: "OPEN-SOURCE-GPLV3-LICENSE"
//       }
//     };
//   }
// render: h => h(this)
// });

export default {
  // el: "#app",
  name: "App",
  data() {
    return {
      options: {
        licenseKey: "OPEN-SOURCE-GPLV3-LICENSE"
      }
    }
  }
}
// export default App;

// import Vue from "vue";
// import VueFullPage from "vue-fullpage.js";

// Vue.use(VueFullPage);

// new Vue({
//   el: "#app",
//   render: h => h(App)
// });
</script>
