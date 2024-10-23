import { defineStore } from 'pinia'
import { ref } from 'vue'
import { IPhase, getPhasesByArtistIDAPI } from '@/service/phase/phase'

export const usePhaseStore = defineStore(
	'phase',
	()=>{
		const phases = ref<IPhase[]>([]);
		const currentPhase = ref<IPhase>();
		// getPhases 方法，负责通过 API 请求获取艺术家阶段数据并设置状态
		const getArtistPhases = async (artist_id: int) => {
			try {
				const response = await getPhasesByArtistIDAPI(artist_id); // 调用服务获取艺术家的阶段信息
				phases.value = response; // 将响应的数据保存到 pahses 列表
			} catch (error) {
				console.error('Error fetching artists:', error);
			}
		};
		const setCurrentPhase = (phase_id: number) => {
			const phase = phases.value.find(a=>a.id == phase_id);
			currentPhase.value = phase;
			console.log('currentPhase.value',currentPhase.value)
		}
	
		return {
			phases,
			currentPhase,
			getArtistPhases,
			setCurrentPhase
		};
	}
)
