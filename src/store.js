import { configureStore } from "@reduxjs/toolkit";

import accountReducer from "./features/Accounts/accountSlice";
import customerReducer from "./features/Customers/customerSlice";

const store = configureStore({
  reducer: {
    account: accountReducer,
    customer: customerReducer,
  },
});

export default store;
