import { Bar } from 'react-chartjs-2'
import styled from 'styled-components'

export const Chart4 = () => {
	return (
		<Wrapper>
			<Bar data={data} options={options} />
		</Wrapper>
	)
}

const getRandomInt = (max) => {
	return Math.floor(Math.random() * max)
}

const data = {
	labels: ['PDF', 'JPG', 'ZIP', 'JPEG', 'EXE'],
	datasets: [
		{
			label: 'Uploaded files this month',
			data: [
				getRandomInt(1000),
				getRandomInt(1000),
				getRandomInt(1000),
				getRandomInt(1000),
				getRandomInt(1000),
				getRandomInt(1000)
			],
			backgroundColor: [
				'rgba(255, 99, 132, 0.2)',
				'rgba(54, 162, 235, 0.2)',
				'rgba(255, 206, 86, 0.2)',
				'rgba(75, 192, 192, 0.2)',
				'rgba(153, 102, 255, 0.2)',
			],
			borderColor: [
				'rgba(255, 99, 132, 1)',
				'rgba(54, 162, 235, 1)',
				'rgba(255, 206, 86, 1)',
				'rgba(75, 192, 192, 1)',
				'rgba(153, 102, 255, 1)',
			],
			borderWidth: 5,
		},
	],
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
	grid-column: 7/10;
	grid-row: 3/4;
`