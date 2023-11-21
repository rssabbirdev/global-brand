export default function Employee() {
	return (
    <div className='border border-black'>
      <div className='border-b border-black bg-orange-100'>
        <p className='m-0 p-2 text-center font-bold'>Employee Details</p>
      </div>
			<div className='grid grid-cols-2'>
				<div className='grid grid-cols-2 gap-5'>
					<div>
						<p className='bg-blue-200 px-1 my-1'>
							Name OF Employee:
						</p>
						<p className='bg-blue-200 px-1 my-1'>ID of Employee:</p>
						<p className='bg-blue-200 px-1 my-1'>Designation:</p>
						<p className='bg-blue-200 px-1 my-1'>Department:</p>
						<p className='bg-blue-200 px-1 my-1'>Date of Joining:</p>
					</div>
					<div>
						<p className='px-1 my-1'>Sabbir Hossain</p>
						<p className='px-1 my-1'>007</p>
						<p className='px-1 my-1'>Frontend Developer (React)</p>
						<p className='px-1 my-1'>Web Development</p>
						<p className='px-1 my-1'>2023-08-01</p>
					</div>
				</div>
				<div className='grid grid-cols-2 gap-5'>
					<div>
						<p className='bg-blue-200 px-1 my-1'>
							Name of Line Manager:
						</p>
						<p className='bg-blue-200 px-1 my-1'>
							Name of Head of Department:
						</p>
						<p className='bg-blue-200 px-1 my-1'>Location:</p>
						<p className='bg-blue-200 px-1 my-1'>Email Address:</p>
						<p className='bg-blue-200 px-1 my-1'>Mobile No:</p>
					</div>
					<div>
						<p className='px-1 my-1'>James Bond</p>
						<p className='px-1 my-1'>Bond James</p>
						<p className='px-1 my-1'>Dhaka, Bangladesh</p>
						<p className='px-1 my-1'>
							sabbir.hosen.rahat@gmail.com
						</p>
						<p className='px-1 my-1'>01601868259</p>
					</div>
				</div>
			</div>
		</div>
	);
}
