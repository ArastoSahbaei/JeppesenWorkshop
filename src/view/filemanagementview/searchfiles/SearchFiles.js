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
			} catch (error) {
				setIsSearching(false)
				setResults([])
			}
		} else {
			setResults([])
			setIsSearching(false)
		}
	}

	useEffect(() => {
		startSearch()
	}, [debouncedSearchTerm])

	const displayResult = () => {
		return (
			results.map((element) => (
				<>
					<div key={element.fileName}>
						<p>File Name: {element.fileName}</p>
						<p>File Size: {element.fileSize}</p>
						<p>File Type: {element.fileType}</p>
						<p>Uploaded Date: {element.createdAt}</p>
						<hr />
					</div>
				</>
			))
		)
	}

	return (
		<div>
			<h1 data-testid='searchFilter'>Filter (search) between files</h1>
			<input className="searchInput"
				ref={formRef}
				placeholder={'Search between 3874 files'}
				onChange={event => setSearchTerm(event.target.value)} />
			{displayResult()}
		</div>
	)
}
