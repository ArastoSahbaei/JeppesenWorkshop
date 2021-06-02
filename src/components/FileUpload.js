import Axios from 'axios'
import { useState } from 'react'

export const FileUpload = () => {
	const [upload, setUpload] = useState()
	const [isLoading, setIsLoading] = useState(false)
	const formData = new FormData()

	const config = {
		headers: {
			'content-type': 'multipart/form-data'
		}
	}

	const uploadFile = async () => {
		try {
			setIsLoading(true)
			await Axios.post('http://localhost:3001/user/updateAvatar', formData, config)
			setIsLoading(false)
			alert('it worked Lol')
		} catch (error) {
			setIsLoading(false)
			alert('failed uploading image')
			console.error(error)
		}
	}

	const onFormSubmit = (e) => {
		e.preventDefault()
		formData.append('files', upload.file)
		uploadFile()
	}

	const onChange = (e) => {
		setUpload({ file: e.target.files[0] })
	}

	return (
		<div>
			<form onSubmit={(e) => onFormSubmit(e)}>
				<h1>Jeppesen File Upload</h1>
				<input type="file" accept="image/png, image/jpeg" multiple onChange={(e) => onChange(e)} />
				{isLoading ? <h1>LOADING..</h1> : <button type="submit">UPLOAD</button>}
			</form>
		</div>
	)
}
