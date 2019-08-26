<template>
  <div id="lefttopinfo">
    <el-row class="demo-avatar demo-basic">
      <el-col :span="12">
        <div class="demo-basic--circle">
          <div class="block">
            <el-avatar :size="50" :src="circleUrl"></el-avatar>

          </div>
          <div>
            <div>文章数目:</div>
            <div>粉丝:</div>
            <div>好友:</div>
          </div>
          <br>
          <div>
            <div>等级:</div>
            <div>访问量:</div>
            <div>积分:</div>
          </div>
          <br>
          <div>
            <div>描述:</div>
          </div>
          <br>
          <div>
            <div>github:</div>
            <div>掘金:</div>
            <div>csdn:</div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
    data () {
      return {
        circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
        sizeList: ["large"]
      }
    }
  }
</script>

<style lang="scss">

  </style>