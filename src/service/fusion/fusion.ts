import { http } from '@/utils/http'

// /** 将图片传入后端并上传到OBS中 */
// export const uploadImageToOBSAPI = (tempFilePath: string, username: string) => {
// 	/**
// 	 * 上传文件到服务器
// 	 * @param {string} tempFilePath - 本地文件路径
// 	 * @param {string} url - 服务器上传接口地址
// 	 * @param {object} formData - 其他额外的表单数据
// 	 * @param {string} name - 文件对应的 key，开发者在服务器端通过这个 key 可以获取到上传的文件数据
// 	 * @returns {Promise} - 返回一个Promise对象，用于处理上传结果
// 	 */
	
// 	return new Promise((resolve, reject) => {
// 		uni.uploadFile({
// 			url: url, // 服务器上传接口地址
// 			filePath: tempFilePath, // 本地文件路径
// 			name: name, // 文件对应的 key
// 			formData: formData, // 其他额外的表单数据
// 			success: (uploadFileRes) => {
// 				// 文件上传成功的处理
// 				console.log('uploadFile success:', uploadFileRes);
// 				resolve(uploadFileRes);
// 			},
// 			fail: (error) => {
// 				// 文件上传失败的处理
// 				console.error('uploadFile fail:', error);
// 				reject(error);
// 			}
// 		});
// 	});
	
// }