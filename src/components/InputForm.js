import { memo } from "react";

const InputForm = ({ label }) => {
	return (
		<div className="">
			<label htmlFor="phone" className="text-xs font-semibold">
				{label}
			</label>
			<input
				type="text"
				id="phone"
				className="outline-none bg-[#e8f0fe] p-2 rounded-md w-full"
			/>
		</div>
	);
};

export default memo(InputForm);
