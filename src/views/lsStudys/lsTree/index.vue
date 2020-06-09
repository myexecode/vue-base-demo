<template>
  <div class="ls_tree">
    <div v-for="(item, index) in list" :key="item.id+''+index">
      <div>{{item.title}}</div>
      <div v-if="item.children" class="ls_tree_child">
        <lsTree :list="item.children"/>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "lsTree",
  data() {
    return {};
  },
  props: {
    list: {
      type: Array,
      default: () => {
        return [
          {
            title: "杨紫",
            children: [
              {
                title: "aaaaaaaaaaaaaaaaaaaaa",
                children: [
                  {
                    title: "张一山"
                  }
                ]
              }
            ]
          },
          {
            title: "赵丽颖",
            children: [
              {
                title: "ssssssssssssssss"
              }
            ]
          }
        ];
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.ls_tree {
  padding: 20px;
  &_child {
    padding-left: 20px;
  }
}
</style>
