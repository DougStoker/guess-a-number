import {View,Text,Pressable,StyleSheet} from 'react-native';
import Colors from '../../constants/colors.js'


function PrimaryButton({children, onPress}) {
    
    return (
        <View style={styles.buttonOuterContainer}>
    <Pressable 
    style={({pressed}) => pressed? [styles.buttonInnerContainer, styles.pressed]:
        styles.buttonInnerContainer}
    onPress={onPress} android_ripple={{color: Colors.primary500,}}>
        
        <Text style={styles.buttonText}>{children}</Text>
    </Pressable></View>);
   
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer:{
        borderRadius: 28,
        margin: 4,
        overflow: "hidden",
    },
    buttonInnerContainer:{
        backgroundColor: Colors.primary600,
        // borderRadius: 28,
        paddingVertical: 8,
        paddingHorizontal: 16,
        // margin: 4,
        elevation: 2,

    },
    pressed: {
        backgroundColor: Colors.primary700
    },
    buttonText: {
        fontSize: 32,
    }
})