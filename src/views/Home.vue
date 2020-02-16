<template>
  <div class="home">
    home
  </div>
</template>

<script>
import {messageBox} from '../components/js/index.js'
export default {
  name: 'Home',
  mounted(){
    // console.log(messageBox, '--')
    messageBox({
      ok: '确定',
      cancel: '取消',
      handleCancel(){
        console.log('---')
      },
      handleOk(){
        console.log('ok');
      }
    })
  }
}
</script>
