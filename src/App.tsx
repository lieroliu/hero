import CssBaseline from "@mui/material/CssBaseline";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Hero } from "./pages/hero";
import { Home } from "./pages/home";
import { ROOT } from "./paths";
import { QueryClientProvider } from "./providers";

export const App = () => {
  return (
    <QueryClientProvider>
      <CssBaseline />
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        theme="colored"
        limit={3}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
      />
      <Router>
        <Routes>
          <Route path={ROOT}>
            <Route index element={<Home />} />
            <Route path="heros" element={<Home />}>
              <Route path=":heroId" element={<Hero />} />
            </Route>
          </Route>
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
