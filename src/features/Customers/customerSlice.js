import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};

const customerSlice = createSlice({
  name: "customer",
  initialState: initialState,
  reducers: {
    createCustomer: {
      // the data that we pass to dispatch(actionCreator) from our component is received here
      prepare(fullName, nationalID) {
        return {
          payload: {
            fullName,
            nationalID,
            createdAt: new Date().toISOString(),
          },
        };
      },
      reducer(state, action) {
        state.fullName = action.payload.fullName;
        state.nationalID = action.payload.nationalID;
        state.createdAt = action.payload.createdAt;
      },
    },
    updateName(state, action) {
      state.fullName = action.payload;
    },
  },
});

export const { updateName, createCustomer } = customerSlice.actions;

export default customerSlice.reducer;

// export default function customerReducer(state = initialStateCustomer, action) {
//   switch (action.type) {
//     case "customer/createCustomer":
//       return {
//         ...state,
//         fullName: action.payload.fullName,
//         createdAt: action.payload.createdAt,
//         nationalID: action.payload.nationalID,
//       };

//     case "customer/updateName":
//       return { ...state, fullName: action.payload };

//     default:
//       return state;
//   }
// }

// export function createCustomer(fullName, nationalID) {
//   return {
//     type: "customer/createCustomer",
//     payload: { fullName, nationalID, createdAt: new Date().toISOString() },
//   };
// }

// export function updateName(fullName) {
//   return {
//     type: "customer/updateName",
//     payload: fullName,
//   };
// }
