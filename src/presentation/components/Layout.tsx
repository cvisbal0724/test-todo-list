import React from "react";
import { LayoutStyles } from './../styles/LayoutStyles';
import { View } from "react-native";
import { CustomSpinner } from "./CustomSpinner";

export const Layout = ({ children, showSpinner }: any) => {

    return (
        <View style={LayoutStyles.container}>
            <View style={LayoutStyles.content}>
               
            {children}
            </View>
        </View>
    )
}

