<template>
  <div :class="['m_circle_menu']" :style="mBoxStyle">
    <div class="m_circle_menu_box">
      <div
        v-for="(item, index) in mList"
        :key="index"
        class="m_circle_menu_item"
        :style="{transform: `translate(-50%, -100%) rotate(-${mDeg*index}deg)`, height: getHeightRadius}"
      >
        <div
          class="m_circle_menu_item_btn"
          :style="{transform: `translate(-50%, -50%) rotate(${mDeg*index}deg) scale(${getItemScaleNum})`}"
          @click="itemClickFn(item)"
        >{{item.name || ''}}</div>
      </div>
    </div>

    <div class="m_circle_menu_btn" @click="changeMenuFn">{{getCenterBtnTxt}}</div>
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
    // 计算半径的变化以达到整体缩放的效果
    getHeightRadius() {
      let str = this.mRadius;
      let num = parseInt(str);
      let unit = str.replace(num, "");
      // console.log(num, 'num')
      let bool = this.onShow === undefined ? this.menuIsShow : this.onShow;
      // console.log(bool, 'bool-----------')
      if (bool) {
        return this.mScalings.max * num + unit;
      } else {
        return this.mScalings.min * num + unit;
      }
    },
    // 控制菜单列表项 的缩放
    getItemScaleNum(){
      let bool = this.onShow === undefined ? this.menuIsShow : this.onShow;
      return bool ? this.mScalings.max : this.mScalings.min;
    },
    // 中心点按钮文本
    getCenterBtnTxt() {
      if (this.onShow !== undefined) {
        return this.centerBtn.txts[+this.onShow];
      } else {
        return this.centerBtn.txts[+this.menuIsShow];
      }
    }
  },
  props: {
    onShow: {
      type: [Boolean, undefined],
      default: undefined
    },
    mList: {
      // 列表数据
      type: Array,
      default: () => {
        return [
          { name: "a" },
          { name: "b" },
          { name: "c" },
          { name: "d" },
          { name: "d" },
          { name: "d" },
          { name: "f" }
        ];
      }
    },
    centerBtn: {
      type: Object,
      default: () => {
        return {
          txts: ["点我", "x"]
        };
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
    },
    mRadius: {
      type: String,
      default: "200px"
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
      this.$emit("changeMenu", this.menuIsShow);
    },
    // 点击导航item
    itemClickFn(arg) {
      if (this.getItemScaleNum == this.mScalings.max) {
        this.$emit("itemClick", arg);
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.m_circle_menu {
  width: 80px;
  height: 80px;
  position: absolute;
  right: 100px;
  top: 30vh;
  // background: pink;

  &_box {
    width: 100%;
    height: 100%;
    // border: 1px solid #ccc;
    border-radius: 50%;
    position: relative;
  }

  &_btn {
    width: 100%;
    height: 100%;
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
    // background: pink;
    position: absolute;
    left: 50%;
    top: 50%;
    transform-origin: bottom center;
    transition: 0.5s;
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
    transition: 0.5s;
  }
}
</style>
