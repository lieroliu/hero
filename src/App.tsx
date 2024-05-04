import {
  QueryClient,
  QueryClientProvider as QueryProvider,
} from "@tanstack/react-query";
import { lazy } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ROOT } from "./paths";

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

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryProvider client={queryClient}>
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
    </QueryProvider>
  );
};

export default App;
