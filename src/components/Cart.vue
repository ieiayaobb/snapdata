<template>
  <div class="cart" v-bind:style="{width: cart_width}">
    <div class="collapse-btn" @click="expand"></div>
    <div class="menu"></div>
  </div>
</template>

<script>

export default {
  name: 'cart',
  data () {
    return {
      cart_width: 80
    }
  },
  methods: {
    expand: function () {
      this.cart_width = 500
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cart {
  position: fixed;
  height: 100%;
  background-color: #eeeeee;
  right: 0;
  border: 1px solid #dddddd;
}

.collapse-btn {
  width: 10px;
  height: 10px;
  background-color: #000;
  top: 50%;
  position: relative;
  margin-top: -5px;
}
</style>
