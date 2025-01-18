import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Player } from '../App'

type ScoresProps = {
  player1:Player,
  player2:Player
}

const Scores = ({
    player1,
    player2
}:ScoresProps) => {
  return (
    <View style={styles.scoresContainer}>
      <Text style={styles.scoresText}>
        {player1.name} : {player1.score}
      </Text>
      <Text style={styles.scoresText}>
        {player2.name} : {player2.score}
      </Text>
    </View>
  )
}

export default Scores

const styles = StyleSheet.create({
    scoresContainer:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center'
    },
    scoresText:{
        color:'#fff',
        fontSize:24,
        fontWeight:'500'
    }
})