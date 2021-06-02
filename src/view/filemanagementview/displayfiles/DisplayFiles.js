import { useState, useEffect } from 'react'
import Axios from 'axios'

export const DisplayFiles = () => {
	const [files, setFiles] = useState([])

	const fetchFiles = async () => {
		try {
			const { data } = await Axios.get('http://localhost:3001/getallfiles')
			setFiles(data)
		} catch (error) {
			console.error(error)
		}
	}

	const downloadFile = (id) => { window.open(`http://localhost:3001/download/${id}`) }


	useEffect(() => {
		fetchFiles()
	}, [])

	const displayAllFiles = () => {
		return (
			files.map((element) =>
				<div key={element._id}>
					<p onClick={() => downloadFile(element._id)}>{element.fileName}</p>
				</div>
			)
		)
	}

	return (
		<div>
			<h1>Display all files</h1>
			{/* 	<button onClick={() => downloadFile()}>download</button> */}
			<button onClick={() => console.log(files)}>display</button>
			{displayAllFiles()}
		</div>
	)
}
