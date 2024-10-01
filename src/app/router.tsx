import {
  createBrowserRouter,
} from "react-router-dom";
import { RootLayout } from "./rootLayout.tsx";
import { CardPage } from "@/pages/cards"
import { ShopPage } from "@/pages/shop"
import { IndexPage } from "@/pages/index";
import { RulesPage } from "@/pages/rules";
import { RoulettePage } from "@/pages/roulette";
import { LoginPage } from "@/pages/login";
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
                        path: "shop",
                        element: <ShopPage />,
                    },
                    {
                        path: "login",
                        element: <LoginPage />,
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