import { getEnv } from "../utils/get-env";

const appConfig = () => ({
  NODE_ENV: getEnv("NODE_ENV", "development"),
  PORT: getEnv("PORT", "8000"),
  BASE_PATH: getEnv("BASE_PATH", "/api"),
  MONGO_URI: getEnv("MONGO_URI"),

  JWT_SECRET: getEnv("jwt_secret_key"),
  JWT_EXPIRES_IN: Number(getEnv("JWT_EXPIRES_IN", "86400")),

  SESSION_SECRET: getEnv("session_secret_key", "fallback_secret"), // Fixed default value
  SESSION_EXPIRES_IN: getEnv("SESSION_EXPIRES_IN", "1d"), // Added a default for safety

  GOOGLE_CLIENT_ID: getEnv(
    "GOOGLE_CLIENT_ID"
  ),
  GOOGLE_CLIENT_SECRET: getEnv(
    "GOOGLE_CLIENT_SECRET"
  ),
  GOOGLE_CALLBACK_URL: getEnv(
    "GOOGLE_CALLBACK_URL",
    "http://localhost:8000/api/auth/google/callback"
  ),

  FRONTEND_ORIGIN: getEnv("FRONTEND_ORIGIN", "https://task-mang-rose.vercel.app"),
  FRONTEND_GOOGLE_CALLBACK_URL: getEnv(
    "FRONTEND_GOOGLE_CALLBACK_URL",
    "https://task-mang-rose.vercel.app/google/ouath/callback"
  ),
});

export const config = appConfig();
