<template>
  <view class="userinfo">
    <button
      class="avatar-btn"
      type="balanced"
      open-type="chooseAvatar"
      @chooseavatar="onChooseAvatar"
    >
      <image
        class="avatar"
        :src="userInfo.avatar || '../../static/images/default-avatar.png'"
      ></image>
    </button>
    <view class="nickname">
      <text style="flex: 1; padding-left: 20upx">昵称:</text>
      <input
        type="nickname"
        class="weui-input"
        placeholder="请输入昵称"
        :value="userInfo.nickname"
        @blur="bindblur"
      />
    </view>
  </view>
</template>

<script lang="ts" setup>
import { useUserStore } from '@/store/user'

// 获取用户信息
const userStore = useUserStore()
const userInfo = computed(() => userStore.userInfo)

// 获取及修改微信头像
function onChooseAvatar(e) {
  console.log('个人头像信息', e)
  // 解构微信头像或者是相册中选中的微信头像,字符串形式
  // 更换微信头像
  userStore.setUserAvatar(e.target.avatarUrl)
}
// 获取昵称
function bindblur(e) {
  console.log('个人昵称信息', e)
  userStore.setUserNickname(e.detail.value)
}
</script>

<style lang="scss" scoped>
.userinfo {
  height: 100vh;
}

.avatar-btn {
  width: 150rpx;
  height: 150rpx;
  padding: 0;
  margin-top: 100rpx;
}
.avatar {
  width: 150rpx;
  height: 150rpx;
}

.nickname {
  border: 1rpx solid #dcdcdc;
  height: 100rpx;
  margin-top: 50rpx;
  padding-left: 20rpx;
  display: flex;
  flex-direction: row;
  align-items: center;
  input {
    height: 100%;
    flex: 4;
  }
}
</style>
