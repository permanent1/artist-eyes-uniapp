<route lang="json5">
{
  style: {
    navigationBarTitleText: '艺术家列表',
  },
}
</route>

<template>
  <view class="containter">
    <view class="artist-list">
      <view
        class="card"
        v-for="(artist, index) in artists"
        :key="index"
        @click="toPhases(artist.id)"
      >
        <image class="card-image" :src="artist.image" mode="aspectFill"></image>
        <view class="card-content">
          <text class="card-title">{{ artist.name }}</text>
          <text class="card-genre">{{ artist.genre }}</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { useArtistStore } from '@/store/artist'

const artistStore = useArtistStore()
const artists = computed(() => artistStore.artists)
const currentArtist = computed(() => artistStore.currentArtist)
// 组件挂载时自动加载艺术家数据
onMounted(() => {
  init()
})

const init = async () => {
  await artistStore.getArtists()
}

const toPhases = (artistId: number) => {
  artistStore.setCurrentArtist(artistId)
  uni.navigateTo({
    url: `/pages/phase/phase?artistId=${artistId}`,
  })
}
</script>

<style lang="scss" scoped>
.containter {
  background-color: #fff;
}

.artist-list {
  display: flex;
  flex-wrap: wrap; /* 自动换行 */
  justify-content: space-between;
  padding: 10px;

  .card {
    width: 48%; /* 每个卡片占据48%的宽度，留出2%的间距 */
    margin-bottom: 10px;
    background-color: #fff;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    .card-image {
      width: 100%;
      height: 120px;
      object-fit: cover;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
    }

    .card-content {
      padding: 10px;
      display: flex;
      flex-direction: column;

      .card-title {
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 5px;
      }

      .card-genre {
        font-size: 14px;
        color: #888;
      }
    }
  }
}
</style>
