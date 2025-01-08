import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  employees: []
};

export const employeeSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      const newEmployee = { id: uuidv4(), ...action.payload };

      const existingEmployees = state.employees.find(
        employee => employee.email === action.payload.email
      );
      if (!existingEmployees) {
        state.employees.push(newEmployee);
      }
    },
    removeEmployee: (state, action) => {
      state.employees = state.employees.filter(
        employee => employee.id !== action.payload
      );
    },
    editEmployee: (state, action) => {
      const { id, updatedData } = action.payload;

      const employeeIndex = state.employees.findIndex(
        employee => employee.id === id
      );

      if (employeeIndex !== -1) {
        state.employees[employeeIndex] = {
          ...state.employees[employeeIndex],
          ...updatedData
        };
      }
    }
  }
});

export const {
  searchEmployee,
  addEmployee,
  removeEmployee,
  editEmployee
} = employeeSlice.actions;

export default employeeSlice.reducer;
