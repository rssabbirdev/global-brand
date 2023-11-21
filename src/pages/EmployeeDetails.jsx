import { useState } from 'react';
import AddTask from '../components/AddTask';
import Employee from '../components/Employee';
import JobDescription from '../components/JobDescription';
import TodosContainer from '../components/TodosContainer';

export default function EmployeeDetails() {
	const [todos, setTodos] = useState([
		{
			id: 1,
			posting_date: '4 November 2023',
			todos: [
				{
					start_time: '10:00',
					end_time: '11:00',
					sowa: 'HR Operations',
					description:
						'Income tax certificate preparation & distribution',
					percentage: '20%',
				},
				{
					start_time: '10:00',
					end_time: '11:00',
					sowa: 'Recruitment',
					description: 'Interview Session for sales executive',
					percentage: '30%',
				},
				{
					start_time: '10:00',
					end_time: '11:00',
					sowa: 'Employee Relations',
					description: 'Warehouse visit and discussion on DTDL',
					percentage: '40%',
				},
				{
					start_time: '10:00',
					end_time: '11:00',
					sowa: 'Off the Job',
					description: 'Feeling sick & take rest',
					percentage: '0%',
				},
				{
					start_time: '10:00',
					end_time: '11:00',
					sowa: 'Others',
					description: 'Meeting with HoIT',
					percentage: '10%',
				},
			],
		},
		{
			id: 2,
			posting_date: '12 November 2023',
			todos: [
				{
					start_time: '10:00',
					end_time: '11:00',
					sowa: 'HR Operations',
					description:
						'Income tax certificate preparation & distribution',
					percentage: '20%',
				},
				{
					start_time: '10:00',
					end_time: '11:00',
					sowa: 'Recruitment',
					description: 'Interview Session for sales executive',
					percentage: '30%',
				},
				{
					start_time: '10:00',
					end_time: '11:00',
					sowa: 'Employee Relations',
					description: 'Warehouse visit and discussion on DTDL',
					percentage: '40%',
				},
				{
					start_time: '10:00',
					end_time: '11:00',
					sowa: 'Off the Job',
					description: 'Feeling sick & take rest',
					percentage: '0%',
				},
				{
					start_time: '10:00',
					end_time: '11:00',
					sowa: 'Others',
					description: 'Meeting with HoIT',
					percentage: '10%',
				},
			],
		},
	]);

	// useEffect(() => {
	// 	fetch('/TodosList.json')
	// 		.then((res) => res.json())
	// 		.then((data) => setTodos(data));
	// }, []);
	return (
		<section className='bg-slate-300'>
			<div className='w-11/12 m-auto bg-white'>
				<div className='collapse collapse-plus bg-base-200'>
					<input type='radio' name='my-accordion-3' />
					<div className='collapse-title text-xl font-medium'>
						Employee Details
					</div>
					<div className='collapse-content'>
						<Employee />
					</div>
				</div>
				<div className='collapse collapse-plus bg-base-200'>
					<input type='radio' name='my-accordion-3' />
					<div className='collapse-title text-xl font-medium'>
						Job Description
					</div>
					<div className='collapse-content'>
						<div className='mt-5'>
							<JobDescription />
						</div>
					</div>
				</div>
				<div className='collapse collapse-plus bg-base-200'>
					<input
						type='radio'
						name='my-accordion-3'
						checked='checked'
					/>
					<div className='collapse-title text-xl font-medium'>
						Task Details
					</div>

					<div className='collapse-content'>
						<AddTask setTodos={setTodos} />
						<div className='mt-5'>
							<TodosContainer todos={todos} setTodos={setTodos} />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
