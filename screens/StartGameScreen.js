import {React, useState} from 'react';
import { View, Text, StyleSheet, TextInput, Button,} from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton'
import NumberContainer from '../components/game/NumberContainer'
import Colors from '../constants/colors.js'
import Card from '../components/ui/Card'
import Title from '../components/ui/Title.js'
import InstructionText from '../components/ui/InstructionText.js'

// const StartGameScreen = props => {
//     return (
//         <View>
//             <Text>Start a New Game!</Text>
//         </View>
//     )
// };
function StartGameScreen({onPickNumber}) {
    const [enteredNumber,setEnteredNumber] = useState('')

    function numberInputHandler(enteredText){
        setEnteredNumber(enteredText)
    }
    function resetInputHandler(){
        setEnteredNumber('')
    }
    function confirmInputHandler(){
        const chosenNumber = parseInt(enteredNumber);
        if( isNaN(chosenNumber||chosenNumber<=0||chosenNumber>99)){
            Alert.alert('invalid number',
            'Number has to be a number between 1 and 9',[{text:'Ok',style:'destructive',onPress:resetInputHandler}])
            return
        }
        //console.log('valid')
        onPickNumber(chosenNumber)
    }
    return (
        <View style={styles.rootContainer}>
          <Title>Guess My Number</Title>
          <Card>
            <InstructionText>
              Enter a Number
            </InstructionText>
            <TextInput
              style={styles.numberInput}
              maxLength={2}
              keyboardType="number-pad"
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={numberInputHandler}
              value={enteredNumber}
            />
            <View style={styles.buttonsContainer}>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
              </View>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      )
    
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginTop: 100,
        alignItems: 'center',
      },
      numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center',
      },
      buttonsContainer: {
        flexDirection: 'row',
      },
      buttonContainer: {
        flex: 1,
      },
});
export default StartGameScreen;