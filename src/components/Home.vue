<template>
  <div class="play">
    <DataSet title="Patent" :desc="desc" :chart_data="chart_data1"></DataSet>
    <DataSet title="Trademark" :desc="desc" :chart_data="chart_data2"></DataSet>
    <DataSet title="Litigation" :desc="desc" :chart_data="chart_data3"></DataSet>
    <DataSet title="Licencing" :desc="desc" :chart_data="chart_data4"></DataSet>
    <DataSet title="NPL" :desc="desc" :chart_data="chart_data5"></DataSet>
    <DataSet title="Company" :desc="desc" :chart_data="chart_data6"></DataSet>
    <DataSet title="Chemical" :desc="desc" :chart_data="chart_data7"></DataSet>
    <DataSet title="Assignee" :desc="desc" :chart_data="chart_data8"></DataSet>
    <DataSet title="SEP" :desc="desc" :chart_data="chart_data9"></DataSet>
  </div>
</template>

<script>
import DataSet from './DataSet'

export default {
  name: 'home',
  components: {
    DataSet
  },
  data: function () {
    return {
      desc: 'Snapdata is not just about high quality IP Data, but we have much more associated and NPL Data',
      chart_data1: {
        series: [
          {
            name: 'Region',
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
              {value: 335, name: 'CN'},
              {value: 310, name: 'US'},
              {value: 234, name: 'EU'},
              {value: 135, name: 'JP'}
            ]
          }
        ],
        animationDuration: 2000
      },
      chart_data2: {
        xAxis: {
          type: 'category'
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar'
          }
        ],
        animationDuration: 2000
      },
      chart_data3: {
        series: [
          {
            name: 'Region',
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
              {value: 34, name: 'CN'},
              {value: 23, name: 'US'},
              {value: 14, name: 'EU'},
              {value: 67, name: 'JP'}
            ]
          }
        ],
        animationDuration: 2000
      },
      chart_data4: {
        series: [
          {
            name: 'Region',
            type: 'pie',
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
              {value: 125, name: 'CN'},
              {value: 54, name: 'JP'}
            ]
          }
        ],
        animationDuration: 2000
      },
      chart_data5: {
        series: [
          {
            name: 'Region',
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
              {value: 33, name: 'CN'},
              {value: 12, name: 'US'},
              {value: 42, name: 'EU'},
              {value: 136, name: 'JP'}
            ]
          }
        ],
        animationDuration: 2000
      },
      chart_data6: {
        xAxis: {
          type: 'category'
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [124, 212, 56, 83, 221, 74, 22],
            type: 'bar'
          }
        ],
        animationDuration: 2000
      },
      chart_data7: {
        series: [
          {
            name: 'Region',
            type: 'pie',
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
              {value: 41, name: 'CN'},
              {value: 32, name: 'US'},
              {value: 123, name: 'JP'}
            ]
          }
        ],
        animationDuration: 2000
      },
      chart_data8: {
        series: [
          {
            name: 'Region',
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
              {value: 113, name: 'CN'},
              {value: 66, name: 'US'},
              {value: 42, name: 'EU'}
            ]
          }
        ],
        animationDuration: 2000
      },
      chart_data9: {
        series: [
          {
            name: 'Region',
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
              {value: 44, name: 'CN'},
              {value: 231, name: 'US'},
              {value: 87, name: 'EU'}
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
.play {
  float: left;
}
</style>
