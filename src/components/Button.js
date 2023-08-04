import { memo } from "react";

const Button = ({ text, textColor, bgColor, IcAfter, onClick, fullWidth }) => {
	return (
		<button
			type="button"
			className={`px-4 py-2 outline-none rounded-md hover:underline flex items-center justify-center gap-1 
			${fullWidth && "w-full"} 
			${textColor} 
			${bgColor}
			`}
			onClick={onClick}
		>
			<span>{text}</span>
			{IcAfter && (
				<span>
					<IcAfter />
				</span>
			)}
		</button>
	);
};

export default memo(Button);
