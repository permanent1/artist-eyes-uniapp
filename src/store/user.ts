import { defineStore } from 'pinia'
import { ref } from 'vue'

const initState = { username:'', nickname: '', avatar: '', token: '' }

export const useUserStore = defineStore(
  'user',
  () => {
    const userInfo = ref<IUserInfo>({ ...initState })

    const setUserInfo = (val: IUserInfo) => {
      userInfo.value = val
    }
		
		const setUserNickname = (nickname: string) => {
			// 确保 userInfo.value 是对象，而不是空字符串
			if (typeof userInfo.value !== 'object') {
				userInfo.value = { ...initState }
			}
		  userInfo.value.nickname = nickname
		}
		
		const setUserAvatar = (avatar: string) => {
			// 确保 userInfo.value 是对象，而不是空字符串
			if (typeof userInfo.value !== 'object') {
				userInfo.value = { ...initState }
			}
		  userInfo.value.avatar = avatar
		}

    const clearUserInfo = () => {
      userInfo.value = { ...initState }
    }
    // 一般没有reset需求，不需要的可以删除
    const reset = () => {
      userInfo.value = { ...initState }
    }
    const isLogined = computed(() => !!userInfo.value.token)

    return {
      userInfo,
      setUserInfo,
			setUserAvatar,
			setUserNickname,
      clearUserInfo,
      isLogined,
      reset,
    }
  },
  {
    persist: true,
  },
)
