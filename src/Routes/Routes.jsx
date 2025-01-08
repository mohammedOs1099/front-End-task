import {
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from "react-router-dom";
import Layout from "../Pages/Layout";
import Home from "../Pages/Home";
import EmployeeInDitails from "../Pages/EmployeeInDitails";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/employee/:id" element={<EmployeeInDitails />} />
    </Route>
  )
);
export default router;
