// 최근 방식!

import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "./RootLayout";
import Sumin from "./Sumin";
import Super from "./Super";
import Jiwon from "./Jiwon";

// 조금만 낮선 시간을 보내면 금방 익숙해 짐
const rootRouter = createBrowserRouter([
  {
    path: "/",
    element: < RootLayout />,
    children: [ /* Nested Router 라고 함 */
      {
        index: true,
        element: <Sumin name={"수민"} />,
      },
      {
        path: "batman",
        element: <Sumin name={"배트"} />,
      },
      {
        path: "super",
        element: <Super />,
        children: [
          {
            path: ":sid", element: <Jiwon /> /* 절대 잊으면 안됨! : {} */
          },
        ]
      },

    ]
  },
]);
function App() {

  return <RouterProvider router={rootRouter} />;

}

export default App
