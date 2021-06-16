import Axios from 'axios'
import { useState } from 'react'

export const FileUpload = () => {
	const [file, setFile] = useState()
	const [isLoading, setIsLoading] = useState(false)
	const [uploadPercentage, setUploadPercentage] = useState(0)

	const uploadFile = async (formData) => {
		try {
			setIsLoading(true)
			const { data } = await Axios.post('http://localhost:3001/fileupload/single', formData, {
				headers: { 'Content-Type': 'multipart/form-data' },
				onUploadProgress: ProgressEvent => { setUploadPercentage(parseInt(Math.round((ProgressEvent.loaded * 100 / ProgressEvent.total)))) }
			})
			setIsLoading(false)
			console.log(data)
			setTimeout(() => setUploadPercentage(0), 3000)
		} catch (error) {
			setIsLoading(false)
			alert('failed uploading image')
			console.error(error)
		}
	}

	const onFormSubmit = (e) => {
		e.preventDefault()
		const formData = new FormData()
		formData.append('files', file.file)
		uploadFile(formData)
	}

	const onChange = (e) => {
		setFile({ file: e.target.files[0] })
	}

	return (
		<div>
			<form onSubmit={(e) => onFormSubmit(e)}>
				<h1>Jeppesen File Upload</h1>
				<input type="file" accept="image/png, image/jpeg" multiple onChange={(e) => onChange(e)} />
				{isLoading ? <h1>LOADING..</h1> : <button type="submit">UPLOAD</button>}
			</form>
			<h1>{uploadPercentage != 0 ? uploadPercentage + '%' : null}</h1>
		</div>
	)
}


/* 
https://developer.mozilla.org/en-US/docs/Web/API/FormData

The FormData interface provides a way to easily construct a set of key/value pairs representing form fields and their values,
 which can then be easily sent using the XMLHttpRequest.send() method.
 It uses the same format a form would use if the encoding type were set to "multipart/form-data".

FormData.append()
Appends a new value onto an existing key inside a FormData object,
 or adds the key if it does not already exist. 
 */