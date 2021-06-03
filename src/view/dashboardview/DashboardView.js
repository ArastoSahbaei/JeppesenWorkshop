import { Chart1 } from './Chart1'
import { Chart2 } from './Chart2'
import { Chart3 } from './Chart3'
import { Chart4 } from './Chart4'
import styled from 'styled-components'

export const DashboardView = () => {
	return (
		<Wrapper>
			<Chart1 />
			<Chart2 />
			<Chart3 />
			<Chart4 />
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(10, 1fr);
	grid-template-rows: repeat(4, 1fr);
	height: 80vh;
`

/* Read more about the differences between D3 & ChartJS
https://www.createwithdata.com/d3js-or-chartjs/ */
