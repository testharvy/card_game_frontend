import {
  createBrowserRouter,
} from "react-router-dom";
import { RootLayout } from "./rootLayout.tsx";
import { CardPage } from "@/pages/cards"
import { IndexPage } from "@/pages/index";
import { RulesPage } from "@/pages/rules";
import { RoulettePage } from "@/pages/roulette";
import { LoginPage } from "@/pages/login";
import { LoginAction } from "@/features/login"
import { LogoutLoader } from "@/features/logout";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
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
                        action: LoginAction,
                    },
                    {
                        path: "logout",
                        loader: LogoutLoader,
                    }
                ],
            },
        ],
    },
]);