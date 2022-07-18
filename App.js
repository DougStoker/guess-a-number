import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,ImageBackground,SafeAreaView} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import {useState} from 'react'
//import Header from '.components/Header.js'
import StartGameScreen from './screens/StartGameScreen.js'
import GameScreen from './screens/GameScreen.js'
import GameOverScreen from './screens/GameOverScreen.js'
//import GameOverScreen from './screens/GameOverScreen.js'
import Colors from './constants/colors.js'
import {useFonts} from 'expo-font'
import AppLoading from 'expo-app-loading'


export default function App() {
  const [userNumber,setUserNumber] = useState()
  const [gameIsOver, setGameIsOver] = useState(true)
  const [guessRounds, setGuessRounds] = useState(0)

//   const [fontsLoaded] = useFonts({
//     'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
//     'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
//   })

//   if (!fontsLoaded){
//     return <AppLoading/>
//   }

  function pickedNumberHandler(pickedNumber){
    setUserNumber(pickedNumber)
    setGameIsOver(false)
  }

  function gameOverHandler(numberOfRounds) {
    setGameIsOver(true);
    setGuessRounds(numberOfRounds);
  }

  function startNewGameHandler() {
    setUserNumber(null);
    setGuessRounds(0);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }

  if (gameIsOver && userNumber) {
    screen = (
      <GameOverScreen
        userNumber={userNumber}
        roundsNumber={guessRounds}
        onStartNewGame={startNewGameHandler}
      />
    );
  }

  return (
    <LinearGradient colors={[Colors.primary700,Colors.accent500]} style={styles.rootScreen}>
        
      <ImageBackground 
      source={require('./assets/images/background.png')} 
      resizemode="cover"
      style={styles.rootScreen}
      imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>  
      </ImageBackground>
    </LinearGradient>
  );
}
// export default function App() {
//   return (
//     <View style={styles.screen}>
//       <Header title={"Guess a Number"} />
//     </View>
//   );
// }

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: Colors.accent500,

  },
  backgroundImage: {
      opacity: 0.15,
  }
});
// const styles = StyleSheet.create({
//   screen: {
//     flex: 1,
//   },
// });
