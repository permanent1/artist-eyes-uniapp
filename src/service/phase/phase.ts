import { http } from '@/utils/http'
export interface IPhase {
	id: number
	artist_id: number
	phase: string
	name: string
	introduction: string
	background: string
	style: string
	theme: string
	meaning: string
	artwork: string
	image: string
}

/** 获取所有艺术家信息并保存到store中 */
export const getPhasesByArtistIDAPI = (artist_id: string) => {
  return http.get<IPhase[]>(`/phases/artist/${artist_id}`)
}