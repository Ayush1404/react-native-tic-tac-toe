import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import Topbar from './components/Topbar'
import Board from './components/Board'
import Scores from './components/Scores'
import Actions from './components/Actions'

const signs = ['X','O','']
export type Turn = typeof signs[number]
export type Player = {
  name:string,
  sign: Turn
}
const App = () => {

  const [turn,setTurn] = useState<Turn>('X')
  const [player1,setPlayer1] = useState<Player>({
    name:'Player1',
    sign:'X'
  })
  const [player2,setPlayer2] = useState<Player>({
    name:'Player2',
    sign:'O'
  })
  const [board,setBoard] = useState<Array<String>>(new Array(9))
  return (
    <ScrollView contentContainerStyle={styles.appContainer}>
        <Topbar 
          message="Player1's turn"
        />
    
        <Board 
          board={board}
        />
      
        <Scores 
          score1={10}
          score2={5}
        />
      
        <Actions 
          action1={()=>{}}
          action2={()=>{}}
          label1='Reset'
          label2='Next'
        />
    </ScrollView>
  )
}

export default App

const styles = StyleSheet.create({
  appContainer:{
    backgroundColor: 'rgb(111,0,255)',
    flex:1,
    justifyContent:'space-around',
  }
})