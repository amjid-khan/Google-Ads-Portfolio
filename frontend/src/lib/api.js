import axios from "axios";

const baseURL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

export const api = axios.create({
  baseURL,
  headers: { "Content-Type": "application/json" },
  timeout: 20000,
});

export async function submitContact(payload) {
  const { data } = await api.post("/contact", payload);
  return data;
}

export async function submitAudit(payload) {
  const { data } = await api.post("/audit", payload);
  return data;
}

