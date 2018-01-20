<template>
  <div>
    <div class="play">
      <DataSet></DataSet>
      <DataSet></DataSet>
      <DataSet></DataSet>
      <DataSet></DataSet>
      <DataSet></DataSet>
    </div>
    <cart>

    </cart>
  </div>
</template>

<script>
import DataSet from './DataSet'
import Cart from './Cart'

export default {
  name: 'home',
  components: {
    DataSet, Cart
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
