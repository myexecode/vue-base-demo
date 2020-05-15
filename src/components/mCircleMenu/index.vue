<template>
  <div :class="['m_circle_menu']" :style="mBoxStyle">
    <div class="m_circle_menu_box" :style="{transform: `scale(${getScaling})`}">
      <div
        v-for="(item, index) in mList"
        :key="index"
        class="m_circle_menu_item"
        :style="{transform: `translateX(-50%) rotate(-${mDeg*index}deg)`}"
      >
        <div
          class="m_circle_menu_item_btn"
          :style="{transform: `translate(-50%, -50%) rotate(${mDeg*index}deg)`}"
          @click="itemClickFn(item)"
        >{{item.name || ''}}</div>
      </div>
    </div>

    <div class="m_circle_menu_btn" @click="changeMenuFn">点击</div>
  </div>
</template>

<script>
export default {
  name: "m_circle_menu",
  components: {},
  created() {
    this.initData();
  },
  mounted() {},
  data() {
    return {
      menuIsShow: false, // 显示/隐藏导航
      //   rectifyDeg: 0, // 方向矫正度数
      mDeg: 0 // 旋转角度
      //   halfLength: 0 // 菜单列表一半的长度 这里主要是为了性能优化
    };
  },
  computed: {
    getScaling() {
      return this.menuIsShow ? this.mScalings.max : this.mScalings.min;
    }
  },
  props: {
    mList: {
      // 列表数据
      type: Array,
      default: () => {
        return [
          { name: "a" },
          { name: "b" },
          { name: "c" },
          { name: "d" },
          { name: "f" }
        ];
      }
    },
    mRadian: {
      // 环形弧度
      type: Number,
      default: 360
    },
    mBoxStyle: {
      // 自定义 菜单容器 样式
      type: Object,
      default: () => {
        return {};
      }
    },
    mScalings: {
      type: Object,
      default: () => {
        return {
          max: 1,
          min: 0
        };
      }
    }
  },
  methods: {
    // 初始化数据
    initData() {
      let leng = this.mList.length;
      let radian = this.mRadian > 360 ? 360 : this.mRadian;
      //   console.log(radian, "radian");

      if (radian == 360) {
        this.mDeg = (radian / leng).toFixed(5);
      } else {
        this.mDeg = (radian / (leng - 1)).toFixed(5);
      }
    },
    // 改变菜单显示/隐藏/收缩
    changeMenuFn() {
      this.menuIsShow = !this.menuIsShow;
      this.$emit('changeMenu', this.menuIsShow);
    },
    // 点击导航item
    itemClickFn(arg){
        this.$emit('itemClick', arg);
    }
  }
};
</script>
<style lang="scss" scoped>
.m_circle_menu {
  width: 50vw;
  height: 50vw;
  position: relative;

  &_box {
    width: 100%;
    height: 100%;
    //   border: 1px solid #ccc;
    border-radius: 50%;
    position: relative;
    transition: 0.5s;
  }

  &_btn {
    width: 80px;
    height: 80px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: red;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &_item {
    width: 10px;
    height: 50%;
    // background: pink;
    position: absolute;
    left: 50%;
    top: 0;
    transform-origin: bottom center;
  }
  &_item_btn {
    width: 50px;
    height: 50px;
    position: absolute;
    left: 50%;
    top: 0;
    transform: translate(-50%, -50%);
    background: red;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
