<template>
  <view class="home">
    <!-- 顶部导航栏 -->
    <view class="navbar">
      <image class="logo" src="../../static/brand.png" />
      <input class="search-box" v-model="searchQuery" placeholder="搜索艺术作品或作者..." />
    </view>

    <!-- 轮播图 - 热门艺术作品 -->
    <view class="swiper-container">
      <swiper class="swiper" autoplay="true" interval="5000" indicator-dots>
        <swiper-item v-for="(item, index) in featuredArtworks" :key="index">
          <image :src="item.image" class="swiper-image" />
        </swiper-item>
      </swiper>
    </view>

    <!-- 艺术家派别分类 -->
    <view class="category-container">
      <text class="title">艺术家派别</text>
      <scroll-view scroll-x="true" class="category-list">
        <view v-for="(category, index) in artistCategories" :key="index" class="category-item">
          {{ category }}
        </view>
      </scroll-view>
    </view>

    <!-- 推荐的艺术著作 - 网格布局 -->
    <view class="recommend-container">
      <text class="title">推荐著作</text>
      <view
        v-for="(artwork, index) in recommendedArtworks"
        :key="index"
        class="reco-item"
        @click="goToDetail(artwork.id)"
      >
        <view class="artwork-image">
          <image :src="artwork.image" />
        </view>
        <view class="artwork-info">
          <text class="artwork-title">{{ artwork.title }}</text>
          <text class="artwork-author">{{ artwork.author }}</text>
          <text class="artwork-genre">{{ artwork.genre }}</text>
        </view>
        <view class="right-narrow">
          <image src="../../static/icons/right.png" alt="" />
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { useUserStore } from '@/store/user'

// 是否登录
const userStore = useUserStore()
const isLogined = computed(() => userStore.isLogined)
const userInfo = computed(() => userStore.userInfo)

const searchQuery = ref('')

// 热门作品图片
const featuredArtworks = ref([
  {
    image:
      'https://artist-eyes.obs.cn-south-1.myhuaweicloud.com/artist/Edouard%20Manet/phase/3.png',
  },
  {
    image:
      'https://artist-eyes.obs.cn-south-1.myhuaweicloud.com/artist/Vincent%20Willem%20van%20Gogh/phase/3.png',
  },
  {
    image: 'https://artist-eyes.obs.cn-south-1.myhuaweicloud.com/artist/Edgar%20Degas/phase/1.png',
  },
  {
    image: 'https://artist-eyes.obs.cn-south-1.myhuaweicloud.com/artist/Edvard%20Munch/phase/2.png',
  },
])

// 艺术家派别分类
const artistCategories = ref(['印象派', '巴洛克', '现实主义', '表现主义', '超现实主义', '古典主义'])

// 推荐的艺术著作
const recommendedArtworks = ref([
  {
    id: 1,
    image: 'https://artist-eyes.obs.cn-south-1.myhuaweicloud.com/artist/Edvard%20Munch/phase/2.png',
    title: '呐喊',
    author: 'Edvard Munch',
    genre: '印象派',
  },
  {
    id: 2,
    image: 'https://artist-eyes.obs.cn-south-1.myhuaweicloud.com/artist/Edgar%20Degas/phase/1.png',
    title: '艺术著作 2',
    author: 'Edgar Degas',
    genre: '印象派',
  },
  {
    id: 3,
    image:
      'https://artist-eyes.obs.cn-south-1.myhuaweicloud.com/artist/Vincent%20Willem%20van%20Gogh/phase/3.png',
    title: '星空',
    author: 'Vincent Willem van Gogh',
    genre: '印象派',
  },
  {
    id: 4,
    image: 'https://artist-eyes.obs.cn-south-1.myhuaweicloud.com/artist/Edvard%20Munch/phase/2.png',
    title: '呐喊',
    author: 'Edvard Munch',
    genre: '印象派',
  },
  {
    id: 5,
    image: 'https://artist-eyes.obs.cn-south-1.myhuaweicloud.com/artist/Edgar%20Degas/phase/1.png',
    title: '艺术著作 2',
    author: 'Edgar Degas',
    genre: '印象派',
  },
  {
    id: 6,
    image:
      'https://artist-eyes.obs.cn-south-1.myhuaweicloud.com/artist/Vincent%20Willem%20van%20Gogh/phase/3.png',
    title: '星空',
    author: 'Vincent Willem van Gogh',
    genre: '印象派',
  },
  {
    id: 7,
    image: 'https://artist-eyes.obs.cn-south-1.myhuaweicloud.com/artist/Edvard%20Munch/phase/2.png',
    title: '呐喊',
    author: 'Vincent Willem van Gogh',
    genre: '印象派',
  },
  {
    id: 8,
    image: 'https://artist-eyes.obs.cn-south-1.myhuaweicloud.com/artist/Edgar%20Degas/phase/1.png',
    title: '艺术著作 2',
    author: 'Vincent Willem van Gogh',
    genre: '印象派',
  },
  {
    id: 9,
    image:
      'https://artist-eyes.obs.cn-south-1.myhuaweicloud.com/artist/Vincent%20Willem%20van%20Gogh/phase/3.png',
    title: '星空',
    author: 'Vincent Willem van Gogh',
    genre: '印象派',
  },
  {
    id: 10,
    image:
      'https://artist-eyes.obs.cn-south-1.myhuaweicloud.com/artist/Leonardo%20da%20Vinci/phase/3.png',
    title: '蒙娜丽莎的微笑',
    author: 'Leonardo da Vinci',
    genre: '印象派',
  },
])

// 跳转到详情页面
const goToDetail = (id: number) => {
  uni.navigateTo({
    url: `/pages/detail/detail?id=${id}`,
  })
}

onLoad(() => {})

function toPaint() {
  uni.navigateTo({
    url: '/pages/paint/paint',
  })
}

function toArtistLists() {
  console.log('登录用户信息', userInfo.value)
  console.log('用户登录状态', isLogined.value)
  if (isLogined.value) {
    uni.switchTab({
      url: '/pages/artist/artist',
    })
  } else {
    uni.showModal({
      title: '提示',
      content: '前往登录体验完整功能',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
          uni.redirectTo({
            url: '/pages/login/login',
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      },
    })
  }
}
</script>

<style lang="scss" scoped>
.home {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px;
  position: fixed;
  top: 0;
  z-index: 1000;
}

.logo {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  left: 10px;
}

.search-box {
  background-color: #fff;
  height: 40px;
  width: 60%;
  flex: 1;
  margin-left: 20px;
  padding: 5px 10px;
  border-radius: 20px;
}

.swiper-container {
  margin-top: 70px;
  width: 100%;
  height: 200px;
}

.swiper {
  width: 100%;
  height: 200px;
}

.swiper-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.category-container {
  margin-top: 20px;
  width: 100%;
  height: 100px;
  .title {
    font-weight: bold;
    font-size: 20px;
    float: left;
  }
}

.category-list {
  display: flex;
  white-space: nowrap;
  padding: 10px 0;
  background-color: #f9f9f9;
}

.category-item {
  display: inline-block;
  width: 80px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  box-sizing: border-box;
  margin-right: 10px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.recommend-container {
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  .title {
    font-weight: bold;
    font-size: 20px;
    float: left;
  }
}

.reco-item {
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: left;
  padding: 10px;
  margin-bottom: 15px;
  .artwork-image {
    border-radius: 20px;
    overflow: hidden;
    image {
      width: 100px;
      height: 90px;
      object-fit: cover;
    }
  }
  .artwork-info {
    width: 200px;
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    align-items: start;
    .artwork-title {
      margin-top: 5px;
      font-size: 14px;
      text-align: center;
    }
  }
  .right-narrow {
    align-items: center;
    image {
      width: 20px;
      height: 20px;
    }
  }
}
</style>
