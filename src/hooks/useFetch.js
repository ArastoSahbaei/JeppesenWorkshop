import { useState, useEffect } from 'react'

export const useFetch = (AXIOSAPI) => {
	const [data, setData] = useState([])
	const [loading, setLoading] = useState()
	const [error, setError] = useState()

	const retrieveData = async () => {
		try {
			const { data } = await AXIOSAPI()
			data && setData(data)
			setLoading(false)
		} catch (error) {
			setError(error)
			setLoading(false)
		}
	}

	useEffect(() => {
		setLoading(true)
		retrieveData()
	}, [])

	return { data, loading, error }
}