import {
  QueryClient,
  QueryClientProvider as QueryProvider,
} from "@tanstack/react-query";
import { FC, PropsWithChildren } from "react";

export const queryClient = new QueryClient({});

export const QueryClientProvider: FC<PropsWithChildren> = (
  props: PropsWithChildren
) => {
  return <QueryProvider client={queryClient}>{props.children}</QueryProvider>;
};
