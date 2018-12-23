<template>
  <v-app light>
    <!-- <v-toolbar class="white"> -->
    <!-- <v-toolbar-title v-text="title"></v-toolbar-title> -->
    <!-- </v-toolbar> -->
    <v-content>
      <!-- <v-parallax :src="require('assets/images/background4.jpg')" height="1000"> -->
      <section class="firstview">
        <!-- <vue-particles
          color="#dedede"
          :particleOpacity="0.7"
          :particlesNumber="80"
          shapeType="circle"
          :particleSize="4"
          linesColor="#dedede"
          :linesWidth="1"
          :lineLinked="true"
          :lineOpacity="0.4"
          :linesDistance="150"
          :moveSpeed="3"
          :hoverEffect="true"
          hoverMode="grab"
          :clickEffect="true"
          clickMode="push"
        ></vue-particles>-->
        <!-- <img id="bg" src="~assets/images/background4.jpg" alt="very cool bg" v-parallax="0.4"> -->
        <!-- <v-layout column align-center justify-center class="white--text"> -->
        <!-- <img :src="require('assets/images/background4.jpg')" alt="very cool bg"> -->
        <!-- <img src="assets/vuetify.png" alt="Vuetify.js" height="200"> -->
        <div class="p-container">
          <!-- <h1 class="white--text mb-2 display-1 text-xs-center">Welcome to KEI's portfolio</h1> -->
          <div class="p-bg"></div>
          <h1 class="p-content white--text display-1 text-xs-center">Welcome to KEI's portfolio</h1>
          <!-- <h1 class="p-content white--text display-1 text-xs-center">Welcome to KEI's portfolio</h1> -->
        </div>
        <!-- <div class="subheading mb-3 text-xs-center">Powered by Vuetify</div> -->
        <!-- <v-btn class="blue lighten-2 mt-5" dark large href="/pre-made-themes">Get Started</v-btn> -->
        <!-- </v-layout> -->
      </section>
      <section class="about"></section>
      <!-- </v-parallax> -->
      <section>
        <v-layout column wrap class="my-5" align-center>
          <v-flex xs12 sm4 class="my-3">
            <div class="text-xs-center">
              <h2 class="headline">The best way to start developing</h2>
              <span class="subheading">Cras facilisis mi vitae nunc</span>
            </div>
          </v-flex>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">color_lens</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Material Design</div>
                    </v-card-title>
                    <v-card-text>
                      Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                      Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">flash_on</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline">Fast development</div>
                    </v-card-title>
                    <v-card-text>
                      Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                      Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">build</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Completely Open Sourced</div>
                    </v-card-title>
                    <v-card-text>
                      Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                      Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>

      <section>
        <v-parallax src="~assets/background4.jpg" height="380">
          <v-layout column align-center justify-center>
            <div
              class="headline white--text mb-3 text-xs-center"
            >Web development has never been easier</div>
            <em>Kick-start your application today</em>
            <v-btn class="blue lighten-2 mt-5" dark large href="/pre-made-themes">Get Started</v-btn>
          </v-layout>
        </v-parallax>
      </section>

      <section>
        <v-container grid-list-xl>
          <v-layout row wrap justify-center class="my-5">
            <v-flex xs12 sm4>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Company info</div>
                </v-card-title>
                <v-card-text>
                  Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                  Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                  Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 sm4 offset-sm1>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Contact us</div>
                </v-card-title>
                <v-card-text>Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.</v-card-text>
                <v-list class="transparent">
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">phone</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>777-867-5309</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">place</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>Chicago, US</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">email</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>john@vuetifyjs.com</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </section>

      <v-footer class="blue darken-2">
        <v-layout row wrap align-center>
          <v-flex xs12>
            <div class="white--text ml-3">
              Made with
              <v-icon class="red--text">favorite</v-icon>by
              <a class="white--text" href="https://vuetifyjs.com" target="_blank">Vuetify</a>
              and
              <a class="white--text" href="https://github.com/vwxyzjn">Costa Huang</a>
            </div>
          </v-flex>
        </v-layout>
      </v-footer>
    </v-content>
  </v-app>
</template>
<script>
// import Parallax from "vue-parallaxy";
// export default {
//   data() {
//     return {
//       title: "Logo"
//     };
//   }
// components: {
//   Parallax
// }
// };
</script>
<style lang="scss">
#bg {
  // width: 100%;
}
.firstview {
  // background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
  // url("~assets/images/background7.jpg");
  position: relative;
  background-image: url("~assets/images/background7.jpg");
  background-size: cover;
  background-attachment: fixed;
  height: 100vh;
  width: 100%;
  background-position: center;

  // background-position: center top;
  // padding: 70px 90px 120px 90px;

  // opacity: 0.8;
  // height: 100%;
  // height: 100vh;
  .v-parallax {
    // height: 100%;
  }
  .v-parallax {
    // min-height: 500px;
  }
  .v-parallax__content {
    // height: 1000px;
  }
  .v-parallax__image-container {
    // height: 500px;
  }
  .v-parallax__image-container img {
    // width: 100%;
  }

  // .v-parallax__image-container {
  // height: 100%;
  img {
    // height: 500px;
    // width: 50%;
  }
  // }
}
.p-container {
  position: relative;
  // background-repeat: no-repeat;
  // background-size: 1080px auto;
  // width: 100%;
  top: 50%;

  // top: 0px;
  // right: 0px;
  // bottom: 0px;
  // left: 0px;
  transform: translate(0%, -50%);
  .p-bg {
    position: absolute;
    background-image: url("~assets/images/background7.jpg");
    background-attachment: fixed;
    background-size: cover;
    background-position: center 140px;

    z-index: 900;
    // top: 0px;
    // right: 0px;
    // bottom: 0px;
    // left: 0px;

    // top: 50%;
    // left: 50%;
    // background-color: #000;
    // background-size: 500px auto;
    // background: rgb(34, 34, 34); /* for IE */
    // background: rgba(34, 34, 34, 0.75);
    padding: 120px 0;
    filter: blur(10px);
    height: 100%;
    width: 100%;
    // padding: 120px 0;
    // width: 50%;
    // padding: 100px 100px;
    // transform: translate(-50%, -50%);
  }
  .p-content {
    position: relative;
    z-index: 1000;
    padding: 120px 0;
    background: rgb(34, 34, 34); /* for IE */
    background: rgba(34, 34, 34, 0.75);
  }
}
.p-container h1 {
  // position: absolute;
  // background-size: 500px auto;
  // top: 0;
  // right: 0;
  // bottom: 0;
  // left: 0;
}
</style>
