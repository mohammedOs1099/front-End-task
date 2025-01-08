import { createSlice } from "@reduxjs/toolkit";
let initialState = {
  personalData: {
    employeename: "",
    email: "",
    role: "",
    Phone: "",
    startDate: "",
    state: false
  },
  employeeImage: null,
  previewData: null
};
const CustomFormikSlice = createSlice({
  name: "CustomFormik",
  initialState,
  reducers: {
    setPersonalData: (state, action) => {
      state.personalData = {... state.personalData,...action.payload};
    },
    setEmployeeImage: (state, action) => {
      state.employeeImage = action.payload;
    },
    setPreviewData: (state, action) => {
      state.previewData = action.payload;
    },
    clearForm: state => {
      state.personalData = initialState.personalData;
      state.employeeImage = initialState.employeeImage;
      state.previewData = initialState.previewData;
    }
  }
});
export const { setPersonalData, setEmployeeImage, setPreviewData, clearForm } = CustomFormikSlice.actions;
export default CustomFormikSlice.reducer;
