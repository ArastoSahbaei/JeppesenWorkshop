import { FileUpload } from '../components/FileUpload'
import Axios from 'axios'
import { useState } from 'react'

export const FileManagementView = () => {
	const [Lol, setLol] = useState()

	const fetchFiles = async () => {
		try {
			const { data } = await Axios.get('http://localhost:3001/getallfiles')
			setLol(data)
		} catch (error) {
			console.error(error)
		}
	}

	const downloadFile = (id) => {
		window.open(`http://localhost:3001/download/${id}`)
	}



	return (
		<div>
			<h1>TODO: 1. Upload file 2. Download file 3. Browse inbetween files</h1>
			<h1>file browsing/upload/download</h1>
			<h1>https://chonky.io/</h1>
			<hr />
			<FileUpload />
			<hr />
			<h1>Display Files</h1>
			<button onClick={() => fetchFiles()}>get</button>
			<button onClick={() => downloadFile()}>download</button>
			<button onClick={() => console.log(Lol)}>display</button>
		</div>
	)
}
