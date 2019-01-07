<template>
  <div class="outer" @click="close">
    <div class="inner">
      <label>Close</label>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    close() {
      this.$modal.pop();
    }
  }
};
</script>
<style lang="scss">
.outer {
  position: absolute;
  top: 0;
  right: 0;
  margin: 5px;
  width: 50px;
  // margin-top: 200px;

  cursor: pointer;
}
@media screen and (min-width: 640px) {
  .outer {
    margin: 5px 30px;
  }
}

.inner {
  width: inherit;
  text-align: center;
}

label {
  font-size: 0.8em;
  line-height: 4em;
  text-transform: uppercase;
  color: black;
  transition: all 0.3s ease-in;
  opacity: 0;
  cursor: pointer;
}

.inner:before,
.inner:after {
  position: absolute;
  content: "";
  height: 2px;
  width: inherit;
  background: #7ed1e6;
  left: 0;
  transition: all 0.3s ease-in;
}

.inner:before {
  top: 50%;
  transform: rotate(45deg);
}

.inner:after {
  bottom: 50%;
  transform: rotate(-45deg);
}

.outer:hover label {
  opacity: 1;
}

.outer:hover .inner:before,
.outer:hover .inner:after {
  transform: rotate(0);
}

.outer:hover .inner:before {
  top: 0;
}

.outer:hover .inner:after {
  bottom: 0;
}
</style>
