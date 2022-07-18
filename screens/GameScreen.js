import {Text, View, StyleSheet, SafeAreaView,FlatList,Alert} from 'react-native'
import PrimaryButton from '../components/ui/PrimaryButton.js'
import Title from '../components/ui/Title.js'
import InstructionText from '../components/ui/InstructionText.js'
import NumberContainer from '../components/game/NumberContainer.js'
import Colors from '../constants/colors.js'
import {useState,useEffect} from 'react'
import { Ionicons } from '@expo/vector-icons'
import Card from '../components/ui/Card'
import GuessLogItem from '../components/game/GuessLogItem.js'



function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
  
    if (rndNum === exclude) {
      return generateRandomBetween(min, max, exclude);
    } else {
      return rndNum;
    }
  }

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver }){
    const initialGuess  = generateRandomBetween(1,100,userNumber)
    const [currentGuess,setCurrentGuess] = useState(initialGuess)
    const [guessRounds, setGuessRounds] = useState([initialGuess])

    useEffect(() => {
        if (currentGuess === userNumber) {
          onGameOver(guessRounds.length)
        }
      }, [currentGuess, userNumber, onGameOver])
    
      useEffect(() => {
        minBoundary = 1
        maxBoundary = 100
      }, [])

      function nextGuessHandler(direction) {
        // direction => 'lower', 'greater'
        if (
          (direction === 'lower' && currentGuess < userNumber) ||
          (direction === 'greater' && currentGuess > userNumber)
        ) {
          Alert.alert("Don't lie!", 'You know that this is wrong...', [
            { text: 'Sorry!', style: 'cancel' },
          ]);
          return;
        }
    
        if (direction === 'lower') {
          maxBoundary = currentGuess
        } else {
          minBoundary = currentGuess + 1
        }
    
        const newRndNumber = generateRandomBetween(
          minBoundary,
          maxBoundary,
          currentGuess
        );
        setCurrentGuess(newRndNumber)
        setGuessRounds((prevGuessRounds) => [newRndNumber, ...prevGuessRounds])
      }
    
      const guessRoundsListLength = guessRounds.length

    return <View style={styles.screen}>
        <Title>opponents guess</Title>
        <NumberContainer>{currentGuess}</NumberContainer>
        <Card>
            <InstructionText style={styles.instructionText}>higher or lower?</InstructionText>
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                    <Ionicons name="md-remove" size={24} color="white" />
                    </PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
                    <Ionicons name="md-add" size={24} color="white" />
                    </PrimaryButton>
                </View>
            </View>
        </Card>
        <View style={styles.listContainer}>
        {/* {guessRounds.map(guessRound => <Text key={guessRound}>{guessRound}</Text>)} */}
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => (
            <GuessLogItem
              roundNumber={guessRoundsListLength - itemData.index}
              guess={itemData.item}
            />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
    
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 40,
    },
    // title: {
    //     fontSize: 24,
    //     fontWeight: 'bold',
    //     color: '#ddb52f',
    //     textAlign: 'center',
    //     borderWidth: 2,
    //     borderColor: '#ddb52f',
    //     padding: 12,

    // }
});

export default GameScreen