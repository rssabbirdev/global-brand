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
			<div className='grid grid-cols-2'>
				<div>
					<p>20 November 2023</p>
				</div>
				<div className='flex '>
					<p>Time & Duration</p>
					<p>Scope of Work Area</p>
					<p>List Daily Work</p>
					<p>% of Daily Work</p>
				</div>
			</div>
		</div>
	);
}
