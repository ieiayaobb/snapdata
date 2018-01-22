<template>
  <footer>
    <p class="word">Copyright © 2017 Patsnap. All rights reserved</p>
    <div>
      <span class="word">Explore Our Products on</span>
      <img src="../assets/img/logoCopy.svg">
    </div>
  </footer>
</template>

<script>
export default {
}
</script>
<style lang="scss" scoped>
  @import '../assets/css/variable.scss';
  footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 32px;
    padding: 26px 0;
    text-align: center;
    font-size: $font-size-medium;
    color: #333;
    .word {
      opacity: 0.5;
      margin-bottom: 10px;
    }
    img {
      margin-left: 10px;
      width: 80px;
      vertical-align: middle;
    }
  }
</style>
