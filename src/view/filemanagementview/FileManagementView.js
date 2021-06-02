import { FileUpload } from '../../components/FileUpload'
import { DisplayFiles } from './displayfiles/DisplayFiles'
import { SearchFiles } from './searchfiles/SearchFiles'

export const FileManagementView = () => {


	return (
		<div>
			<h1>TODO: 1. Upload file 2. Download file 3. Browse inbetween files</h1>
			<h1>file browsing/upload/download</h1>
			<h1>https://chonky.io/</h1>
			<hr />
			<FileUpload />
			<hr />
			<DisplayFiles />
			<hr />
			<SearchFiles />
		</div>
	)
}
