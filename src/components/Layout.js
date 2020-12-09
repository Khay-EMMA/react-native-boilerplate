import React, { useContext } from "react";
import t from "prop-types";
import {  StatusBar, SafeAreaView, View, Platform } from "react-native";
import useTheme from "../hooks/useTheme";
import { Header as Header_ } from "react-native-elements";

export const Header = (props) => {
  const { isLightTheme, lightTheme, darkTheme } = useTheme();
  const theme = isLightTheme ? lightTheme : darkTheme;

  return (
    <Header_
      {...props}
      containerStyle={{
        backgroundColor: theme.primary,
        paddingHorizontal: 10,
        height: 60,
        paddingTop: 0,
        ...props.containerStyle,
      }}
    />
  );
};

export const HeaderWithBack = ({ title, onBackPress, containerStyle }) => {
    const { isLightTheme, lightTheme, darkTheme } = useTheme();
    const theme = isLightTheme ? lightTheme : darkTheme;
  return (
    <React.Fragment>
      {Platform.OS !== "ios" ? <View style={{ marginTop: "10%" }} /> : null}
      <Header
        leftComponent={{
          icon: "arrow-back",
          color: theme.basic,
          onPress: onBackPress,
        }}
        centerComponent={{
          text: title,
          style: {
            color: theme._3,
            fontWeight: "600",
            fontFamily: "Rubik-Regular",
            fontSize: 18,
          },
        }}
        containerStyle={containerStyle}
      />
    </React.Fragment>
  );
};

HeaderWithBack.propTypes = {
  title: t.string,
  containerStyle: t.object,
  onBackPress: t.func.isRequired,
};

Header.Back = HeaderWithBack;



export const BgView = ({ children, style }) => {
    const { isLightTheme, lightTheme, darkTheme } = useTheme();
    const theme = isLightTheme ? lightTheme : darkTheme;

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: theme.primary,
        paddingHorizontal: "10%",
        ...style,
        
      }}
    >
      <StatusBar barStyle="light-content" backgroundColor={theme.primary} />
      {children}
    </SafeAreaView>
  );
};
BgView.propTypes = {
  children: t.node.isRequired,
};
