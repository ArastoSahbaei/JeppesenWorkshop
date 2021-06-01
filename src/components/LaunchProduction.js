import styled from 'styled-components'

export const LaunchProduction = () => {
	return (
		<Wrapper>
			<Paragraph>LAUNCH PRODUCTION</Paragraph>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	grid-column: 16/21;
	grid-row: 1/1;
	color: #fff;
	background-color: #009bde;
	cursor: pointer;
	margin: auto;
	width: 50%;
	`

const Paragraph = styled.p`
	text-align: center;
	font-weight: 600;
`