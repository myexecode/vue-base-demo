import Vue from 'vue';
import MessageBox from './MessageBox.vue';

export const messageBox = (function(){

    let defaultData = {
        title: 'title',
        content: 'content',
        cancel: '',
        ok: '',
        handleCancel: null,
        handleOk: null
    }

    return (opts) => {
        let msgBOxComponent = Vue.extend(MessageBox);

        let vm = new msgBOxComponent({
            el: document.createElement('div'),
            data: {
                ...defaultData,
                ...opts
            },
            methods: {
                cancelEvent(){
                    this.handleCancel && this.handleCancel();

                    document.body.removeChild(this.$el);
                },
                okEvent(){
                    this.handleOk && this.handleOk();

                    document.body.removeChild(this.$el);
                }
            }
        })

        document.body.appendChild(vm.$el);
    }
})()