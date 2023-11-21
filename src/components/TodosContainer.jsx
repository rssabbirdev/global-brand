import { useEffect } from 'react';
import { useState } from 'react';

export default function TodosContainer() {
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		fetch('/TodosList.json')
			.then((res) => res.json())
			.then((data) => setTodos(data));
	}, []);
	console.log(todos);
	return (
		<div className=''>
			<table className='w-full border border-black'>
				<thead>
					<tr className='text-center bg-blue-200'>
						<th>Date</th>
						<th>Time & Duration</th>
						<th>Scope of Work Area</th>
						<th>List Daily Work</th>
						<th>% of Daily Work</th>
					</tr>
				</thead>
			</table>
			{todos.map((item) => (
				<div className='grid grid-cols-8 border border-black my-5'>
					<div className='flex justify-center items-center row-span-2'>
						<p>20 November 2023</p>
					</div>
					<div className='col-span-7'>
						{item.todos.map((todo) => (
							<div className='grid grid-cols-4'>
								<p>{todo.start_time} - {todo.end_time}</p>
								<p>{todo.sowa}</p>
								<p>{todo.description}</p>
								<p className='text-right pr-4'>{todo.percentage}%</p>
							</div>
						))}
					</div>
				</div>
			))}
		</div>
	);
}
