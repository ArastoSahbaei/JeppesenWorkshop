import { render, waitFor } from '@testing-library/react'
import { RESTView } from '../../view/RESTView'

test('show loader when it\'s fetching data', () => {
	const { getByText } = render(<RESTView />)
	expect(getByText(/LOADING../i)).toBeInTheDocument()
})

test('render users name on rows', async () => {
	const { getAllByTestId } = render(<RESTView />)

	const rowValues = await waitFor(() =>
		getAllByTestId('row').map(row => row.textContent)
	)

	expect(rowValues).toEqual(['arasto', 'arasto2', 'arasto3'])
})