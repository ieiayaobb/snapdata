<template>
  <div class="cart">
    <div class="collapse-btn" @click="expand"></div>
    <div :class="['menu',{'menu_active':menu_isactive},]">
      <div class="profile-item">
        <img src="../assets/img/profile.svg">
      </div>
      <div class="cart-item">
        <img src="../assets/img/cart.svg">
      </div>
      <div class="download-item">
        <img src="../assets/img/download.svg">
      </div>
    </div>
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
<style lang="scss" scoped>
  .cart {
    position: fixed;
    top:60px;
    bottom: 0;
    right: 0;
    min-width: 80px;
    background-color: #eeeeee;
  }

  .profile-item, .download-item, .cart-item {
    float: left;
    margin: 10px 0 40px 20px;
    cursor: pointer;
    img {
      width: 40px;
      height: 40px;
    }
  }

  .collapse-btn {
    position: absolute;
    top: 0;
    left: 0;
    width: 10px;
    height: 100%;
    background-color: #dddddd;
    cursor: pointer;
  }

  .collapse-btn:hover {
    background-color: #aaaaaa;
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
