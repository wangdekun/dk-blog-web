<template>
  <div id="app">
    <el-container>
      <el-header>
        顶部
      </el-header>
      <el-container>
        <el-aside width="200px">
          侧边栏
        </el-aside>
        <el-main>
          主要部分
          <!-- <router-view/> -->
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
}
</style>
<style scoped lang="scss">
  .el-container{height:100%;padding:0;margin:0;width:100%;}

  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 80px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 100%;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
