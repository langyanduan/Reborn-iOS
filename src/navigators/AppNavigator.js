import React from "react";
import { Actions, Scene, Stack, Tabs } from "react-native-router-flux";

import Home from "../screens/Home";
import ServerEditor from "../screens/ServerEditor";
import Config from "../screens/Config";
import ConfigDetail from "../screens/ConfigDetail";
import Tools from "../screens/Tools";
import Settings from "../screens/Settings";
import Thanks from "../screens/Thanks";
import About from "../screens/About";
import Language  from "../screens/Language";

export default AppNavigator = Actions.create(
  <Tabs key="root">
    <Stack key="home" title="Home">
      <Scene key="home" title="main" component={Home} />
      <Scene key="serverEditor" title="editor" component={ServerEditor} />
    </Stack>
    <Stack key="config" title="Config">
      <Scene key="config" title="Config" component={Config} />
      <Scene key="configDetail" title="ConfigDetail" component={ConfigDetail} />
    </Stack>
    <Scene key="tools" title="Tools" component={Tools} />
    <Stack key="setting" title="Settings">
      <Scene key="setting" title="Settings" component={Settings} />
      <Scene key="thanks" title="Thanks" component={Thanks} />
      <Scene key="language" title="Language" component={Language} />
      <Scene key="about" title="About" component={About} />
    </Stack>
  </Tabs> 
);
