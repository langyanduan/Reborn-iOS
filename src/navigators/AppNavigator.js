import React from "react";
import { Actions, Scene, Stack, Tabs } from "react-native-router-flux";

import Home from "../screens/Home";
import ServerEditor from "../screens/ServerEditor";
import Config from "../screens/Config";
import Tools from "../screens/Tools";
import Settings from "../screens/Settings";
import Thanks from "../screens/Thanks";

export default AppNavigator = Actions.create(
  <Tabs key="root">
    <Stack key="home" title="Home">
      <Scene key="home" title="main" component={Home} />
      <Scene key="serverEditor" title="editor" component={ServerEditor} />
    </Stack>
    <Scene key="config" title="Config" component={Config} />
    <Scene key="tools" title="Tools" component={Tools} />
    <Stack key="setting" title="Settings">
      <Scene key="setting" title="Settings" component={Settings} />
      <Scene initial key="thanks" title="Thanks" component={Thanks} />
    </Stack>
  </Tabs> 
);
