<template>
  <v-app light>
    <transition name="load">
      <v-content v-show="loading">
        <div :class="{ whitescreen: wsIsActive }" class="load-container">
          <div class="load-spinner">
            <ring-loader :loading="loading" :color="color" :size="size" />
          </div>
        </div>
      </v-content>
    </transition>

    <v-content v-show="!loading">
      <div
        v-show="!hideSm"
        :class="{ startModal: smIsActive, zeroOpacity: isZeroOpOn }"
        class="smodal-container"
      />
      <section class="firstview">
        <div class="p-container">
          <transition name="welcome1" appear>
            <div :key="1" class="p-bg" />
          </transition>

          <transition name="welcome2" appear>
            <h1
              v-if="!loading"
              :class="{ show: fviewStartLoading }"
              class="p-content white--text display-1 text-xs-center"
            >
              Welcome to KEI's portfolio
            </h1>
          </transition>
        </div>
      </section>
      <section class="about">
        <v-layout column wrap align-center>
          <v-container class="prof pr-2 pl-2">
            <v-layout column align-content-center>
              <v-flex class="mb-4">
                <div class="prof-picture">
                  <v-avatar :size="avatarSize" color="grey lighten-4">
                    <img src="~assets/images/profile.jpg" alt="avatar" />
                  </v-avatar>
                </div>
                <div class="prof-name">
                  <div class="display-1">KEI</div>
                  <div class="subheading">Keishi Asai</div>
                </div>
              </v-flex>
              <v-flex
                class="prof-description subheading mb-4"
                align-self-center
              >
                <p>
                  Hi, I am a full-stack web developer based in Vancouver,
                  Canada. <br />I enjoy programming and turn my passion/coffee
                  into code &#x2615;
                </p>
              </v-flex>
              <div class="prof-logo">
                <img src="vcroll-logo.png" alt="logo" />
              </div>
              <v-flex xs12>
                <v-layout align-start wrap>
                  <v-flex
                    mb-4
                    offset-xs0
                    offset-lg1
                    xs12
                    sm6
                    md6
                    lg4
                    class="prof-skills"
                  >
                    <h3 class="headline">Skills</h3>
                    <img
                      v-for="skillImage in skillImages"
                      :key="skillImage.id"
                      :src="skillImage.url"
                      :alt="skillImage.alt"
                      class="skillImages"
                    />
                  </v-flex>
                  <v-flex
                    offset-xs0
                    offset-md1
                    offset-lg2
                    xs12
                    sm4
                    md4
                    lg3
                    class="prof-tools"
                  >
                    <h3 class="headline">Tools</h3>
                    <img
                      v-for="toolImage in toolImages"
                      :key="toolImage.id"
                      :src="toolImage.url"
                      :alt="toolImage.alt"
                      class="toolImages"
                    />
                  </v-flex>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-container>
        </v-layout>
      </section>
      <section>
        <v-parallax src="background4.jpg" height="300">
          <v-layout
            class="works-heading-content"
            justify-space-around
            wrap
            align-center
          >
            <h2 class="display-1">Works</h2>
          </v-layout>
        </v-parallax>
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
                  <p slot="content">
                    A desktop twitter client built with React.js, Redux, Webpack
                    and Electron
                  </p>
                </card>
                <modal name="modal-opus13">
                  <div class="basic-modal">
                    <h5>Demo / Image</h5>
                    <img src="/opus13.gif" alt />
                    <h5>Name</h5>
                    <p>Opus 13</p>
                    <h5>Description</h5>
                    <p>
                      A simple desktop twitter client built using Web
                      Technologies. The client allows users to view, post,
                      search, favorite and retweet tweets. Also, filtered views
                      are available from the menu to see favorite tweets or
                      tweets mentioning the user.
                    </p>
                    <h5>Tech Stack</h5>
                    <p>
                      React.js, Redux, Webpack, Sass, Electron, REST API
                      (Twitter)
                    </p>
                    <h5>Link</h5>
                    <a href="https://github.com/isheik/opus13" target="_blank"
                      >Opus 13 GitHub Repository</a
                    >

                    <closeButton />
                  </div>
                </modal>
                <card
                  data-image="/portfolio-thumbs.jpg"
                  modal-target="modal-portfolio"
                >
                  <h4 slot="header">My Portfolio</h4>
                  <p slot="content">
                    My portfolio website built with Vue.js (Nuxt.js), Vuetify
                    and Netlify.
                  </p>
                </card>
                <modal name="modal-portfolio">
                  <div class="basic-modal">
                    <h5>Demo / Image</h5>
                    <img src="/portfolio.gif" alt />
                    <h5>Name</h5>
                    <p>My Portfolio</p>
                    <h5>Description</h5>
                    <p>
                      This portfolio website built with Vue.js (Nuxt.js),
                      Vuetify and Netlify. Also, designed and created the site
                      logo and favicon using Figma.
                    </p>
                    <h5>Tech Stack</h5>
                    <p>Vue.js (Nuxt.js), Vuetify, Netlify, Figma</p>
                    <h5>Link</h5>
                    <a
                      href="https://github.com/isheik/portfolio-vclimb-roll"
                      target="_blank"
                      >Portfolio GitHub Repository</a
                    >

                    <closeButton />
                  </div>
                </modal>
                <card
                  data-image="/giveubc-form-thumbs.jpg"
                  modal-target="modal-ubc-dpage"
                >
                  <h4 slot="header">Give UBC Donation Page</h4>
                  <p slot="content">
                    Give UBC donation page built with jQuery and Engaging
                    Networks platform
                  </p>
                </card>
                <modal name="modal-ubc-dpage">
                  <div class="basic-modal">
                    <h5>Demo / Image</h5>
                    <img src="/giveubc-form.gif" alt />
                    <h5>Name</h5>
                    <p>
                      Give UBC (The University of British Columbia) donation
                      page
                    </p>
                    <h5>Description</h5>
                    <p>
                      Give UBC donation page built with jQuery and Engaging
                      Networks(EN) platform. Implemented and styled the page
                      like a SPA (Single Page Application) integrating EN
                      platform which generates the base HTML of the page and
                      takes care of backend interactions.
                    </p>
                    <h5>Tech Stack</h5>
                    <p>
                      jQuery, Third party platform integration (Engaging
                      Networks), Responsive Web Design, Cross-browser
                      Compatibility
                    </p>
                    <h5>Link</h5>
                    <a
                      href="https://donate.give.ubc.ca/page/68046/donate/1"
                      target="_blank"
                      >Give UBC Donation Page</a
                    >
                    <closeButton />
                  </div>
                </modal>
              </v-layout>
            </v-flex>
            <v-flex xs12 class="mt-3">
              <h3 class="headline text-xs-center">Team works</h3>
            </v-flex>
            <v-flex class="mb-5" xs12>
              <v-layout justify-space-around wrap align-center>
                <card
                  data-image="/ffzero_thumbs.jpg"
                  modal-target="modal-ffzero"
                >
                  <h4 slot="header">Food Factory Zero</h4>
                  <p slot="content">
                    A web-based action-puzzle game to raise awareness about food
                    waste
                  </p>
                </card>
                <modal name="modal-ffzero">
                  <div class="basic-modal">
                    <h5>Demo / Image</h5>
                    <img src="/ffzero.gif" alt />
                    <h5>Name</h5>
                    <p>Food Factory Zero</p>
                    <h5>Description</h5>
                    <p>
                      A web-based action puzzle game built by a group of 5. My
                      role was implementing some parts of the game (mainly the
                      belt converyer, collision, drag and drop mechanics and the
                      result view), user authentication with Firebase
                      Authentication, data save with Firebase Realtime DB. Also,
                      I created the entire landing page for the game using
                      Bootstrap and its theme, which allows users to log in the
                      game by their google accounts. Aside from that, I built
                      the Web server using Firebase Hosting and deployed the
                      game and the landing page there.
                    </p>
                    <h5>Tech Stack</h5>
                    <p>
                      JavaScript, PixiJS, Firebase (Firebase Hosting,
                      Authentication, Realtime DB), Bootstrap
                    </p>
                    <h5>Link</h5>
                    <a
                      href="https://foodfactoryzero.firebaseapp.com/"
                      target="_blank"
                      >Food Factory Zero Home</a
                    >

                    <closeButton />
                  </div>
                </modal>

                <card data-image="/cgph.jpg" modal-target="modal-cgph">
                  <h4 slot="header">Cecil Green Park House Website</h4>
                  <p slot="content">
                    A website of Cecil Green Park House, a wedding/special event
                    facility of UBC
                  </p>
                </card>
                <modal name="modal-cgph">
                  <div class="basic-modal">
                    <h5>Demo / Image</h5>
                    <img src="/cgph.gif" alt />
                    <h5>Name</h5>
                    <p>Cecil Green Park House Website</p>
                    <h5>Description</h5>
                    <p>
                      A website of Cecil Green Park House, a wedding/special
                      event facility of the University of British Columbia
                      (UBC), built on WordPress. Created the website as one of
                      two developers. Contributed to implementing many pages and
                      some complex components. One of them is a custom
                      datepicker built from scratch, which retrieves booking
                      data from a third-party platform (EMS) and display booking
                      status on the calendar. Another one is a complex parallax
                      animation on the history page.
                    </p>
                    <h5>Tech Stack</h5>
                    <p>
                      PHP, WordPress, JavaScript, Foundation, Third party
                      platform integration (EMS), Responsive Web Design,
                      Cross-browser Compatibility
                    </p>
                    <h5>Link</h5>
                    <a href="https://cecilgreenpark.ubc.ca/" target="_blank"
                      >Cecil Green Park House Website</a
                    >

                    <closeButton />
                  </div>
                </modal>

                <card
                  data-image="/giveubc-thumbs.jpg"
                  modal-target="modal-ubcwebsites"
                >
                  <h4 slot="header">UBC websites</h4>
                  <p slot="content">
                    Continually maintaining existing UBC websites and adding new
                    features for them.
                  </p>
                </card>
                <modal name="modal-ubcwebsites">
                  <div class="basic-modal">
                    <h5>Demo / Image</h5>
                    <img src="/ubcwebsites.gif" alt />
                    <h5>Name</h5>
                    <p>UBC Websites</p>
                    <h5>Description</h5>
                    <p>
                      Maintaining various UBC websites and adding new features
                      to them.
                    </p>
                    <h5>Tech Stack</h5>
                    <p>JavaScript, PHP, WordPress, Foundation, Gulp, Webpack</p>
                    <h5>Link</h5>
                    <a href="https://give.ubc.ca/" target="_blank">give UBC</a>,
                    <a href="https://cecilgreenpark.ubc.ca/" target="_blank"
                      >Cecil Green Park House Website</a
                    >,
                    <a href="https://crowdfundraising.ubc.ca/" target="_blank"
                      >Crowdfundraising UBC</a
                    >
                    etc. <closeButton />
                  </div>
                </modal>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-container>
      </section>
      <section>
        <div class="contact-heading-container">
          <v-layout
            class="contact-heading-content"
            justify-space-around
            wrap
            align-center
          >
            <h2 class="display-1">Contact</h2>
          </v-layout>
        </div>
      </section>
      <section class="contact">
        <v-container>
          <v-layout wrap align-center>
            <form
              v-if="!submitted"
              class="contact-form"
              method="POST"
              @submit.prevent="handleSubmit"
            >
              <p>
                <label class="form-label" for="name">YOUR NAME:</label>
                <input v-model="form.name" type="text" name="name" />
              </p>
              <p>
                <label class="form-label" for="email">EMAIL:</label>
                <input v-model="form.email" type="email" name="email" />
              </p>
              <p>
                <label class="form-label" for="message">MESSAGE:</label>
                <textarea v-model="form.message" name="message" />
              </p>
              <p>
                <v-btn type="submit" round color="primary" dark>Submit</v-btn>
              </p>
            </form>
            <div v-if="submitted">
              <h3 class="headline text-xs-center">Thanks for being awesome!</h3>
              <p>
                I have received your message and would like to thank you for
                writing to me. I will reply by email as soon as possible.
              </p>
            </div>
            <form name="contact" netlify netlify-honeypot="bot-field" hidden>
              <input type="text" name="name" />
              <input type="email" name="email" /> <textarea name="message" />
            </form>
          </v-layout>
        </v-container>
      </section>
    </v-content>
  </v-app>
</template>
<script>
import card from "~/components/Card"
import closeButton from "~/components/CloseButton"
import bgImage from "~/assets/images/background7.jpg"
import Vue from "vue"
import PulseLoader from "vue-spinner/src/PulseLoader.vue"
import ScaleLoader from "vue-spinner/src/ScaleLoader.vue"
import RingLoader from "vue-spinner/src/RingLoader.vue"

Vue.use(PulseLoader)
Vue.use(ScaleLoader)
Vue.use(RingLoader)

export default {
  components: {
    card,
    closeButton,
    PulseLoader,
    RingLoader,
    ScaleLoader
  },
  data: function() {
    return {
      title: "test",
      loading: true,
      wsIsActive: false,
      smIsActive: false,
      isZeroOpOn: false,
      fviewStartLoading: false,
      hideSm: false,
      avatarSize: 128,
      bgImage: bgImage,
      // color: "#aaffaa",
      // color: "#3E96E8",
      color: "#0279E7",
      size: "100px",
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
        { id: 6, url: "/figma-logo.png", alt: "" }
      ],
      submitted: false,
      form: {
        name: "",
        email: "",
        message: ""
      }
    }
  },
  mounted: async function() {
    const response = await this.$axios.$get(bgImage)
    await this.$delay(2500)
    this.wsIsActive = true
    this.loading = false
    this.smIsActive = true
    await this.$delay(1000)
    this.isZeroOpOn = true
    await this.$delay(1000)
    this.smIsActive = false
    this.hideSm = true
    this.fviewStartLoading = true
  },
  methods: {
    encode(data) {
      console.log("encoding")
      console.log(
        Object.keys(data)
          .map(
            key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
          )
          .join("&")
      )
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&")
    },
    handleSubmit() {
      console.log("calling axios")
      const axiosConfig = {
        header: { "Content-Type": "application/x-www-form-urlencoded" }
      }
      console.log(
        this.encode({
          "form-name": "contact",
          ...this.form
        })
      )
      this.$axios
        .$post(
          "/",
          this.encode({
            "form-name": "contact",
            ...this.form
          }),
          axiosConfig
        )
        .then(() => {
          this.submitted = true
        })
    }
  }
}
</script>
<style lang="scss">
$tp-bg-color-ie: #222222;
$tp-bg-color: #222222bf;
$base-color: #53a0e7;

body {
  // would like to remove when modal open, but not working
  padding-right: 0 !important;
}
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
  /* &-logo {
    display: inline-block;
    vertical-align: middle;
    transform: translate(0, 10px);
    margin-left: 8px;
  } */
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
    /* border-bottom: 2px solid #7ed1e6; */
    border-bottom: 2px solid $base-color;
  }
  h5:first-child {
    margin: 0 0 10px 0;
    padding-bottom: 0.2em;
    /* border-bottom: 2px solid #7ed1e6; */
    border-bottom: 2px solid $base-color;
  }
  h5:first-letter {
    font-size: 2em;
    /* color: #7ed1e6; */
    color: $base-color;
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

// Contact
.contact-heading-container {
  background-attachment: fixed;
  background-size: cover;
  height: 300px;
  background-image: url("~assets/images/background1.jpg");
}
.contact-heading-content {
  width: 100%;
  height: 100%;
  color: white;
}

.contact {
  height: 640px;
}
.contact-form {
  margin: 0 auto;
  width: 100%;
  max-width: 600px;
  input,
  textarea {
    width: 100%;
    border-bottom: 2px solid $base-color;
    outline: none;
  }
  textarea {
    height: 200px;
  }
  .form-label {
    display: block;
  }
  .form-label:first-letter {
    font-size: 2em;
    color: $base-color;
  }
}
.contact .container .layout {
  justify-content: center;
}

.load-container {
  position: relative;
  height: 100vh;
  width: 100%;
  opacity: 1;
  background-color: #333333;
}
.load-spinner {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translateY(-50%) translateX(-50%);
  transform: translateY(-50%) translateX(-50%);
}
.smodal-container.startModal {
  display: block;
  position: fixed;
}
.smodal-container.zeroOpacity {
  opacity: 0;
  transition: opacity 1s;
}
.smodal-container {
  height: 100vh;
  width: 100%;
  background-color: #333333;
  opacity: 1;
  transition: opacity 1s;
  position: fixed;
  display: none;
  z-index: 2000;
}
</style>
