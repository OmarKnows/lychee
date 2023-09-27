import logo from '../../public/assets/images/logo.svg';
import Button from './Button';

const Slogan = () => {
	return (
		<div className='bg-slogan h-[944px]  grid grid-cols-1 justify-items-center	content-center '>
			<div className='h-[525px] w-[525px] border-[9px] border-white rounded-full flex justify-center items-center'>
				<div className='h-[449px] w-[449px] rounded-full bg-white bg-opacity-80 grid grid-cols-1 justify-items-center content-center'>
					<img src={logo} />
					<div className='text-[40px] font-bold my-8'>
						<div>
							<span className='text-primary'>DINING,</span>
							<span className='text-secondary'>FRESH</span>
						</div>
						<div className='text-black'>-ON-WHEELS</div>
					</div>
					<Button text='Catch us' color='primary' size={25} />
				</div>
			</div>
		</div>
	);
};

export default Slogan;
