<template>
  <view class="draw-container">
    <view class="draw">
      <!-- 进入画板按钮 -->
      <view class="draw-button">
        <button @click="toPaint">开始绘制</button>
      </view>
      <!-- 草稿预览 -->
      <view class="draft-preview"></view>
      <!-- 基本信息填写 -->
      <view class="draft-info">
        <text>作品标题</text>
        <text>作品提示词</text>
      </view>
    </view>

    <view class="phase-card">
      <!-- 阶段图片 -->
      <image class="phase-image" :src="currentPhase.image" mode="aspectFill" />

      <!-- 阶段名称 -->
      <view class="phase-info">
        <text class="phase-name">{{ currentPhase.name }}</text>
        <text class="phase-period">{{ currentPhase.phase }}</text>
      </view>

      <!-- 作品名称 -->
      <view class="artwork-info">
        <text class="artwork-title">{{ currentPhase.artwork }}</text>
      </view>

      <!-- 阶段详细描述 -->
      <view class="phase-description">
        <text class="description-title">简介:</text>
        <text class="description-text">{{ currentPhase.introduction }}</text>
      </view>

      <!-- 阶段风格 -->
      <view class="phase-style">
        <text class="description-title">风格:</text>
        <text class="description-text">{{ currentPhase.style }}</text>
      </view>

      <!-- 阶段背景 -->
      <view class="phase-background">
        <text class="description-title">背景:</text>
        <text class="description-text">{{ currentPhase.background }}</text>
      </view>

      <!-- 阶段意义 -->
      <view class="phase-meaning">
        <text class="description-title">意义:</text>
        <text class="description-text">{{ currentPhase.meaning }}</text>
      </view>

      <!-- 阶段主题 -->
      <view class="phase-theme">
        <text class="description-title">主题:</text>
        <text class="description-text">{{ currentPhase.theme }}</text>
      </view>
    </view>
  </view>
</template>

<script setup>
import { onMounted } from 'vue'
import { usePhaseStore } from '@/store/phase'

const phaseStore = usePhaseStore()
const currentPhase = computed(() => phaseStore.currentPhase)

function toPaint() {
  uni.navigateTo({
    url: '/pages/paint/paint',
  })
}

// const phaseDemo = {
//   id: 4,
//   artist_id: 2,
//   artwork: 'Road from Osny to Pontoise, Hoar Frost',
//   background: 'Road from Osny to Pontoise, Hoar Frost 是Camille Pissarro在1873年创作的一幅作品。',
//   image:
//     'https://artist-eyes.obs.cn-south-1.myhuaweicloud.com/artist/Camille%20Pissarro/phase/1.png',
//   introduction: '毕沙罗的早期作品深受古典主义和巴比松派的影响，专注于乡村和城市风景。',
//   meaning: '这一时期对毕沙罗来说是探索和技术积累的阶段。',
//   name: '初期阶段',
//   phase: '1850年代 - 1870年代初',
//   style: '这幅作品是印象派风格，Pissarro通过散射的光线和色彩捕捉冬日的霜冻效果。',
//   theme: '这幅画的主题集中于展示自然界的静谧与和谐。',
// }
</script>

<style lang="scss" scoped>
.draw-container {
  padding: 16px;
}

.draw {
  display: flex;
  flex-direction: column;
  .draw-button {
    button {
      width: 80%;
      height: 50px;
      background-color: #007aff;
      color: white;
      font-size: 18px;
      border-radius: 25px;
    }
  }

  .draft-preview {
    width: 100%;
    height: 200px;
  }
}

.phase-card {
  background-color: #fff;
  border-radius: 10px;
  padding: 16px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);

  .phase-image {
    width: 100%;
    height: 200px;
    border-radius: 10px;
    object-fit: cover;
    margin-bottom: 16px;
  }

  .phase-info {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
    .phase-name {
      font-size: 24px;
      font-weight: bold;
    }
    .phase-period {
      font-size: 16px;
      color: #999;
      line-height: 32px;
    }
  }

  .artwork-info {
    margin-bottom: 16px;

    .artwork-title {
      font-size: 18px;
      font-weight: bold;
    }
  }

  .phase-description,
  .phase-style,
  .phase-background,
  .phase-meaning,
  .phase-theme {
    margin-bottom: 16px;
  }

  .description-title {
    font-size: 16px;
    font-weight: bold;
  }

  .description-text {
    font-size: 14px;
    color: #333;
    line-height: 1.5;
  }
}
</style>
