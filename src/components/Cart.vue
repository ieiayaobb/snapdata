<template>
  <div class="cart">
    <div class="collapse-btn" @click="expand"></div>
    <div :class="['menu',{'menu_active':menu_isactive},]"></div>
  </div>
</template>

<script>

export default {
  name: 'cart',
  data () {
    return {
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
  top:60px;
  bottom: 0;
  right: 0;
  min-width: 80px;
  background-color: #eeeeee;
}

.collapse-btn {
  position: absolute;
  top: 0;
  left: 0;
  width: 10px;
  height: 100%;
  background-color: #aaaaaa;
  cursor: pointer;
}

.menu{
  width: 0;
  height: 100%;
  transition: 1s width;
}

.menu_active{
  width: 600px;
}
</style>
