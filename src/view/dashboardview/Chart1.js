import { Bar } from 'react-chartjs-2'
import styled from 'styled-components'
import Axios from 'axios'
import { useState, useEffect } from 'react'

export const Chart1 = () => {
	const [serverResponse, setServerResponse] = useState()

	const fetchData = async () => {
		try {
			const URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=sek&order=market_cap_desc&per_page=100&page=1&sparkline=false'
			const { data } = await Axios.get(URL)
			setServerResponse(data)
		} catch (error) {
			console.error(error)
		}
	}

	useEffect(() => {
		fetchData()
	}, [])

	const data = {
		labels:
			[
				serverResponse?.[0]?.name,
				serverResponse?.[1]?.name,
				serverResponse?.[3]?.name,
				serverResponse?.[4]?.name,
				serverResponse?.[5]?.name
			],
		datasets: [
			{
				label: 'Crypto Price SEK',
				data: [
					serverResponse?.[0]?.current_price,
					serverResponse?.[1]?.current_price,
					serverResponse?.[2]?.current_price,
					serverResponse?.[3]?.current_price,
					serverResponse?.[4]?.current_price,
					serverResponse?.[5]?.current_price
				],
				backgroundColor: [
					'rgba(255, 99, 132, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(255, 206, 86, 0.2)',
					'rgba(75, 192, 192, 0.2)',
					'rgba(153, 102, 255, 0.2)',
					'rgba(255, 159, 64, 0.2)',
				],
				borderColor: [
					'rgba(255, 99, 132, 1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(75, 192, 192, 1)',
					'rgba(153, 102, 255, 1)',
					'rgba(255, 159, 64, 1)',
				],
				borderWidth: 5,
			},
		],
	}

	return (
		<Wrapper>
			<Bar data={data} options={options} />
		</Wrapper>
	)
}



const options = {
	scales: {
		yAxes: [
			{
				ticks: {
					beginAtZero: true,
				},
			},
		],
	},
}

const Wrapper = styled.div`
	grid-column: 2/5;
	grid-row: 1/2;
`