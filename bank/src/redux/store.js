import { configureStore } from "@reduxjs/toolkit";
import discountsReducer from "./reducers/discountsReducer";
import merchantsReducer from "./reducers/merchantsReducer";
import userReducer from "./reducers/userReducer";

export const store = configureStore({
  reducer: {
		user: userReducer,
		discounts: discountsReducer,
		merchants: merchantsReducer
  }
});
