import {
  QueryClient,
  QueryClientProvider as QueryProvider,
} from "@tanstack/react-query";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Hero } from "./pages/hero";
import { Home } from "./pages/home";
import { ROOT } from "./paths";

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
