import { lazy, ReactNode, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import LoginLayout from "./layouts/LoginLayout";
import routers from "./routers/router";
import "./style/App.scss";

const Loading = lazy(() => import("./components/loading/Loading"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loading />}>
        <Routes>
          {routers.map((router, index) => {
            let Layout: ({ children }: { children: ReactNode }) => JSX.Element;

            Layout = DefaultLayout;
            if (router.loginLayout) {
              Layout = LoginLayout;
            }
            const Component = router.component;
            return (
              <Route
                key={index}
                path={router.path}
                element={
                  <Layout>
                    <Component />
                  </Layout>
                }
              ></Route>
            );
          })}
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
