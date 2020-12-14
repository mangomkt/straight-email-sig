<template>
  <div id="app">
    <div class="row">
      <div class="col">
        <div class="heading">
          Email Generator
          <span>Easily build your email signature for Straight Consulting.</span>
          
        </div>

      </div>
      <div class="col fh-col">
        <div class="email-form">
          <transition name="fade" mode="out-in" @beforeLeave="beforeLeave" @enter="enter" @afterEnter="afterEnter">
            <router-view class="wrapper"/>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'App',
    data() {
      return {
        prevHeight: 0,
      };
    },
    methods: {
      beforeLeave(element) {
        this.prevHeight = getComputedStyle(element).height;
      },
      enter(element) {
        const { height } = getComputedStyle(element);

        element.style.height = this.prevHeight;

        setTimeout(() => {
          element.style.height = height;
        });
      },
      afterEnter(element) {
        element.style.height = 'auto';
      },
    },
  };
</script>