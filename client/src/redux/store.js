import { configureStore } from "@reduxjs/toolkit";
import discountsReducer from "./reducers/discountsReducer";
import typeReducer from "./reducers/typeReducer";
import userReducer from "./reducers/userReducer";

export const store = configureStore({
  reducer: {
		user: userReducer,
		type: typeReducer,
		discounts: discountsReducer
  }
});
