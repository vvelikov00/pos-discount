import { Routes, Route } from 'react-router-dom';
import { useSelector } from "react-redux";
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';
import { Home } from '../pages/Home';
import { AddMerchant } from '../pages/AddMerchant';
import { Discounts } from '../pages/Discounts';
import { Merchants } from '../pages/Merchants';


const AppRoutes = () => {
	const {isLoading} = useSelector(state => state.user)
  return (
		<Routes>
			{isLoading ? (
				<>
				  <Route path='/' element={<Login/>}/>
					<Route path='/register' element={<Register/>}/>
				</>
			) : (
				<>
					<Route path='/' element={<Home/>}/>
					<Route path='/addMerchant' element={<AddMerchant/>}/>
					<Route path='/discounts' element={<Discounts/>}/>
					<Route path='/merchants' element={<Merchants/>}/>
				</>
			)}
		</Routes>
	)  
}

export {AppRoutes}