import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("pages/Auth/Login.tsx"),
  route("/home", "pages/Home/Home.tsx"),
  route("/signup", "pages/Auth/Signup.tsx"),
  route("/schedule", "pages/Schedule/Schedule.tsx"),
  route("/chatbot", "pages/Chatbot/Chatbot.tsx"),
] satisfies RouteConfig;

