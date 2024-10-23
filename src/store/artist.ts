import { defineStore } from 'pinia'
import { ref } from 'vue'
import { IArtist, getArtistsAPI } from '@/service/artist/artist'

export const useArtistStore = defineStore(
	'artist',
	()=>{
		const artists = ref<IArtist[]>([]);
		const currentArtist = ref<IArtist>();
		// getArtists 方法，负责通过 API 请求获取艺术家数据并设置状态
		const getArtists = async () => {
			try {
				const response = await getArtistsAPI(); // 调用服务获取艺术家信息
				artists.value = response; // 将响应的数据保存到 artists 列表
			} catch (error) {
				console.error('Error fetching artists:', error);
			}
		};
		
		const setCurrentArtist = (artist_id: number) => {
			const artist = artists.value.find(a => a.id === artist_id);
			currentArtist.value = artist; 
		}
	
		return {
			artists,
			currentArtist,
			getArtists,
			setCurrentArtist
		};
	}
)
