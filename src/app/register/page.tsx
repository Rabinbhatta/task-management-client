"use client";

import Login from "@/components/register";
import React from "react";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

const Pages = () => {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Login />
      </QueryClientProvider>
    </div>
  );
};

export default Pages;
