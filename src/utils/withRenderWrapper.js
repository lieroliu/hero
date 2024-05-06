import {
  QueryClient,
  QueryClientProvider as QueryProvider,
} from "@tanstack/react-query";
import { render } from "@testing-library/react";

export const withRenderWrapper = (ui, options = {}) => {
  const queryClient = new QueryClient();
  const wrapper = ({ children }) => {
    return <QueryProvider client={queryClient}>{children}</QueryProvider>;
  };

  return render(ui, { wrapper, ...options });
};
