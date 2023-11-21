import { MdAddCircle } from 'react-icons/md';

export default function AddTask({ setTodos }) {
	const monthNames = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];
	const handleSubmit = (e) => {
		e.preventDefault();
		const form = e.target;
		const date = new Date(form.date.value);
		const formatDate = `${date.getDate()} ${
			monthNames[date.getMonth()]
		} ${date.getFullYear()}`;
		const hour = form.hourSelect.value;
		const sowa = form.sowaSelect.value;
		const description = form.description.value;
		const percentage = form.percentageSelect.value;

		const exitData = {
			start_time: '10:00',
			end_time: '11:00',
			hour: hour,
			sowa: sowa,
			description: description,
			percentage: percentage,
		};
		console.log(exitData);
		setTodos((todos) => {
			const exit = todos?.find((todo) => todo.posting_date === formatDate);
			console.log('exit',exit);
			if (exit?.id) {
				return todos?.map((todo) => {
					if (todo.posting_date === formatDate) {
                        return {
                            ...todo,
                            todos: [...todo.todos, exitData],
                        };
                    }
                    return todo;
				});
			} else {
				if (todos?.length) {
					return [
						...todos,
						{
							id: todos?.length ? todos?.length + 1 : 1,
							posting_date: formatDate,
							todos: [exitData],
						},
					];
				} else {
					return [
                        {
                            id: 1,
                            posting_date: formatDate,
                            todos: [exitData],
                        },
                    ];
				}
			}
		});

		form.reset()

	};
	return (
		<>
			<div className='border border-black'>
				<form onSubmit={handleSubmit}>
					<table className='w-full'>
						<tr className='border-b border-black text-center bg-blue-200'>
							<th>Date</th>
							<th>Time & Duration</th>
							<th>Scope of Work Area</th>
							<th>List Daily Work</th>
							<th>% of Daily Work</th>
							<th></th>
						</tr>
						<tr className='px-2 '>
							<td className='row-span-3'>
								<input  name='date' type='date' />
							</td>
							<td className='py-2'>
								<select name='hourSelect'>
									<option>01 Hour</option>
									<option>02 Hours</option>
									<option>03 Hours</option>
									<option>04 Hours</option>
									<option>05 Hours</option>
									<option>06 Hours</option>
									<option>07 Hours</option>
									<option>08 Hours</option>
								</select>
							</td>

							<td className='font-semibold text-center'>
								<select name='sowaSelect'>
									<option>Chose Work Area</option>
									<option>HR Operations</option>
									<option>Recruitment</option>
									<option>Employee Relation</option>
									<option>Off the job</option>
									<option>Others</option>
								</select>
							</td>

							<td>
								<input
									name='description'
									type='text'
									className='px-2 py-'
									placeholder='Write the day work here'
								/>
							</td>

							<td className='font-bold  text-right pr-8 py-3'>
								<select name='percentageSelect'>
									<option>0%</option>
									<option>5%</option>
									<option>10%</option>
									<option>15%</option>
									<option>20%</option>
									<option>25%</option>
									<option>30%</option>
									<option>35%</option>
									<option>40%</option>
									<option>45%</option>
									<option>50%</option>
									<option>55%</option>
									<option>60%</option>
									<option>65%</option>
									<option>70%</option>
									<option>75%</option>
									<option>80%</option>
									<option>85%</option>
									<option>90%</option>
									<option>95%</option>
									<option>100%</option>
								</select>
							</td>
							<td>
								<button>
									<MdAddCircle className='text-xl' />
								</button>
							</td>
						</tr>
					</table>
				</form>
			</div>
		</>
	);
}
