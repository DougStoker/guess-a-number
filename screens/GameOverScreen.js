import {Text, View, StyleSheet, SafeAreaView,Image} from 'react-native'
import PrimaryButton from '../components/ui/PrimaryButton.js'
import Title from '../components/ui/Title.js'
import NumberContainer from '../components/game/NumberContainer.js'
import Colors from '../constants/colors.js'
import {useState} from 'react'

function GameOverScreen(){

    return (<View style={styles.rootContainer}>
        <Title>GAME OVER!</Title>
        <View style={styles.imageContainer}>
            <Image
                style={styles.image}
                source={require('../assets/images/success.png')}
            />
        </View>
        <Text>
            <View></View>
        </Text>
        <Text>x to guess y</Text>
    </View>)
}

export default GameOverScreen

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: 'hidden',
    margin: 36,
    },
    image: {
        width: '100%',
        height: '100%',
      },
      summaryText: {
        //fontFamily: 'open-sans',
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 24,
      },
      highlight: {
        //fontFamily: 'open-sans-bold',
        color: Colors.primary500,
      }
})