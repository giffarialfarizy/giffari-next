import { ReactElement } from 'react';
import LayoutMain from '../layouts/MainLayout';

const TablePage = () => {
	return (
		<>
			<h2>Table</h2>
		</>
	);
};

export default TablePage;

TablePage.getLayout = function getLayout(
	page: ReactElement
) {
	return <LayoutMain>{page}</LayoutMain>;
};
