import React from "react";

import { ThemedLayoutV2, ThemedTitleV2 } from "@refinedev/antd";
import {Header} from "./header";

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <>  
      <ThemedLayoutV2
        Header={Header}
        Title={(titleProps) => {
          return <ThemedTitleV2 {...titleProps} text="Karnataka Police" />;
        }}
      >
        {children}
      </ThemedLayoutV2>
    </>
  );
};
export default Layout