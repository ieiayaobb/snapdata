<template>
  <div class="data-set">
    <div class="head">
      {{title}}
    </div>
    <div class="body">
      <div class="chart">
        <chart :options="chart_data"></chart>
      </div>
      <div class="desc">
        {{desc}}
      </div>
    </div>
    <div class="foot">
      <el-button type="text">Filters</el-button>
    </div>
  </div>
</template>

<script>
import ECharts from 'vue-echarts/components/ECharts.vue'

import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/line'
import 'echarts/lib/chart/pie'
import 'echarts/lib/chart/map'
import 'echarts/lib/chart/radar'
import 'echarts/lib/chart/scatter'
import 'echarts/lib/chart/effectScatter'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/polar'
import 'echarts/lib/component/geo'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/title'
import 'echarts/lib/component/visualMap'

export default {
  name: 'dataSet',
  components: {
    chart: ECharts
  },
  props: {
    title: String,
    desc: String,
    chart_data: {
      type: Object,
      required: true
    }
  },
  data: function () {
    return {
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.data-set {
  width: 200px;
  float: left;
  margin: 20px;
}

.head {
  padding: 10px;
  border: 1px solid #eeeeee;
  font-size: 16px;
  text-align: center
}

.body {
  border: 1px solid #eeeeee;
}

.foot {
  text-align: center;
  border: 1px solid #eeeeee;
}

.chart {
  background-color: #eeeeee;
}

.desc {
  font-size: 14px;
  padding: 10px;
}

.echarts {
  height: 200px;
  width: 200px;
}
</style>
