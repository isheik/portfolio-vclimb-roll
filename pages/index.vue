<template>
  <v-app light>
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
      <v-container>loading....</v-container>
      <!-- <section>loading....</section> -->
    </v-content>

    <v-content v-show="!loading">
      <!-- <v-container pa-0 fluid class="firstview"> -->
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
        <!-- <v-layout> -->
        <!-- <v-flex xs12 column> -->
        <div class="p-container">
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
        </div>
        <!-- </v-flex> -->
        <!-- </v-layout> -->
      </section>
      <!-- </v-container> -->
      <section class="about">
        <v-layout column wrap align-center>
          <v-container class="prof">
            <v-layout column align-content-center>
              <!-- <v-layout column wrap align-center> -->
              <!-- <v-layout column wrap> -->
              <!-- <v-flex column xs12 md6> -->
              <!-- <v-flex column xs12 md6 align-self-end> -->
              <!-- <v-layout justify-space-around wrap> -->
              <v-flex class="mb-4">
                <!-- <v-layout> -->
                <div class="prof-picture">
                  <v-avatar :size="avatarSize" color="grey lighten-4">
                    <img src="~assets/images/profile.jpg" alt="avatar">
                  </v-avatar>
                </div>
                <!-- <div> -->
                <!-- <v-layout column> -->
                <div class="prof-name">
                  <div class="display-1">KEI</div>
                  <div class="subheading">Keishi Asai</div>
                </div>
                <!-- </v-layout> -->
                <!-- </v-layout> -->
              </v-flex>
              <v-flex class="prof-description subheading" align-self-center>
                <p>Hi, I am a full-stack web developer based in Vancouver, Canada.
                  <br>I enjoy programming and turn my passion/coffee into code &#x2615;
                </p>
              </v-flex>
            </v-layout>
          </v-container>
          <v-container class="prof">
            <v-layout>
              <v-flex>
                <h3>Skills</h3>
              </v-flex>
              <v-flex>
                <h3>Tools</h3>
              </v-flex>
            </v-layout>
          </v-container>
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
        <v-layout column align-center justify-center>
          <div
            class="headline white--text mb-3 text-xs-center"
          >Web development has never been easier</div>
          <em>Kick-start your application today</em>
          <v-btn class="blue lighten-2 mt-5" dark large href="/pre-made-themes">Get Started</v-btn>
        </v-layout>
      </section>
      <section class="works">
        <v-layout column wrap align-center>
          <v-flex xs12 md6>
            <v-layout justify-space-around wrap align-center>
              <card :data-image="image">
                <h1 slot="header">Canyons</h1>
                <p slot="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </card>
              <card :data-image="image">
                <h1 slot="header">Canyons</h1>
                <p slot="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </card>
              <card :data-image="image">
                <h1 slot="header">Canyons</h1>
                <p slot="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </card>
            </v-layout>
          </v-flex>
        </v-layout>
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
import bgImage from "~/assets/images/background7.jpg";

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
      bgImage: bgImage,
      skillLogos: [{ url: "~assets/images/profile.jpg", alt: "" }]
    };
  },
  mounted: async function() {
    const response = await this.$axios.get(bgImage);
    this.loading = false;

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

.navbar.v-toolbar {
  background: $tp-bg-color-ie;
  background: $tp-bg-color;
}
.firstview {
  position: relative;
  background-image: url("~assets/images/background7.jpg");
  background-size: cover;
  background-attachment: fixed;
  height: 100vh;
  width: 100%;
  background-position: center;
}
.p-container {
  position: absolute;
  top: 50%;
  width: 100%;

  transform: translate(0%, -50%);
  .p-bg {
    position: absolute;
    background-image: url("~assets/images/background7.jpg");
    background-attachment: fixed;
    background-size: cover;
    background-position: center 50px;

    z-index: 900;

    filter: blur(10px);
    height: 100%;
    width: 100%;
  }
  .p-content {
    position: relative;
    z-index: 1000;

    padding: 0 0;
    opacity: 0;

    transition: all 2s linear;
    background: $tp-bg-color-ie;
    background: $tp-bg-color;
  }
  .welcome2-enter-active,
  .welcome2-leave-active {
  }
  .p-content.show {
    padding: 120px 0;
    opacity: 1;
    transition: all 0.4s linear;
  }
}

.skill-section {
  background-attachment: fixed;
  background-size: cover;
  height: 200px;
  background-image: url("~assets/images/background1.jpg");
}

.prof {
  text-align: center;

  &-name {
    display: inline-block;
    margin-left: 18px;
    vertical-align: middle;
    text-align: left;
  }
  &-picture {
    display: inline-block;
    text-align: left;
  }
}
</style>
