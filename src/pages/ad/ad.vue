<template>
  <view class="guide-page">
    <!-- 顶部 swiper 显示步骤 -->
    <swiper indicator-dots autoplay circular>
      <swiper-item>
        <view class="step">
          <view class="step-image">
            <image src="../../static/images/step1.png"></image>
          </view>
          <text class="step-title">步骤1: 选择著作</text>
          <text class="step-desc">请选择不同风格艺术家的著作</text>
        </view>
      </swiper-item>
      <swiper-item>
        <view class="step">
          <view class="step-image">
            <image src="../../static/images/step1.png"></image>
          </view>
          <text class="step-title">步骤2: 绘制草稿</text>
          <text class="step-desc">在画布上绘制草稿</text>
        </view>
      </swiper-item>
      <swiper-item>
        <view class="step">
          <view class="step-image">
            <image src="../../static/images/step1.png"></image>
          </view>
          <text class="step-title">步骤3: 编写提示词</text>
          <text class="step-desc">编写生成作品的提示词</text>
        </view>
      </swiper-item>
      <swiper-item>
        <view class="step">
          <view class="step-image">
            <image src="../../static/images/step1.png"></image>
          </view>
          <text class="step-title">步骤4: 生成作品</text>
          <text class="step-desc">闪烁艺术之眼生成作品</text>
        </view>
      </swiper-item>
    </swiper>

    <!-- 进入首页按钮 -->
    <view class="start-btn-container">
      <button class="start-btn" @click="goToHome">开始创作</button>
    </view>
  </view>
</template>

<script lang="ts" setup>
// 跳转到首页
function goToHome() {
  uni.switchTab({
    url: '/pages/index/index',
  })
}
</script>

<style scoped lang="scss">
.guide-page {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.swiper {
  flex: 1;
}

.step {
  text-align: center;
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.step-image {
  width: 100%;
  height: 60%;
  image {
    width: 100%;
    height: 600px;
  }
}

.step-title {
  font-size: 20px;
  margin-top: 10px;
  font-weight: bold;
}

.step-desc {
  font-size: 16px;
  margin-top: 5px;
  color: #888;
}

.start-btn-container {
  margin: 20px;
  text-align: center;
}

.start-btn {
  width: 80%;
  height: 50px;
  background-color: #007aff;
  color: white;
  font-size: 18px;
  border-radius: 25px;
}
</style>
