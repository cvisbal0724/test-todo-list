import { StyleSheet } from 'react-native';
import { $primary, $colorDanger, $colorBlue, $colorGreen } from '../../domain/constants/Colors';

export const ButtonStyles = StyleSheet.create({
    buttonPrimary: {
        backgroundColor: $primary,
    },
    buttonDanger: {
        backgroundColor: $colorDanger,
    },
    buttonInfo: {
        backgroundColor: $colorBlue,
    },
    buttonSuccess: {
        backgroundColor: $colorGreen,
    },
    colorTransparent: {
        backgroundColor: 'transparent'
    },
    styleTitle: {
        fontSize: 20,
        alignSelf: 'center'
    },
    textColorRed: {
        color: $colorDanger,
    },
    textColorGreen: {
        color: 'green'
    },
    buttonRound: {
        borderRadius: 8,        
        width: 75,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    buttonSwipe: {
        // borderTopRightRadius: 8,  
        // borderBottomRightRadius: 8, 
        borderRadius: 50,     
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        height: '50%',
    },
    buttonFlexEnd: {
        flex: 1, 
        alignItems: 'flex-end', 
        justifyContent: 'center',
        verticalAlign: 'middle',
        padding: 10,
        borderRadius: 8,
    }
})