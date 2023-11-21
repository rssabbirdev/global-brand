import AddTask from '../components/AddTask';
import Employee from '../components/Employee';
import JobDescription from '../components/JobDescription';
import TodosContainer from '../components/TodosContainer';

export default function EmployeeDetails() {
  return (
		<section className='bg-slate-300'>
			<div className='w-11/12 m-auto bg-white'>
				<div className='collapse collapse-plus bg-base-200'>
					<input
						type='radio'
						name='my-accordion-3'
						checked='checked'
					/>
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
					<input type='radio' name='my-accordion-3' />
					<div className='collapse-title text-xl font-medium'>
						Task Details
					</div>
					<div className='collapse-content'>
						<div className='mt-5'>
							<TodosContainer />
						</div>
					</div>
			  </div>
			  <AddTask />
			</div>
		</section>
  );
}
