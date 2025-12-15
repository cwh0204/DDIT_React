import { createBrowserRouter } from "react-router";
import RootLayout from "./RootLayout";
import InitPage from "./InitPage";
import Member from "./Member";

// 그저 설정으로 받아들임
export const jiwonRouter = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <InitPage />
            },
            {
                path: ":ban/:mid",
                element: <Member />,
            }
        ]
    }
]);