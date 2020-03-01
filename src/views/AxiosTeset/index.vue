<template>
    <div class="axios_test">
        axios_test
    </div>
</template>

<script>
import {reqTest} from '../../servers'
export default {
    name: 'axios_test',
    created(){
        // 测试请求网易的数据2020/3/1
        reqTest({
            start: 0,
            size: 100,
            tid: 'T1582287839597',
            t: '316606198865'
        })
    }
}
</script>
