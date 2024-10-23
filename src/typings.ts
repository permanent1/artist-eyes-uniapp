// 全局要用的类型放到这里

type IResData<T> = {
  code: number
  msg: string
  data: T
}

// uni.uploadFile文件上传参数
type IUniUploadFileOptions = {
  file?: File
  files?: UniApp.UploadFileOptionFiles[]
  filePath?: string
  name?: string
  formData?: any
}

type IUserInfo = {
	id: number
	username?: string
	nickname?: string
	gender?: string
	avatar?: string
	cellphone?: string
	email?: string
	state?: string
	token?: string
	openid?: string
}

enum TestEnum {
  A = 'a',
  B = 'b',
}
