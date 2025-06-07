//xác thực và validate email
import { users } from "./mockUsers";

export const isValidFptEmail = (email) => email.endsWith("@fpt.edu.vn");

export const login = (email, password) => {
  return users.find((u) => u.email === email && u.password === password) || null;
};
