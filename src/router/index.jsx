import NotFound from "../components/UI/NotFound/NotFound.jsx";
import React from "react";
import Main from "../pages/Main.jsx";
import Quiz from "../pages/Quiz.jsx";
import Result from "../pages/Result.jsx";
import Redirect from "../pages/Redirect.jsx";

export const routes = [
    {path: "/quiz/", element: Main},
    {path: "/quiz/quiz", element: Quiz},
    {path: "/quiz/result", element: Result},
    {path: "/quiz/redirect/:link", element: Redirect},
    {path: "/quiz/*", element: NotFound}
]