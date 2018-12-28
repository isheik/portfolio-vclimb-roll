<template>
  <v-app light>
    <!-- <v-toolbar class="white"> -->
    <!-- <v-toolbar-title v-text="title"></v-toolbar-title> -->
    <!-- </v-toolbar> -->
    <v-toolbar v-show="!loading" class="navbar" dark fixed scroll-off-screen>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat>About</v-btn>
        <v-btn flat>Works</v-btn>
        <v-btn flat>Contact</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-content v-show="loading">
      <section>loading....</section>
    </v-content>

    <v-content v-show="!loading">
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
          <transition name="welcome1" appear>
            <div class="p-bg" :key="1"></div>
          </transition>

          <transition name="welcome2" appear>
            <h1
              v-if="!loading"
              class="p-content white--text display-1 text-xs-center"
              :class="{show: fviewStartLoading}"
            >Welcome to KEI's portfolio</h1>
          </transition>
          <!-- <h1 class="p-content white--text display-1 text-xs-center">Welcome to KEI's portfolio</h1> -->
        </div>
        <!-- <div class="subheading mb-3 text-xs-center">Powered by Vuetify</div> -->
        <!-- <v-btn class="blue lighten-2 mt-5" dark large href="/pre-made-themes">Get Started</v-btn> -->
        <!-- </v-layout> -->
      </section>
      <!-- </v-parallax> -->
      <section class="about">
        <!-- <v-layout column wrap class="my-5" align-center> -->
        <v-layout column wrap align-center>
          <!-- <v-flex xs12 md6>
            <v-avatar :size="avatarSize" color="grey lighten-4">
              <img src="~assets/images/profile.jpg" alt="avatar">
            </v-avatar>
          </v-flex>-->
          <v-flex xs12 md6>
            <v-avatar :size="avatarSize" color="grey lighten-4">
              <img src="~assets/images/profile.jpg" alt="avatar">
            </v-avatar>
            <!-- <no-ssr> -->
            <card :data-image="image">
              <h1 slot="header">Canyons</h1>
              <p slot="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </card>
            <!-- </no-ssr> -->
          </v-flex>
          <div class="text-xs-center">
            <span class="body">Cras facilisis mi vitae nunc</span>
          </div>
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
      <section class="skill-section"></section>
      <section>
        <!-- <v-parallax src="~assets/images/background4.jpg" height="380"> -->
        <v-layout column align-center justify-center>
          <div
            class="headline white--text mb-3 text-xs-center"
          >Web development has never been easier</div>
          <em>Kick-start your application today</em>
          <v-btn class="blue lighten-2 mt-5" dark large href="/pre-made-themes">Get Started</v-btn>
        </v-layout>
        <!-- </v-parallax> -->
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
import card from "~/components/Card";
import image from "~/assets/images/background7.jpg";
// import image from "https://images.unsplash.com/photo-1479660656269-197ebb83b540?dpr=2&auto=compress,format&fit=crop&w=1199&h=798&q=80&cs=tinysrgb&crop=";
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
console.log(image);

export default {
  components: {
    card
  },
  data: function() {
    return {
      title: "test",
      loading: true,
      fviewStartLoading: false,
      avatarSize: 128,
      image: image
    };
  },
  mounted: async function() {
    // const response = await this.$axios.get("~assets/images/background7.jpg");
    const response = await this.$axios.get(image);
    this.loading = false;
    // var that = this;
    if (process.client) {
      // window.onNuxtReady(() => {
      // let elem = document.querySelector(".p-content");
      // console.log(elem.classList);
      // elem.classList.add("show");
      // console.log(elem.classList);
      // });
      // console.log(process.client);
    }

    setTimeout(() => {
      this.fviewStartLoading = true;
      console.log(this.fviewStartLoading);
    }, 1000);
  }
};
</script>
<style lang="scss">
$tp-bg-color-ie: #222222;
$tp-bg-color: #222222bf;
// $tp-bg-color: rgba(34, 34, 34);
// $tp-bg-color: rgba(34, 34, 34, 0.75);

#bg {
  // width: 100%;
}
.navbar.v-toolbar {
  background: $tp-bg-color-ie;
  background: $tp-bg-color;
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
    background-position: center 50px;

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

    // padding: 120px 0;
    // transition: padding 2s linear;

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

    // padding: 120px 0;
    // opacity: 1;

    padding: 0 0;
    opacity: 0;

    // visibility: hidden;
    // transition: padding 2s linear;
    transition: all 2s linear;
    background: rgb(34, 34, 34); /* for IE */
    background: rgba(34, 34, 34, 0.75);
  }
  .welcome2-enter-active,
  .welcome2-leave-active {
    // transition: all 0.8s linear;
  }
  .p-content.show {
    padding: 120px 0;
    opacity: 1;
    // padding: 0 0;
    // opacity: 0;
    // padding: 120px 0;
    // opacity: 1;
    transition: all 0.4s linear;
  }

  // .welcome2-enter-active,
  // .welcome2-leave-active {
  //   transition: all 0.8s linear;
  // }
}

.p-container h1 {
  // position: absolute;
  // background-size: 500px auto;
  // top: 0;
  // right: 0;
  // bottom: 0;
  // left: 0;
}

.skill-section {
  background-attachment: fixed;
  background-size: cover;
  height: 200px;
  background-image: url("~assets/images/background1.jpg");
}
</style>
