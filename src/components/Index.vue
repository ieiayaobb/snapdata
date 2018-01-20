<template>
  <div class="content">
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      routesMap: {
      },
      currentItem: ''
    }
  },
  watch: {
    $route: function (newValue) {
      this.currentItem = this.routesMap[newValue.path]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper {
  height: 100%
}

.left-part {
  height: 100%;
}

.content {
  margin: 10px 0;
}

.dashboard-menu {
  height: 100%;
}

.breadcrumb {
  margin: 10px 0 0 10px;
}
</style>
