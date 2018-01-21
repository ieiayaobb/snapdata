<template>
  <div>
    <el-collapse>
      <el-collapse-item title="Export Format" name="1">
        <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
        <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
      </el-collapse-item>
      <el-collapse-item title="Delivery Frequency" name="2">
        <div>
          <el-radio v-model="delivery_frequency" label="1" border>Annual</el-radio>
          <el-radio v-model="delivery_frequency" label="2" border>Quarterly</el-radio>
          <el-radio v-model="delivery_frequency" label="3" border>Monthly</el-radio>
          <el-radio v-model="delivery_frequency" label="4" border>Weekly</el-radio>
          <el-radio v-model="delivery_frequency" label="5" border>Daily</el-radio>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>

export default {
  components: {

  },
  data: function () {
    return {
      delivery_frequency:'1'
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
