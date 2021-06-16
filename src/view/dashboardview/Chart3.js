import { Bar } from 'react-chartjs-2'
import styled from 'styled-components'
import { useState } from 'react'


const random = () => { return Math.floor(Math.random() * 2500000) }

export const Chart3 = () => {

	const genData = () => ({
		labels: ['January', 'February', 'March', 'April', 'May', 'June'],
		datasets: [
			{
				type: 'line',
				label: 'Created users in 2021',
				borderColor: '#000000',
				borderWidth: 2,
				fill: false,
				data: [random(), random(), random(), random(), random(), random()],
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
	grid-column: 2/5;
	grid-row: 3/4;
`