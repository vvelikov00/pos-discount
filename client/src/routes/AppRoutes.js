import { Routes, Route } from 'react-router-dom';
import { useSelector } from "react-redux";
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';
import { CardholderHome } from '../pages/CardholderHome';
import { ChangePassword } from '../pages/ChangePassword';
import { MerchantHome } from '../pages/MerchantHome';
import { AddDiscount } from '../pages/AddDiscount';
import { ForgottenPassword } from '../pages/ForgottenPassword';
import { ResetPassword } from '../pages/ResetPassword';


const AppRoutes = () => {
	const {isLoading, user} = useSelector(state => state.user)
	const {type} = useSelector(state => state.type)
  return (
		<Routes>
			{isLoading ? (
				<>
				  <Route path='/' element={<Login/>}/>
					<Route path='register' element={<Register/>}/>
					<Route path='forgottenPassword' element={<ForgottenPassword/>}/>
					<Route path='resetPassword' element={<ResetPassword/>}/>
				</>
			) : (
				<>
					{type && type === 'Cardholder' ? (
						<>
						  <Route path='/' element={<CardholderHome/>}/>
						</>
					): (
						<>
							{user.firstTime ? (
								<> 
								  <Route path='/changePassword' element={<ChangePassword/>}/>
								</>
							): (
								<>
									<Route path='/' element={<MerchantHome/>}/>
									<Route path='/addDiscount' element={<AddDiscount/>}/>
								</>
							)}
						</>
					)}
				</>
			)}
		</Routes>
	)  
}

export {AppRoutes}