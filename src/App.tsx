import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import router from "./router/router";
import { store } from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

export default App;
