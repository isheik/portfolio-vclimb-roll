<template>
  <div
    ref="card"
    class="card-wrap"
    @mousemove="handleMouseMove"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    @click="open"
  >
    <!-- <div class="card" :style="cardStyle"> -->
    <div :style="cardStyle" class="card">
      <div :style="[cardBgTransform, cardBgImage]" class="card-bg" />
      <div class="card-info">
        <slot name="header" /> <slot name="content" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["dataImage", "modalTarget"],
  data: () => ({
    width: 240,
    height: 320,
    mouseX: 0,
    mouseY: 0,
    mouseLeaveDelay: null
  }),
  computed: {
    mousePX() {
      return this.mouseX / this.width
    },
    mousePY() {
      return this.mouseY / this.height
    },
    cardStyle() {
      const rX = this.mousePX * 30
      const rY = this.mousePY * -30
      return {
        transform: `rotateY(${rX}deg) rotateX(${rY}deg)`
      }
    },
    cardBgTransform() {
      const tX = this.mousePX * -40
      const tY = this.mousePY * -40
      return {
        transform: `translateX(${tX}px) translateY(${tY}px)`
      }
      // return {transform:`translateX(1px) translateY(1px)`}
    },
    cardBgImage() {
      return {
        backgroundImage: `url(${this.dataImage})`
      }
    }
  },
  mounted() {
    this.$ready(() => {
      this.width = this.$refs.card.offsetWidth
      this.height = this.$refs.card.offsetHeight
    })
  },
  methods: {
    handleMouseMove(e) {
      this.mouseX = e.pageX - this.$refs.card.offsetLeft - this.width / 2
      this.mouseY = e.pageY - this.$refs.card.offsetTop - this.height / 2
    },
    handleMouseEnter() {
      clearTimeout(this.mouseLeaveDelay)
    },
    handleMouseLeave() {
      this.mouseLeaveDelay = setTimeout(() => {
        this.mouseX = 0
        this.mouseY = 0
      }, 1000)
    },
    $ready(fn) {
      // if (process.env.NODE_ENV === "production") {
      // return this.$nextTick(fn);
      // }
      // setTimeout(() => {
      //   this.$nextTick(fn);
      // }, 3000);
      // 3, 3000);
    },

    close() {
      this.$modal.pop()
    },
    open() {
      this.$modal.push(this.modalTarget)
    }
  }
  // mounted() {
  //   this.width = this.$refs.card.offsetWidth;
  //   this.height = this.$refs.card.offsetHeight;
  //   console.log("mounted!");
  //   console.log(this.$refs.card.offsetWidth);
  // },
  // props: ["dataImage"],
  // data: () => ({
  //   width: 0,
  //   height: 0,
  //   mouseX: 0,
  //   mouseY: 0,
  //   mouseLeaveDelay: null,
  //   rX: 0,
  //   rY: 0,
  //   tX: 0,
  //   tY: 0
  // }),
  // watch: {
  //   mouseX: function() {
  //     // console.log(this.rX);
  //     // console.log(this.mousePX);
  //     this.width === 0 ? 0 : this.mouseX / this.$refs.card.clientWidth;
  //     this.rX = this.mousePX * 30;
  //     console.log(this.width);
  //     console.log(this.rX);
  //   },
  //   mouseY: function() {
  //     this.height === 0 ? 0 : this.mouseY / this.$refs.card.clientHeight;
  //     this.rY = this.mousePY * -30;
  //   }
  // },
  // computed: {
  //   mousePX() {
  //     console.log("width:here");
  //     console.log(this);
  //     return this.width === 0 ? 0 : this.mouseX / this.width;
  //   },
  //   mousePY() {
  //     return this.height === 0 ? 0 : this.mouseY / this.height;
  //   },
  //   cardStyle() {
  //     const rX = this.mousePX * 30;
  //     const rY = this.mousePY * -30;
  //     // console.log(rX);
  //     // console.log(rY);
  //     return {
  //       transform: `rotateY(${rX}deg) rotateX(${rY}deg)`
  //     };
  //   },
  //   cardBgTransform() {
  //     const tX = this.mousePX * -40;
  //     const tY = this.mousePY * -40;
  //     return {
  //       transform: `translateX(${tX}px) translateY(${tY}px)`
  //     };
  //   },
  //   cardBgImage() {
  //     return {
  //       backgroundImage: `url(${this.dataImage})`
  //     };
  //   }
  // },
  // methods: {
  //   handleMouseMove(e) {
  //     // this.mouseX = e.pageX - this.$refs.card.offsetLeft - this.width / 2;
  //     // this.mouseY = e.pageY - this.$refs.card.offsetTop - this.height / 2;
  //     this.mouseX =
  //       e.pageX - this.$refs.card.offsetLeft - this.$refs.card.clientWidth / 2;
  //     this.mouseY =
  //       e.pageY - this.$refs.card.offsetTop - this.$refs.card.clientHeight / 2;
  //     // console.log(this.mouseY);
  //   },
  //   handleMouseEnter() {
  //     clearTimeout(this.mouseLeaveDelay);
  //   },
  //   handleMouseLeave() {
  //     this.mouseLeaveDelay = setTimeout(() => {
  //       this.mouseX = 0;
  //       this.mouseY = 0;
  //     }, 1000);
  //   }
  // }
}
</script>
<style lang="scss" scoped>
$hoverEasing: cubic-bezier(0.23, 1, 0.32, 1);
$returnEasing: cubic-bezier(0.445, 0.05, 0.55, 0.95);

// body {
//   margin: 40px 0;
//   font-family: "Raleway";
//   font-size: 14px;
//   font-weight: 500;
//   background-color: #bcaaa4;
//   -webkit-font-smoothing: antialiased;
// }

.title {
  font-family: "Raleway";
  font-size: 24px;
  font-weight: 700;
  color: #5d4037;
  text-align: center;
}

p {
  line-height: 1.5em;
}

h1 + p,
p + p {
  margin-top: 10px;
}

.container {
  padding: 40px 80px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.card-wrap {
  margin: 10px;
  transform: perspective(800px);
  /* transform-style: preserve-3d; */
  cursor: pointer;
  // background-color: #fff;

  &:hover {
    .card-info {
      transform: translateY(0);
    }
    .card-info p {
      opacity: 1;
    }
    .card-info,
    .card-info p {
      transition: 0.6s $hoverEasing;
    }
    .card-info:after {
      transition: 5s $hoverEasing;
      opacity: 1;
      transform: translateY(0);
    }
    .card-bg {
      transition: 0.6s $hoverEasing, opacity 5s $hoverEasing;
      opacity: 0.8;
    }
    .card {
      transition: 0.6s $hoverEasing, box-shadow 2s $hoverEasing;
      box-shadow: rgba(white, 0.2) 0 0 40px 5px, rgba(white, 1) 0 0 0 1px,
        rgba(black, 0.66) 0 30px 60px 0, inset #333 0 0 0 5px,
        inset white 0 0 0 6px;
    }
  }
}

.card {
  position: relative;
  flex: 0 0 240px;
  width: 240px;
  height: 320px;
  background-color: #333;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: rgba(black, 0.66) 0 30px 60px 0, inset #333 0 0 0 5px,
    inset rgba(white, 0.5) 0 0 0 6px;
  transition: 1s $returnEasing;
}

.card-bg {
  opacity: 0.5;
  position: absolute;
  top: -20px;
  left: -20px;
  width: 120%;
  height: 120%;
  padding: 20px;
  // background-repeat: repeat;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  transition: 1s $returnEasing, opacity 5s 1s $returnEasing;
  pointer-events: none;
}

.card-info {
  padding: 20px;
  position: absolute;
  bottom: 0;
  color: #fff;
  transform: translateY(40%);
  transition: 0.6s 1.6s cubic-bezier(0.215, 0.61, 0.355, 1);

  p {
    opacity: 0;
    text-shadow: rgba(black, 1) 0 2px 3px;
    transition: 0.6s 1.6s cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  * {
    position: relative;
    z-index: 1;
  }

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      to bottom,
      transparent 0%,
      rgba(#000, 0.6) 100%
    );
    background-blend-mode: overlay;
    opacity: 0;
    transform: translateY(100%);
    transition: 5s 1s $returnEasing;
  }
}

.card-info h1,
.card-info h4 {
  font-family: "Playfair Display";
  font-size: 24px;
  font-weight: 700;
  text-shadow: rgba(black, 0.5) 0 10px 10px;
}
.card-info h2 {
  font-family: "Playfair Display";
  font-size: 36px;
  font-weight: 700;
  text-shadow: rgba(black, 0.5) 0 10px 10px;
}
</style>
