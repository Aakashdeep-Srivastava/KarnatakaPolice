import React from "react";

import { useGetIdentity } from "@refinedev/core";

import { SettingOutlined } from "@ant-design/icons";
import { Button, Popover } from "antd";

import type { User } from "@/graphql/schema.types";

import {CustomAvatar}  from "../custom-avatar";
//import { Text } from "../../text";
//import { AccountSettings } from "../account-settings";

const CurrentUser = () => {
  const { data : user } = useGetIdentity<User>()
  return (
    <>
      <Popover
        placement="bottomRight"
        //content={content}
        trigger="click"
        overlayInnerStyle={{ padding: 0 }}
        overlayStyle={{ zIndex: 999 }}
      >
      <CustomAvatar/>
      </Popover>  
      </>
  )
}
export default CurrentUser