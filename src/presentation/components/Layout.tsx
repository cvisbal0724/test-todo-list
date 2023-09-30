import React from "react";
import { LayoutStyles } from './../styles/LayoutStyles';
import { View } from "react-native";

export const Layout = ({ children }: any) => {

    return (
        <View style={LayoutStyles.container}>
            <View style={LayoutStyles.content}>
               
            {children}
            </View>
        </View>
    )
}

