import { http } from '@/utils/http'
export interface IArtist {
	id: number
	name: string
	year: string
	genre: string
	introduction: string
	background: string
	style: string
	characters: string
	image: string
	website: string
}

/** 获取所有艺术家信息并保存到store中 */
export const getArtistsAPI = () => {
  return http.get<IArtist[]>('/artists/')
}