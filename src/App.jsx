import "./App.css";
import router from "./Routes/Routes";
import { RouterProvider } from "react-router";
import { Provider } from "react-redux";
import { store } from "./redux/store";
function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router}></RouterProvider>
      </Provider>
    </>
  );
}

export default App;
