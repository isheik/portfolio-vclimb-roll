<template>
  <!-- <v-app id="v-app"> -->
  <!-- <v-parallax :src="require('assets/images/background1.jpg')" height="5000" dark> -->
  <parallax src="require('assets/images/background5.jpg')">
    <div class="container">
      <!-- <full-page id="fullpage" ref="fullpage" :options="options" v-parallax="0.4"> -->
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
    </div>
  </parallax>
  <!-- </v-parallax> -->
  <!-- </v-app> -->
</template>

<script>
// import AppLogo from "~/components/AppLogo.vue";
// import App from "~/components/App";

export default {
  // components: {
  // App
  // },
  // name: "app",
  components: {
    Parallax
  },
  mounted() {
    // fullpage_api.silentMoveTo(4);
  },
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
.fullpage-wrapper {
  width: 100%;
  /* text-align: center; */
  background-image: url("~assets/images/background1.jpg");
  background-size: auto 100%;
}
.section {
  /* background-image: url("~assets/images/background1.jpg"); */
  /* background-size: cover; */
}

#background {
  position: absolute;
  width: 100%;
  height: 100%;
}

.container {
  padding: 0;
  min-height: 100vh;
  min-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  /* background-image: url("~assets/images/background1.jpg"); */
  /* background-size: contain; */
}

/* .title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
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
} */
</style>
