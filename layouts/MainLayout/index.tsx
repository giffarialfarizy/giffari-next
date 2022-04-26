import { NextComponentType } from 'next';
import Navbar from './Navbar';

const LayoutMain: NextComponentType = ({ children }) => {
	return (
		<>
			<Navbar />
			<main>{children}</main>
		</>
	);
};

export default LayoutMain;
