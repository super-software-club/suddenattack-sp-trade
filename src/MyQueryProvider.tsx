"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const MyQueryProvider = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default MyQueryProvider;
