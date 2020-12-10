import React, { useContext } from "react";
import { Text, View } from "react-native";
import useTheme from "../hooks/useTheme";

export const Paragraph = ({ children, style }) => {
    const { isLightTheme, lightTheme, darkTheme } = useTheme();
    const theme = isLightTheme ? lightTheme : darkTheme;
  return (
    <Text
      style={{
        fontSize: 16,
        lineHeight: 26,
        fontFamily: "Rubik-Regular",
        color: theme.text,
        ...style,
      }}
    >
      {children}
    </Text>
  );
};

export const Lead = ({ children, style }) => {
    const { isLightTheme, lightTheme, darkTheme } = useTheme();
    const theme = isLightTheme ? lightTheme : darkTheme;
  return (
    <Text
      style={{
        fontWeight: "bold",
        fontFamily: "Rubik-Regular",
        color: theme.text,
        fontSize: 16,
        lineHeight: 26,
        ...style,
      }}
    >
      {children}
    </Text>
  );
};

export const H1 = ({ children, style }) => {
    const { isLightTheme, lightTheme, darkTheme } = useTheme();
    const theme = isLightTheme ? lightTheme : darkTheme;
  return (
    <Text
      style={{
        fontFamily: "Rubik-Bold",
        color: theme.text,
        fontSize: 41,
        ...style,
      }}
    >
      {children}
    </Text>
  );
};

export const H2 = ({ children, style }) => {
    const { isLightTheme, lightTheme, darkTheme } = useTheme();
    const theme = isLightTheme ? lightTheme : darkTheme;
  return (
    <Text
      style={{
        fontFamily: "Rubik-Medium",
        color: theme.text,
        fontSize: 32,
        ...style,
      }}
    >
      {children}
    </Text>
  );
};