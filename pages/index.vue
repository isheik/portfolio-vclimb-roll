<template>
  <div class="container">
    <!-- <full-page ref="fullpage" :options="options" id="fullpage">
        <div class="section">
          First section ...
        </div>
        <div class="section">
          Second section ...
        </div>
      </full-page> -->
    <!-- <app/> -->
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
  </div>
</template>

<script>
// import AppLogo from "~/components/AppLogo.vue";
// import App from "~/components/App";

export default {
  // components: {
  // App
  // },
  // name: "app",
  data() {
    return {
      options: {
        licenseKey: "OPEN-SOURCE-GPLV3-LICENSE"
      }
    };
  }
};
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
