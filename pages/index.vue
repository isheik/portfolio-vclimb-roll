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
          <v-container class="prof pr-2 pl-2">
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
              <v-flex class="prof-description subheading mb-4" align-self-center>
                <p>Hi, I am a full-stack web developer based in Vancouver, Canada.
                  <br>I enjoy programming and turn my passion/coffee into code &#x2615;
                </p>
              </v-flex>
              <v-flex xs12>
                <v-layout align-start wrap>
                  <v-flex mb-4 offset-xs0 offset-lg1 xs12 sm6 md6 lg4 class="prof-skills">
                    <h3 class="headline">Skills</h3>
                    <img
                      class="skillImages"
                      v-for="skillImage in skillImages"
                      :key="skillImage.id"
                      :src="skillImage.url"
                      :alt="skillImage.alt"
                    >
                  </v-flex>
                  <v-flex offset-xs0 offset-md1 offset-lg2 xs12 sm4 md4 lg3 class="prof-tools">
                    <h3 class="headline">Tools</h3>
                    <img
                      class="toolImages"
                      v-for="toolImage in toolImages"
                      :key="toolImage.id"
                      :src="toolImage.url"
                      :alt="toolImage.alt"
                    >
                  </v-flex>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-container>
          <!-- <v-container class="prof" grid-list-xl>
            <v-layout>
              <v-flex>
                <h3>Tools</h3>
                <img
                  class="skillImages"
                  v-for="skillImage in skillImages"
                  :key="skillImage.id"
                  :src="skillImage.url"
                  :alt="skillImage.alt"
                >
              </v-flex>
            </v-layout>
          </v-container>-->
        </v-layout>
      </section>
      <section>
        <div class="works-heading-container">
          <!-- <div> -->
          <v-layout class="works-heading-content" justify-space-around wrap align-center>
            <h2 class="display-1">Works</h2>
          </v-layout>
          <!-- </div> -->
        </div>
      </section>
      <section class="works">
        <v-container>
          <v-layout wrap align-center>
            <v-flex xs12>
              <h3 class="headline text-xs-center">Individual works</h3>
            </v-flex>
            <v-flex class="mb-5" xs12>
              <v-layout row justify-space-around wrap align-center>
                <card data-image="/opus13-home.jpg" modal-target="modal-opus13">
                  <h4 slot="header">Opus 13</h4>
                  <p
                    slot="content"
                  >A desktop twitter client built with React.js, Redux, Webpack and Electron</p>
                </card>
                <modal name="modal-opus13">
                  <div class="basic-modal">
                    <!-- <h1 class="display-1 mb-4 text-xs-center">Opus 13</h1> -->
                    <h5>Demo / Image</h5>
                    <img src="/opus13.gif" alt>
                    <h5>Name</h5>
                    <p>Opus 13</p>
                    <h5>Description</h5>
                    <p>A simple desktop twitter client built using Web Technologies. The client allows users to view, post, search, favorite and retweet tweets. Also, filter menus are available to view only the tweets mentioned users or their favorite tweets.</p>
                    <h5>Tech Stack</h5>
                    <p>React.js, Redux, Webpack, Sass, Electron, REST API (Twitter)</p>
                    <h5>Link</h5>
                    <a href="https://github.com/isheik/opus13">GitHub repository</a>

                    <closebutton @click="close"/>
                  </div>
                </modal>
                <card :data-image="bgImage">
                  <h4 slot="header">Portfolio</h4>
                  <p
                    slot="content"
                  >This portfolio website built with Vue.js (Nuxt.js), Vuetify and Netlify</p>
                </card>
                <card :data-image="bgImage">
                  <h4 slot="header">UBC Donation Website</h4>
                  <p
                    slot="content"
                  >New UBC donation page built with jQuery and Engaging Networks platform in my Co-op term</p>
                </card>
              </v-layout>
            </v-flex>
            <v-flex xs12>
              <h3 class="headline text-xs-center">Team works</h3>
            </v-flex>
            <v-flex xs12>
              <v-layout justify-space-around wrap align-center>
                <card :data-image="bgImage">
                  <h4 slot="header">Food Factory Zero</h4>
                  <p
                    slot="content"
                  >A web-based action-puzzle game to raise awareness about food waste</p>
                </card>

                <card :data-image="bgImage">
                  <h4 slot="header">Cecil Green Park House Website</h4>
                  <p
                    slot="content"
                  >New website for a wedding/special event facility built in my Co-op term</p>
                </card>
                <card :data-image="bgImage">
                  <h4 slot="header">Audio recording application</h4>
                  <p
                    slot="content"
                  >Audio recording application built with Web Audio API, React.js, Node.js and AWS in BCIT project practicum</p>
                </card>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-container>
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
import closebutton from "~/components/CloseButton";
import bgImage from "~/assets/images/background7.jpg";

export default {
  components: {
    card,
    closebutton
  },
  data: function() {
    return {
      title: "test",
      loading: true,
      fviewStartLoading: false,
      avatarSize: 128,
      bgImage: bgImage,
      skillImages: [
        { id: 0, url: "/html5-logo.png", alt: "" },
        { id: 1, url: "/css3-logo.png", alt: "" },
        { id: 2, url: "/js-logo.png", alt: "" },
        { id: 3, url: "/react-logo.png", alt: "" },
        { id: 4, url: "/vue-logo.png", alt: "" },
        { id: 5, url: "/wp-logo.png", alt: "" },
        { id: 6, url: "/node-logo.png", alt: "" },
        { id: 7, url: "/php-logo.png", alt: "" },
        { id: 8, url: "/aws-logo.png", alt: "" },
        { id: 9, url: "/firebase-logo.png", alt: "" },
        { id: 10, url: "/mysql-logo.png", alt: "" },
        { id: 11, url: "/mongodb-logo.png", alt: "" }
      ],
      toolImages: [
        { id: 0, url: "/git-logo.png", alt: "" },
        { id: 1, url: "/github-logo.png", alt: "" },
        { id: 2, url: "/webpack-logo.png", alt: "" },
        { id: 3, url: "/sass-logo.png", alt: "" },
        { id: 4, url: "/vim-logo.png", alt: "" },
        { id: 5, url: "/vscode-logo.png", alt: "" },
        { id: 6, url: "/ai-logo.png", alt: "" },
        { id: 7, url: "/ps-logo.png", alt: "" }
      ]
    };
  },
  mounted: async function() {
    const response = await this.$axios.get(bgImage);
    this.loading = false;

    setTimeout(() => {
      this.fviewStartLoading = true;
      console.log(this.fviewStartLoading);
    }, 1000);
  },
  methods: {}
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

    transition: all 0.2s linear;
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
  &-skills {
    width: 200px;
    img {
      margin: 10px 20px;
    }
  }
  &-tools {
    width: 200px;
    img {
      margin: 10px 20px;
    }
  }
}
.skillImages {
  height: 48px;
}
.toolImages {
  height: 48px;
}
.works-heading-container {
  background-attachment: fixed;
  background-size: cover;
  height: 300px;
  background-image: url("~assets/images/background1.jpg");
}
.works-heading-content {
  width: 100%;
  height: 100%;
  color: white;

  // background: $tp-bg-color-ie;
  // background: $tp-bg-color;
}

// modal
.modal-open {
  overflow: hidden;
}

.modal-open .modal-wrapper {
  display: block;
}

.modal-wrapper {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
}

/*  Backdrop
----------------------------------------*/
.modal-backdrop {
  opacity: 1;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
}

.modal-backdrop-enter-active,
.modal-backdrop-leave-active {
  transition: opacity 300ms ease-out;
}

.modal-backdrop-enter,
.modal-backdrop-leave-active {
  opacity: 0;
}

/*  Content
----------------------------------------*/
.modal-content-wrapper {
  overflow: auto;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  z-index: 1001;
}

.modal-content {
  position: absolute;
  left: 0;
  right: 0;
  opacity: 1;
  margin: 30px auto;
  padding: 30px 5px;
  width: 100%;
  max-width: 1024px;
  background-color: #fff;
  transform: translateY(0);

  img {
    display: block;
    width: 100%;
    max-width: 600px;
  }
  h5 {
    margin: 10px 0;
    padding-bottom: 0.2em;
    border-bottom: 2px solid #7ed1e6;
  }
  h5:first-child {
    margin: 0 0 10px 0;
    padding-bottom: 0.2em;
    border-bottom: 2px solid #7ed1e6;
  }
  h5:first-letter {
    margin-right: 0.1em;
    font-size: 2em;
    color: #7ed1e6;
  }
}

@media screen and (min-width: 640px) {
  .modal-content {
    padding: 30px;
  }
}

.modal-content-enter-active,
.modal-content-leave-active {
  transition: 300ms cubic-bezier(0.51, 0.21, 0.38, 0.98);
  transition-property: opacity, transform;
}

.modal-content-enter,
.modal-content-leave-active {
  opacity: 0;
  transform: translateY(-50px);
}

// list
.list {
  list-style: none;
  width: 600px;
  max-width: 90%;
}

.item {
  display: block;
  clear: both;
  counter-increment: list;
  padding-bottom: 4rem;
  font-size: 1.1rem;
  line-height: 1.375;
  position: relative;
}

.item:before {
  font: bold 2.25rem/1 var(--font-number);
  content: counter(list);
  width: 5rem;
  height: 5rem;
  float: left;
  margin: 0 1.5rem 0.75rem 0;
  color: var(--bg);
  background: var(--highlight1)
    linear-gradient(to bottom right, var(--highlight1) 25%, var(--highlight2));
  text-shadow: 0 0 2px var(--highlight1);
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  shape-outside: ellipse();
  z-index: 1;
}

.item:after {
  width: 2.5rem;
  height: 2.5rem;
  position: absolute;
  top: 0;
  left: 0;
  content: "";
  background: var(--highlight1);
  z-index: -1;
  border-top-left-radius: 3px;
}
</style>
