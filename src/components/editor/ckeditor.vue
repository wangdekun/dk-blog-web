    <template>
    <div id="ckeditor" style="height:100%">
        <input id="inputname" placeholder="请输入标题" style="min-height: 3%;min-width: 100%;"/>
        <ckeditor style="min-height: 80%; max-height: 80%;min-width: 100%; border: 1px solid #ccc;" :editor="editor"
                  @ready="onReady" :value="contentData" @input="$emit('input',$event)" @on-change="submit" v-model="editorData"
                  :config="editorConfig"></ckeditor>
                  <button @click="submit">捕获数据</button>
    </div>
</template>

<script>
    import '@ckeditor/ckeditor5-build-decoupled-document/build/translations/zh-cn'
    import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';

    export default {
        name: "V5",
        model: {
            prop: "content",
            event: "input"
        },
        props: {
            // content: {
            //     required: true,
            //     type: String,
            //     default() {
            //         return ''
            //     }
            // },
            uploadImgHook: {
                type: Function,
                default() {
                    return () => {
                        console.error("undefined uploadImg Hook")
                    }
                }
            }
        },
        computed: {
            contentData() {
                return this.content
            }
        },
        data() {
            return {
                editorData: 'qqqwww',
                CKEditor: null,
                editor: DecoupledEditor,
                //contentData:this.content,
                editorConfig: {
                    language: "zh-cn",
                    fontSize: {
                        options: [8, 10, 'default', 14, 16, 18, 20, 22, 24, 26, 28, 32, 48]
                    },
                    fontFamily: {
                        options: ["宋体", "仿宋", "微软雅黑", "黑体", "仿宋_GB2312", "楷体", "隶书", "幼圆"]
                    }
                }

            }
        },
        methods: {
            onReady(editor) {
                this.CKEditor = editor
                // Insert the toolbar before the editable area.
                editor.ui.getEditableElement().parentElement.insertBefore(
                    editor.ui.view.toolbar.element,
                    editor.ui.getEditableElement()
                );
                editor.plugins.get('FileRepository').createUploadAdapter = loader => {
                    let val = editor.getData();
                    console.log(val)
                    return {
                        upload: async () => {
                            return await loader.file.then(f => {
                                const F = new FileReader();
                                F.readAsArrayBuffer(f);
                                console.log(f)
                                return new Promise(resolve => {
                                    F.onload = function () {
                                        resolve({bufAsArray: F.result, file: f})
                                    };
                                })
                            }).then(v => {
                                //执行上传上传
                                // return this.uploadImgHook(v)
                                //返回标准格式
                                return {
                                    default: 'http://mmcl.maoming.gov.cn/ys/css/img/BG.png'
                                }
                            });

                        }
                    }
                };
            },
            submit(){
                console.log('-------------')
                console.log(this.CKEditor)
                let info = this.CKEditor.getData();
                debugger;
                // alert(this.CKEditor.getData());
                console.log('-------------')
            }
        },
        watch: {
            editorData: 'submit'
        }
    }
</script>

<style scoped>
.inputname{
    
}
</style>