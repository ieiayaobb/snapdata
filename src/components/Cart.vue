<template>
  <div class="cart" v-bind:style="{width: cart_width}">
    <div class="collapse-btn" @click="expand"></div>
    <div :class="['menu',{'menu_active':menu_isactive},]"></div>
  </div>
</template>

<script>

export default {
  name: 'cart',
  data () {
    return {
      cart_width: 80,
      menu_isactive: false
    }
  },
  methods: {
    expand: function () {
      this.menu_isactive = !this.menu_isactive
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cart {
  position: fixed;
  min-width: 10px;
  height: 100%;
  background-color: #eeeeee;
  right: 0;
}

.collapse-btn {
  position: absolute;
  top: 0;
  left: 0;
  width: 10px;
  height: 100%;
  background-color: #000;
}
  .menu{
    width: 0;
    height: 100%;
    background-color: gold;
    transition: 1s width;
  }
  .menu_active{
    width: 70px;
  }
</style>
