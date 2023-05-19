import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";

import App from "./App";
import apps from "../apps";
import Shell from "./Shell";

const Platform = () => {
  const fallback = <Navigate to={apps[0].id} />;

  const appRoutes = (
    <>
      {apps.map(({ id, Component }) => {
        return (
          <Route key={id} path={id} element={<App component={Component} />} />
        );
      })}
      <Route index element={fallback} />
      <Route path="*" element={fallback} />
    </>
  );

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Shell />}>
          {appRoutes}
        </Route>

        <Route path="/standalone">{appRoutes}</Route>
      </>
    )
  );

  return (
    <div className="m-4">
      <RouterProvider router={router} />
    </div>
  );
};

export default Platform;
