<template>
  <view class="artist-detail-page">
    <!-- 艺术家信息 -->
    <view class="artist-info">
      <!-- <image :src="currentArtist.image" mode="aspectFit" class="artist-image" /> -->
      <view class="artist-details">
        <text class="artist-name">{{ currentArtist.name }}</text>
        <view class="artist-genre">
          流派:
          <text class="tag">{{ currentArtist.genre }}</text>
        </view>
        <text class="artist-years">生卒年: {{ currentArtist.year }}</text>
        <text class="artist-introduction">{{ currentArtist.introduction }}</text>
        <!-- <text class="artist-background">{{ currentArtist.background }}</text> -->
        <!-- <text class="artist-style">{{ currentArtist.style }}</text> -->
      </view>
    </view>

    <!-- 艺术家各阶段介绍 -->
    <view class="artist-phases">
      <view class="section-title">阶段概述</view>
      <view
        v-for="(phase, index) in phases"
        :key="index"
        class="phase-card"
        @click="toDraw(phase.id)"
      >
        <view class="phase-image">
          <image :src="phase.image" mode="aspectFit" />
        </view>
        <view class="phase-info">
          <text class="phase-name">{{ phase.name }}</text>
          <text class="phase-period">{{ phase.phase }}</text>
          <text class="phase-introduction">{{ phase.introduction }}</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>
import { onMounted } from 'vue'
import { useArtistStore } from '@/store/artist'
import { usePhaseStore } from '@/store/phase'

const artistStore = useArtistStore()
const currentArtist = computed(() => artistStore.currentArtist)

const phaseStore = usePhaseStore()
const phases = computed(() => phaseStore.phases)
const currentPhase = computed(() => phaseStore.currentPhase)

const props = defineProps(['artistId']) // 使用 props 来接收参数

onMounted(() => {
  init()
})

const init = async () => {
  await phaseStore.getArtistPhases(props.artistId)
  // console.log('Artist:', currentArtist.value)
  // console.log('Artist Phases:', phases.value)
}

const toDraw = (phaseId) => {
  phaseStore.setCurrentPhase(phaseId)
  uni.navigateTo({
    url: '/pages/paint/paint',
  })
}
</script>

<style lang="scss" scoped>
.artist-detail-page {
  padding: 20px;
  background-color: #f4f4f9;
}

.artist-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  border-radius: 10px;
  background-color: #ffffff;
  padding: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

  .artist-image {
    width: 100%;
    height: 250px;
    border-radius: 10px;
    margin-bottom: 15px;
    object-fit: cover;
  }

  .artist-details {
    text-align: center;
    display: flex;
    flex-direction: column;

    .artist-name {
      font-size: 26px;
      font-weight: bold;
      color: #333333;
      margin-bottom: 10px;
    }

    .artist-genre,
    .artist-years {
      font-size: 18px;
      color: #555555;
      margin-bottom: 8px;
      .tag {
        display: inline-block;
        background-color: #22c55e;
        color: #fff;
        font-weight: bold;
        padding: 5px 10px;
        border-radius: 15px;
        font-size: 14px;
        margin-right: 10px;
      }
    }

    .artist-introduction,
    .artist-background,
    .artist-style {
      font-size: 16px;
      color: #777777;
      margin-top: 12px;

      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 4; /* 显示三行 */
      overflow: hidden;
      text-overflow: ellipsis;
      word-wrap: break-word;
    }
  }
}

.artist-phases {
  margin-top: 30px;

  .section-title {
    font-size: 20px;
    font-weight: bold;
    color: #333333;
    margin-bottom: 15px;
  }

  .phase-card {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;
    background-color: #ffffff;
    border-radius: 10px;
    margin-bottom: 20px;
    padding: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.03);
    }

    .phase-image {
      height: 130px;
      border-radius: 10px;
      margin-right: 12px;
      image {
        width: 250rpx;
        object-fit: cover;
      }
    }

    .phase-info {
      flex-grow: 1;
      display: flex;
      flex-direction: column;

      .phase-name {
        font-size: 20px;
        font-weight: bold;
        color: #333333;
        margin-bottom: 5px;
      }

      .phase-period {
        font-size: 16px;
        color: #555555;
        margin-bottom: 5px;
      }

      .phase-introduction {
        font-size: 14px;
        color: #777777;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 4; /* 显示四行 */
        overflow: hidden;
        text-overflow: ellipsis;
        word-wrap: break-word;
      }
    }
  }
}
</style>
