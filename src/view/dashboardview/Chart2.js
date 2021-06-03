import { Bar } from 'react-chartjs-2'
import styled from 'styled-components'
import { useState } from 'react'

const rand = () => Math.floor(Math.random() * 255)

export const Chart2 = () => {
	const genData = () => ({
		labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
		datasets: [
			{
				type: 'line',
				label: 'Dataset 1',
				borderColor: `rgb(${rand()}, ${rand()}, ${rand()})`,
				borderWidth: 2,
				fill: false,
				data: [rand(), rand(), rand(), rand(), rand(), rand()],
			},
			{
				type: 'bar',
				label: 'Dataset 2',
				backgroundColor: `rgb(${rand()}, ${rand()}, ${rand()})`,
				data: [rand(), rand(), rand(), rand(), rand(), rand(), rand()],
				borderColor: 'white',
				borderWidth: 2,
			},
			{
				type: 'bar',
				label: 'Dataset 3',
				backgroundColor: `rgb(${rand()}, ${rand()}, ${rand()})`,
				data: [rand(), rand(), rand(), rand(), rand(), rand(), rand()],
			},
		],
	})

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

	const data = genData()

	const [clickedDataset, setClickedDataset] = useState('')
	const [clickedElement, setClickedElement] = useState('')
	const [clickedElements, setClickedElements] = useState('')

	const getDatasetAtEvent = dataset => {
		if (!dataset.length) return

		const datasetIndex = dataset[0].datasetIndex
		setClickedDataset(data.datasets[datasetIndex].label)
	}

	const getElementAtEvent = element => {
		if (!element.length) return

		const { datasetIndex, index } = element[0]
		setClickedElement(
			`${data.labels[index]} - ${data.datasets[datasetIndex].data[index]}`
		)
	}


	return (
		<Wrapper>
			<Bar
				data={data}
				options={options}
				getDatasetAtEvent={getDatasetAtEvent}
				getElementAtEvent={getElementAtEvent}
			/>
			<div className='text-center'>
				<p>{clickedElement}</p>
				<p>{clickedDataset}</p>
				<p>{clickedElements}</p>
			</div>
		</Wrapper>
	)
}
const Wrapper = styled.div`
	grid-column: 7/10;
	grid-row: 1/1;
`