import {
  createHashRouter,
} from "react-router-dom";
import CardPage from './cardPage.tsx'
import IndexPage from "./indexPage.tsx";
import RulesPage from "./rulesPage.tsx"
import RoulettePage from "./roulettePage.tsx";
import Root from "./root.tsx";
import LoginPage, { action as loginAction } from "./loginPage";
import {loader as logoutLoader } from "./logoutPage.tsx";

export const router = createHashRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                children: [
                    {
                        index: true,
                        element: <IndexPage />,
                    },
                    {
                        path: "rules",
                        element: <RulesPage />,
                    },
                    {
                        path: "cards",
                        element: <CardPage />,
                    },
                    {
                        path: "roulette",
                        element: <RoulettePage />,
                    },
                    {
                        path: "login",
                        element: <LoginPage />,
                        action: loginAction,
                    },
                    {
                        path: "logout",
                        loader: logoutLoader,
                    }
                ],
            },
        ],
    },
]);