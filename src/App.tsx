import { Refine , WelcomePage } from "@refinedev/core";
import { DevtoolsPanel, DevtoolsProvider } from "@refinedev/devtools";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";

import { RefineThemes, useNotificationProvider } from "@refinedev/antd";
import "@refinedev/antd/dist/reset.css"

import { authProvider, dataProvider, liveProvider } from "./providers";
import {Home, ForgotPassword, Login, Register} from "./pages";

import routerBindings, {
  CatchAllNavigate,
  DocumentTitleHandler,
  NavigateToResource,
  UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { Authenticated, ErrorComponent } from "@refinedev/core";
import { App as AntdApp, ConfigProvider, Layout } from "antd";

//import { Layout } from "@/components";
//import { resources } from "@/config/resources";


import "@refinedev/antd/dist/reset.css";


function App() {
  return (
    (<BrowserRouter>
     <RefineKbarProvider>
     <ConfigProvider theme={RefineThemes.Green}>
        <AntdApp>
          <DevtoolsProvider>
            <Refine
              routerProvider={routerBindings}
              dataProvider={dataProvider}
              liveProvider={liveProvider}
              notificationProvider={useNotificationProvider}
              authProvider={authProvider}
              //resources={resources}
              options={{
                syncWithLocation: true,
                warnWhenUnsavedChanges: true,
                liveMode: "auto",
                useNewQueryKeys: true,
                projectId: "h6msd1-HJDbu7-aZV5Fi"
              }}
            >
              <Routes>
                
                <Route index element = {<Home />} />
                <Route path="/register" element = {<Register />} />
                <Route path="/login" element = {<Login />} />
                <Route path="/forgot-password" element = {<ForgotPassword />} />
                <Route
                  element={
                  <Authenticated
                      key="authenticated-layout"
                      fallback={<CatchAllNavigate to="/login" />}
                      >
                      <Layout>
                        
                         <Outlet/>
                      </Layout>
                  </Authenticated>
                  }>
                  <Route index element = {<Home />} />
                </Route>
              </Routes>
              <UnsavedChangesNotifier />
              <DocumentTitleHandler />
            </Refine>
            <DevtoolsPanel />
          </DevtoolsProvider>
        </AntdApp>
      </ConfigProvider>
     </RefineKbarProvider>
      
    </BrowserRouter>)
  );
};

export default App;
