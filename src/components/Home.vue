<template>
  <div>
    <div class="play">
      <DataSet title="Patent" :desc="desc" :chart_data="collection_data1"></DataSet>
      <DataSet title="Trademark" :desc="desc" :chart_data="collection_data2"></DataSet>
      <DataSet title="Litigation" :desc="desc" :chart_data="collection_data3"></DataSet>
      <DataSet title="Licencing" :desc="desc" :chart_data="collection_data4"></DataSet>
      <DataSet title="NPL" :desc="desc" :chart_data="collection_data5"></DataSet>
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
  data: function () {
    return {
      desc: 'Snapdata is not just about high quality IP Data, but we have much more associated and NPL Data',
      collection_data1: [
        {value: 335, name: 'CN'},
        {value: 310, name: 'US'},
        {value: 234, name: 'EU'},
        {value: 135, name: 'JP'}
      ],
      collection_data2: [
        {value: 132, name: 'CN'},
        {value: 33, name: 'US'},
        {value: 135, name: 'JP'}
      ],
      collection_data3: [
        {value: 34, name: 'CN'},
        {value: 23, name: 'US'},
        {value: 14, name: 'EU'},
        {value: 67, name: 'JP'}
      ],
      collection_data4: [
        {value: 125, name: 'CN'},
        {value: 54, name: 'JP'}
      ],
      collection_data5: [
        {value: 33, name: 'CN'},
        {value: 12, name: 'US'},
        {value: 42, name: 'EU'},
        {value: 136, name: 'JP'}
      ]
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
