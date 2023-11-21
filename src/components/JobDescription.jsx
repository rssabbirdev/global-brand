export default function JobDescription() {
	return (
		<div className='border border-black'>
			<div className='border-b border-black bg-orange-100'>
				<p className='m-0 p-2 text-center font-bold italic text-blue-700'>
					Job Description
				</p>
			</div>
			<table className='w-full'>
				<tr className='border-b border-black text-gray-600 text-left bg-blue-200 '>
					<th>05 Main Functions / Scope of Work Area</th>
					<th>Description fo Roles & Responsibilities</th>
					<th>% of Total JD</th>
					<th>Remarks</th>
				</tr>
				<tr>
					<td>1. Recruitment</td>
					<td className='pb-1'>
						{' '}
						Managing the recruitment and selection process
					</td>
					<td className='text-green-500 font-semibold'>25%</td>
					<td>_</td>
				</tr>
				<tr>
					<td>2. Payroll Processing</td>
					<td className='pb-1'>
						Maintain payroll process and benefits program{' '}
					</td>
					<td className='text-green-500 font-semibold'>30%</td>
					<td>_</td>
				</tr>
				<tr>
					<td>3. Employee Relations</td>
					<td className='pb-1'>
						Bridging management and employee relations by
						<br />
						addressing demands, grievances or other issues
					</td>
					<td className='text-green-500 font-semibold'>10%</td>
					<td>_</td>
				</tr>
				<tr>
					<td>4. HR Operations</td>
					<td className='pb-1'>
						Develop and monitor overall HR operations, systems,
						<br />
						tactics and procedures across the organization
					</td>
					<td className='text-green-500 font-semibold'>20%</td>
					<td>_</td>
				</tr>
				<tr>
					<td>5. Training & Others</td>
					<td className='pb-1'>
						Assess training needs to apply and monitor training
						programs
					</td>
					<td className='text-green-500 font-semibold'>15%</td>
					<td>_</td>
				</tr>
				<tr>
					<td></td>
					<td className='py-2'>
					</td>
					<td className='text-green-500 font-semibold pt-2'>100%</td>
					<td></td>
				</tr>
			</table>
		</div>
	);
}
