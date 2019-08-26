<template>
  <div id="topmenu" style="height:100%;">
      <el-menu router :default-active="$route.path" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="/home" style="margin-left:70%"><i class="el-icon-s-home"></i>首页</el-menu-item>
        <el-menu-item index="/markdown" ><i class="el-icon-s-data"></i>归档</el-menu-item>
        <el-menu-item index="3">标签</el-menu-item>
        <el-menu-item index="4">分类</el-menu-item>
        <el-menu-item index="5">关于</el-menu-item>
      </el-menu>
<div class="line"></div>
  </div>
</template>
<script>
export default{
  data () {
    return {
      activeIndex: 'home',
      msg: 'hello vue'
    }
  },
  methods:{
    handleSelect(){
                // console.log('3-------------')
            },
  },
  components: {}
}
</script>
<style lang="scss" scoped>

</style>
