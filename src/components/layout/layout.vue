<template>
  <div id="layout" style="height:100%">
    <el-container style="height:100%">
        <el-header style="height:30%">
            <lefttopinfo/>
        </el-header>
        <el-main style="height:50%">
            <leftmain/>
        </el-main>
        <el-footer style="height:20%">Footer</el-footer>
    </el-container>
  </div>
</template>
<script>
export default{
  data () {
    return {
      msg: 'hello vue'
    }
  },
  components: {}
}
</script>

<style lang="scss">

  </style>