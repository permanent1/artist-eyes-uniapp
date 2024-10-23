<template>
  <view class="info bg-white overflow-hidden pt-2 px-4">
    <view class="mt-8">
      <image src="/static/brand.png" alt="" class="w-28 h-28 block mx-auto" />
    </view>
    <view class="mt-12 text-center text-2xl">艺术之眼</view>
    <button
      type="primary"
      open-type="getPhoneNumber"
      class="login-button mt-8"
      @getphonenumber="getPhoneNumber"
    >
      手机号一键登录
    </button>
    <button type="default" class="mt-8" @click="test">输入手机号登录</button>
  </view>
</template>

<script lang="ts" setup>
import { postWXLoginAPI, loggedUserInfoAPI } from '@/service/user/user'
import { testAPI } from '@/service/index/foo'
import { useUserStore } from '@/store/user'

defineOptions({
  name: 'Login',
})
function test() {
  testAPI().then((res) => {
    console.log(res)
  })
}

// 微信授权登录
function getPhoneNumber(e) {
  // 获取手机号
  if (e.detail.errMsg === 'getPhoneNumber:ok') {
    // 用户同意授权，拿到code去获取手机号
    uni.login({
      success: (res) => {
        uni.request({
          url: 'https://api.weixin.qq.com/sns/jscode2session',
          method: 'GET',
          data: {
            appid: 'wx2fac3d97e10ca675', // 小程序的APPID
            secret: '9ab58ac4ef3cfdbb37fcd12b14e3f065', // 小程序的secret密钥,
            js_code: res.code, // wx.login 登录成功后的code
            grant_type: 'authorization_code',
          },
          success: (res) => {
            const data = {
              openid: res.data.openid,
              session_key: res.data.session_key,
              encryptedData: e.detail.encryptedData, // 加密数据
              iv: e.detail.iv, // 初始向量
            }
            postWXLoginAPI(data)
              .then((response) => {
                console.log('登录成功:', response)
                // 保存 token 和用户信息到 UserStore
                const userStore = useUserStore()
                userStore.setUserInfo({
                  openid: data.openid,
                  token: response.access_token, // 添加 token 信息到用户数据中
                })
                uni.showToast({
                  title: '登录成功',
                  icon: 'success',
                  duration: 2000,
                })
                loggedUserInfoAPI().then((res) => {
                  console.log('登录用户个人信息', res)
                  userStore.setUserInfo({
                    id: res.id,
                    username: res.username,
                    nickname: res.nickname,
                    avatar: res.avatar,
                    cellphone: res.cellphone,
                    email: res.email,
                    gender: res.gender,
                    state: res.state,
                    openid: data.openid,
                    token: response.access_token,
                  })
                  // 进入个人主页
                  uni.switchTab({
                    url: '/pages/my/my',
                  })
                })
              })
              .catch((error) => {
                console.error('登录失败:', error)
                uni.showToast({
                  title: '登录失败，请重试',
                  icon: 'none',
                })
              })

            // 对手机号授权的信息进行解密拿到手机号
            // 将 encryptedData 和 iv 发送到后端进行解密，获取用户手机号
            // 注意：解密的逻辑需要在服务端实现

            console.log('手机号码信息', data)
          },
        })
      },
    })
  } else {
    console.log('失败', e)
  }
}
</script>

<style>
.info {
  margin-top: 50rpx;
}
button {
  width: 80%;
}
</style>
