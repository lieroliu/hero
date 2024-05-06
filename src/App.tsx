import CssBaseline from "@mui/material/CssBaseline";
import { lazy } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ROOT } from "./paths";
import { QueryClientProvider } from "./providers";
import { withPageBoundary } from "./utils/withPageBoundary";

const Home = lazy(() =>
  import("./pages/home").then(({ Home: Page }) => ({
    default: Page,
  }))
);
const Hero = lazy(() =>
  import("./pages/hero").then(({ Hero: Page }) => ({
    default: Page,
  }))
);

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
            <Route index element={withPageBoundary(<Home />)} />
            <Route path="heros" element={withPageBoundary(<Home />)}>
              <Route path=":heroId" element={withPageBoundary(<Hero />)} />
            </Route>
          </Route>
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
