import axios from "axios";

import { formfields } from "@/components/register";

export const registerUser = async (data: formfields) => {
  const response = await axios.post(
    "http://localhost:8000/auth/register",
    data
  );
  return response.data;
};
