<template>
  <view class="user p-4">
    <!-- 用户头像和昵称 -->
    <view class="userinfo">
      <view class="avatar">
        <view>
          <image
            :src="userInfo.avatar || '../../static/images/default-avatar.png'"
            style="width: 150upx; height: 150upx"
          ></image>
        </view>
      </view>
      <view class="nickname">
        <text class="text-xl">{{ userInfo.nickname || '默认昵称' }}</text>
        <view class="vip">
          <image src="../../static/icons/vip.png" alt="" />
          <p class="vip-text">VIP会员</p>
        </view>
      </view>
      <view class="settings">
        <image @click="editUserinfo" src="../../static/icons/settings.png" />
      </view>
    </view>

    <!-- 历史记录、消费明细 -->
    <view class="middle">
      <view class="record-item" @click="navigateToHistory">
        <image src="../../static/icons/history.png" alt="" />
        <text>历史记录</text>
      </view>
      <view class="record-item" @click="navigateToExpenses">
        <image src="../../static/icons/cost.png" alt="" />
        <text>消费明细</text>
      </view>
    </view>

    <!-- 下部分：联系客服、意见反馈 -->
    <view class="bottom">
      <view class="bottom-item">
        <text @click="contactCustomerService">联系客服</text>
      </view>
      <view class="bottom-item">
        <text @click="feedback">意见反馈</text>
      </view>
      <view class="bottom-item exit">
        <text @click="exit">退出账号</text>
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/store'

// 获取用户信息
const userStore = useUserStore()
const userInfo = computed(() => userStore.userInfo)

// 导航到编辑个人信息页面
function editUserinfo() {
  uni.navigateTo({
    url: '/pages/my/userinfo',
  })
}

// 导航到历史记录页面
const navigateToHistory = () => {
  uni.navigateTo({
    url: '/pages/history/history', // 假设有历史记录页面
  })
}

// 导航到消费明细页面
const navigateToExpenses = () => {
  uni.navigateTo({
    url: '/pages/expenses/expenses', // 假设有消费明细页面
  })
}

// 联系客服
const contactCustomerService = () => {
  uni.showToast({
    title: '联系客服：400-123-456',
    icon: 'none',
  })
}

// 意见反馈
const feedback = () => {
  uni.navigateTo({
    url: '/pages/feedback/feedback', // 假设有意见反馈页面
  })
}

// 退出账号
function exit() {
  uni.showModal({
    title: '提示',
    content: '确认退出登录？',
    success: function (res) {
      if (res.confirm) {
        userStore.clearUserInfo()
        console.log('用户点击确定')
        uni.switchTab({
          url: '/pages/index/index',
        })
      } else if (res.cancel) {
        console.log('用户点击取消')
      }
    },
  })
}
</script>

<style lang="scss" scoped>
/* 页面整体容器 */
.user {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #f4f4f4;
}

/* 上部分用户信息 */
.userinfo {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 5%;
  padding: 10rpx 30rpx 10rpx 30rpx;

  .avatar {
    border-radius: 5%;
    image {
      width: 160rpx;
      height: 160rpx;
    }
  }

  .nickname {
    width: 50%;
    text {
      color: #333;
      font-weight: bold;
    }
    .vip {
      display: flex;
      color: #adacab;
      image {
        width: 60rpx;
        height: 60rpx;
      }
      .vip-text {
        margin-left: 10rpx;
        line-height: 60rpx;
      }
    }
  }

  .settings {
    image {
      width: 60rpx;
      height: 60rpx;
    }
  }
}

/* 中间部分：历史记录、消费明细 */
.middle {
  margin-top: 5%;
  display: flex;
  justify-content: space-around;
  background-color: #fff;
  padding: 0 30rpx 0 30rpx;
  .record-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    color: #333;
    text-align: center;
    image {
      width: 90rpx;
      height: 90rpx;
      margin: 10rpx auto;
    }
    text {
      margin-bottom: 10rpx;
    }
  }
}

/* 下部分：联系客服、意见反馈、退出登录 */
.bottom {
  margin-top: 5%;
  display: flex;
  flex-direction: column;
  .bottom-item {
    padding: 0 30rpx 0 30rpx;
    border-radius: 5%;
    height: 80rpx;
    line-height: 80rpx;
    background-color: #fff;
    color: #333;
    text-align: left;
    margin-top: 5rpx;
    &.exit {
      margin-top: 20rpx;
    }
  }
}
</style>
