import {createBrowserRouter} from "react-router";

import {RootLayout} from "./layouts/RootLayout";
// import {HomePage} from "../pages/HomePage.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            // {
            //     index: true,
            //     Component: HomePage,
            // },
            // {
            //     path: "components",
            //     Component: ComponentsPage,
            // }
        ],
    },
]);
