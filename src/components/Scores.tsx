import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type ScoresProps = {
    score1:number,
    score2:number
}

const Scores = ({
    score1,
    score2
}:ScoresProps) => {
  return (
    <View style={styles.scoresContainer}>
      <Text style={styles.scoresText}>
        Player1: {score1}
      </Text>
      <Text style={styles.scoresText}>
        Player2: {score2}
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
        fontSize:24
    }
})