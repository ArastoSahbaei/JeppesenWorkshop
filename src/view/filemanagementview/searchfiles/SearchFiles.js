import { useState, useEffect, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import { useDebounce } from '../../../hooks/useDebounce'
import APIService from '../../../shared/images/api/service/APIService'

export const SearchFiles = () => {
	const formRef = useRef()
	const history = useHistory()
	const [searchTerm, setSearchTerm] = useState('')
	const [results, setResults] = useState([])
	const [isSearching, setIsSearching] = useState(false)
	const debouncedSearchTerm = useDebounce(searchTerm, 500)


	const startSearch = async () => {
		setIsSearching(true)
		if (debouncedSearchTerm) {
			try {
				const { data } = await APIService.searchRecipe(searchTerm)
				setIsSearching(false)
				setResults(data)
				console.log(data)
			} catch (error) {
				setIsSearching(false)
				setResults([])
				console.log(error)
			}
		} else {
			setResults([])
			setIsSearching(false)
		}
	}

	useEffect(() => {
		startSearch()
	}, [debouncedSearchTerm])

	return (
		<div>
			<h1>Filter (search) between files</h1>
			<input className="searchInput"
				ref={formRef}
				placeholder={'Search between 3874 files'}
				onChange={event => setSearchTerm(event.target.value)} />
		</div>
	)
}
