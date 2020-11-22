<template>
  <div class="test">
    <svg-Icon/>
    <svg-Icon iconClass="qq"/>
    <tC>
      <tA :foo.sync="modal.name"/>
    </tC>
  </div>
</template>

<script>
import tA from './tA'
import tC from './tC'
export default {
  name: 'test',
  componentName: 'test',
  components: {
    tA,
    tC
  },
  data() {
    return {
      modal: {
        name: 'a'
      }
    }
  },
  mounted() {
    this.$on('my.test', arg => {
      console.log(arg, 'app--------my.test---')
    })
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
.test {
}
</style>
