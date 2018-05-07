import React from "react";
import { Actions, Scene, Stack, Tabs } from "react-native-router-flux";

import TabBarItem from "../components/TabBarItem";

import Home from "../screens/Home";
import ServerEditor from "../screens/ServerEditor";
import Config from "../screens/Config";
import ConfigDetail from "../screens/ConfigDetail";
import Ping from "../screens/Ping";
import Tools from "../screens/Tools";
import Settings from "../screens/Settings";
import Thanks from "../screens/Thanks";
import About from "../screens/About";
import Language  from "../screens/Language";

export default AppNavigator = Actions.create(
  <Tabs key="tabbar" showLabel={false}>
    <Stack key="homeTab" icon={TabBarItem} titleName="Home" iconName="home" initial={true}>
      <Scene key="home" title="main" component={Home} />
      <Scene key="serverEditor" title="editor" component={ServerEditor} />
    </Stack>
    <Stack key="configTab" icon={TabBarItem} titleName="Config" iconName="albums">
      <Scene key="config" title="Config" component={Config} />
      <Scene key="configDetail" title="ConfigDetail" component={ConfigDetail} />
    </Stack>
    <Stack key="toolsTab" icon={TabBarItem} titleName="Tools" iconName="build">
      {/* <Scene key="ping" title="Ping" component={Ping} /> */}
      <Scene key="tools" title="Tools" component={Tools} />
    </Stack>
    <Stack key="settingTab" icon={TabBarItem} titleName="Settings" iconName="settings">
      <Scene key="setting" title="Settings" component={Settings} />
      <Scene key="thanks" title="Thanks" component={Thanks} />
      <Scene key="language" title="Language" component={Language} />
      <Scene key="about" title="About" component={About} />
    </Stack>
  </Tabs> 
);
