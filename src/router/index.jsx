import NotFound from "../components/UI/NotFound/NotFound.jsx";
import React from "react";
import Main from "../pages/Main.jsx";
import Quiz from "../pages/Quiz.jsx";
import Result from "../pages/Result.jsx";

export const routes = [
    {path: "/", element: Main},
    {path: "/quiz", element: Quiz},
    {path: "/result", element: Result},
    {path: "/*", element: NotFound}
]