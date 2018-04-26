import React from "react";
import { Actions, Scene, Stack, Tabs } from "react-native-router-flux";

import Home from "../screens/Home";
import ServerEditor from "../screens/ServerEditor";
import Config from "../screens/Config";
import Tools from "../screens/Tools";
import Settings from "../screens/Settings";

export default AppNavigator = Actions.create(
  <Tabs key="root">
    <Stack key="home" title="Home">
      <Scene key="home" title="main" component={Home} />
      <Scene key="serverEditor" title="editor" component={ServerEditor} />
    </Stack>
    <Scene key="config" title="Config" component={Config} />
    <Scene key="tools" title="Tools" component={Tools} />
    <Scene key="setting" title="Setting" component={Settings} />
  </Tabs> 
);
