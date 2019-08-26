<template>
    <div id="home" style="align-items: center;justify-content: center;width:100%">
            <div v-for="o in 10" :key="o" class="text item" style="align-items: center;justify-content: center;width:100%">
                <div style="align-items: center;justify-content: center;width:100%">
                    <el-card class="box-card" style="align-items: center;justify-content: center">
                        <div tyle="width: 70%">
                            <div style="width: 100%; height: 636px;min-width: 300px;">
                                <el-image :src="src" style=" height: 460px;max-width: 100%;width:900px"></el-image>
                                <div>
                                    <i class="el-icon-date"></i>
                                    发表于 2019年06月07日 •
                                    <i class="el-icon-folder"></i>
                                    游戏开发 •
                                    <i class="el-icon-view"></i>
                                    794次围观
                                </div>
                                <div>
                                    简单封装一个白鹭H5开发脚手架，提高开发效率
                                </div>
                                <div>
                                    <el-tag>标签一</el-tag>
                                    <el-tag>标签二</el-tag>
                                </div>
                                
                                <div>
                                    阅读全文> >
                                </div>
                            </div>
                        </div>
                    <br>
                    </el-card>
                </div>
                <br>
            </div>
            
        
    </div>
</template>
<script>
  export default {
    data() {
      return {
        src: 'http://blogimg.codebear.cn/FtzU7p7kOL-kVAwF1IK5DZs3FRSb'
      }
    }
  }
</script>