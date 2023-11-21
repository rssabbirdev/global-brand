import { createBrowserRouter } from 'react-router-dom';
import EmployeeList from '../pages/EmployeeList';
import EmployeeDetails from '../pages/EmployeeDetails';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <EmployeeList />,
	},
	{
		path: '/employee/:id',
		element: <EmployeeDetails />,
	},
]);
