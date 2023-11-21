import { MdAddCircle } from 'react-icons/md';

export default function AddTask() {
	

	return (
		<>
			<div className='border border-black mx-4 my-5'>
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
						<td className='row-span-3'>20 November 2023</td>
						<td className='py-2'>
							<select>
								<option value='1h'>01 Hour</option>
								<option value='2h'>02 Hours</option>
								<option value='3h'>03 Hours</option>
								<option value='4h'>04 Hours</option>
								<option value='5h'>05 Hours</option>
								<option value='6h'>06 Hours</option>
								<option value='7h'>07 Hours</option>
								<option value='8h'>08 Hours</option>
							</select>
						</td>

						<td className='font-semibold text-center'>
							<select>
								<option value=''>Chose Work Area</option>
								<option value='HR_Operations'>
									HR Operations
								</option>
								<option value='Recruitment'>Recruitment</option>
								<option value='Employee Relation'>
									Employee Relation
								</option>
								<option value='Off_the_job'>Off the job</option>
								<option value='Others'>Others</option>
							</select>
						</td>

						<td>
							<input
								type='text'
								className='px-2 py-'
								placeholder='Write the day work here'
							/>
						</td>

						<td className='font-bold  text-right pr-8 py-3'>
							<select>
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
			</div>
		</>
	);
}
