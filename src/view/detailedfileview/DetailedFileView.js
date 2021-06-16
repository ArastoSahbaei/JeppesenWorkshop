import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import APIService from '../../shared/images/api/service/APIService'

export const DetailedFileView = () => {
	const [serverResponse, setServerResponse] = useState()
	const location = useLocation()
	/* const { createdAt, fileName, filePath, fileSize, fileType } = location.state */


	useEffect(async () => {
		/* if (!location.state) { */
		const URL_ID = location.pathname.split('/')[2]
		const { data } = await APIService.getFile(1)
		setServerResponse(data)
		console.log(data)
		/* } */
	}, [])

	return (
		<div>
			<h1>createdAt: {location?.state?.createdAt || serverResponse?.createdAt}</h1>
			<h1>fileName: {location?.state?.fileName || serverResponse?.fileName}</h1>
			<h1>fileName: {location?.state?.filePath || serverResponse?.filePath}</h1>
			<h1>fileName: {location?.state?.fileSize || serverResponse?.fileSize}</h1>
			<h1>fileName: {location?.state?.fileType || serverResponse?.fileType}</h1>
		</div>
	)
}
