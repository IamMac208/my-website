<template>
  <div class="tooltip-container">
    <span class="tooltip-trigger" @mouseover="showTooltip = true" @mouseout="showTooltip = false">
      <slot></slot>
    </span>
    <!--  <div class="tooltip" :class="mode" v-show="showTooltip"> -->

     <div class="tooltip" :class="mode" :style="{ opacity: showTooltip ? 1 : 0 }">


      <span v-html="text"></span>
    </div>
  </div>
</template>

<style>
.tooltip-container {
  position: relative;
  display: inline-block;
}

.tooltip {
  position: absolute;
  background-color: #000;
  color: #fff;
  padding: 5px;
  border-radius: 4px;
  font-size: 14px;
  opacity: 0;
  transition: opacity 0.6s ease;
  white-space: nowrap;
}

.tooltip-trigger {
  cursor: pointer;
}

.tooltip-container:hover .tooltip {
  opacity: 1;
}

.top {
  bottom: 100%;
}

.bottom {
  top: 100%;
}

.left {
  right: 100%;
}

.right {
  left: 100%;
}
</style>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    mode: {
      type: String,
      default: 'top',
      validator: value => ['top', 'bottom', 'left', 'right'].includes(value),
    },
  },
  data() {
    return {
      showTooltip: false,
    };
  },
};
</script>
