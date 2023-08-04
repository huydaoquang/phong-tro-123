import { Button, InputForm } from "../../components";

const Login = () => {
	return (
		<div className="w-[600px] bg-white p-[30px] pb-[100px] shadow-sm">
			<h3 className="font-semibold text-2xl mb-3 ">Đăng nhập</h3>
			<div className="w-full flex flex-col gap-5">
				<InputForm label="SỐ ĐIỆN THOẠI" />
				<InputForm label="MẬT KHẨU" />
				<Button
					text="Đăng nhập "
					bgColor="bg-secondary1"
					textColor="text-white"
					fullWidth
				/>
			</div>
			<div className="flex justify-between pt-5">
				<small className="text-blue-500 hover:text-orange-500 cursor-pointer">
					Bạn quên mật khẩu ?
				</small>
				<small className="text-blue-500 hover:text-orange-500 cursor-pointer">
					Tạo mật khẩu
				</small>
			</div>
		</div>
	);
};

export default Login;
