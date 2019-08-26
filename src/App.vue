<template>
  <div id="app">
    <el-container>
      <el-header style="color: #333;text-align: center;width:100%">
        <topmenu style="width:100%"/>
      </el-header>
      <el-container>
        <!-- <el-aside  style="background-color: #D3DCE6;color: #333;text-align: center;line-height: 80%; width:15%">
          <layout/>
        </el-aside> -->
        <el-main style="background-color: #E9EEF3;color: #333;text-align: center;height: 100%;width:100%">
          <!-- 主要部分 -->
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
    
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
html,
body,
#app,
.app,
 .el-container{
  // font-family: 'Avenir', Helvetica, Arial, sans-serif;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: #2c3e50;
  // margin-top: 60px;
  // min-height: 100vh;
  padding: 0px;
  margin: 0px;
  height: 100%;
  width: 100%
}
</style>
<style scoped>
  .el-container{height:100%;padding:0;margin:0;width:100%;}

  
  
  
</style>
