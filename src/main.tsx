import ReactDOM from "react-dom/client";
import { Provider } from "react-redux/es/exports";
import App from "./App";
import MainLayout from "./components/layout/main-layout";
import "./index.css";
import { store } from "./redux/store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <MainLayout>
      <App />
    </MainLayout>
  </Provider>
);
