interface IButtonComponent {
	text: string;
	size: number;
	color: 'primary' | 'secondary';
}
const Button: React.FC<IButtonComponent> = ({ text, color, size }) => {
	return (
		<div
			className={`flex justify-center items-center bg-${color} text-[25px] text-white rounded-[10px] w-[186px] h-[52px]`}
		>
			{text}
		</div>
	);
};

export default Button;
