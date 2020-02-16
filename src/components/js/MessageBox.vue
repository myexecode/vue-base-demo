<template>
  <div class="message_box">
    <div class="title">{{title}}</div>
    <div class="msg">{{content}}</div>
    <div class="btn_box">
        <span class="btn cancel" @click='cancelEvent'>{{cancel}}</span>
        <span class="btn ok" @click='okEvent'>{{ok}}</span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'message_box'
}
</script>
<style lang="scss" scoped>
.message_box{
    position: fixed;
    width: 200px;
    height: 200px;
    left: 0px;
    right: 0px;
    top: 0px;
    bottom: 0px;
    margin: auto;
    box-shadow: 2px 2px 2px 2px #ccc;
    .title{
        line-height: 30px;
        text-align: center;
    }
    .msg{
        min-height: 50px;
    }
    .btn_box{
        width: 100%;
        display: flex;
        position: absolute;
        bottom: 0;
        .btn{
            flex: 1;
            height: 20px;
            line-height: 20px;
            text-align: center;
            cursor: pointer;
        }
    }
}
</style>

