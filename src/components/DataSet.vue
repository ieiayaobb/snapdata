<template>
  <div class="data-set">
    <div class="head">
      Patent
    </div>
    <div class="body">
      <div class="charts">
        <chart :options="pie"></chart>
      </div>
      <div class="desc">
        Snapdata is not just about high quality IP Data, but we have much more associated and NPL Data
      </div>
    </div>
    <div class="foot">
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
  data: function () {
    return {
      pie: {
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: 'center'
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: '30',
                  fontWeight: 'bold'
                }
              }
            },
            data: [
              {value: 335, name: '直接访问'},
              {value: 310, name: '邮件营销'},
              {value: 234, name: '联盟广告'},
              {value: 135, name: '视频广告'},
              {value: 1548, name: '搜索引擎'}
            ]
          }
        ],
        animationDuration: 2000
      }
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

.echarts {
  height: 200px;
  width: 200px;
}
</style>
