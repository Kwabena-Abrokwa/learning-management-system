import React from "react";

interface CustomButtonProps {
	children: string;
	onclick?: React.MouseEventHandler<HTMLButtonElement>;
	backGroundColor?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ children, onclick, backGroundColor }) => {
	return (
		<button
			type="submit"
			onClick={onclick}
			className="bg-[#1DA1F2] w-full h-12 text-center text-white rounded-md my-2"
			style={{backgroundColor: backGroundColor}}
		>
			{children}
		</button>
	);
};

export default CustomButton;
