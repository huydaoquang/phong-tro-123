import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

import logo from "../../assets/logo.png";
import { Button } from "../../components";
import icons from "../../utils/icons";
import { path } from "../../utils/constant";

const { BsPlusCircle } = icons;

const Header = () => {
	const navigate = useNavigate();

	const goLogin = useCallback(() => {
		navigate(path.LOGIN);
	}, [navigate]);
	return (
		<div className="w-1100 flex items-center justify-between border-2">
			<img src={logo} alt="logo" className="w-[240px] h-[70px]" />
			<div className="flex items-center gap-1">
				<small>Phongtro123.com Xin chào !</small>
				<Button
					text="Đăng nhập"
					textColor="text-white"
					bgColor="bg-secondary1"
					onClick={goLogin}
				/>
				<Button
					text="Đăng ký"
					textColor="text-white"
					bgColor="bg-secondary1"
					onClick={goLogin}
				/>
				<Button
					text="Đăng tin mới"
					textColor="text-white"
					bgColor="bg-secondary2"
					IcAfter={BsPlusCircle}
				/>
			</div>
		</div>
	);
};

export default Header;
