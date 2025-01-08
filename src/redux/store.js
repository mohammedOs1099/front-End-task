import { configureStore } from "@reduxjs/toolkit";
import CustomFormikReducer from "./CustomFormikSlice.js";
import employeeSlice from "./EmployeesSlice.js";

export const store = configureStore({
  reducer: {
    CustomFormik: CustomFormikReducer,
    employees: employeeSlice
  }
});
