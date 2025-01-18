import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Player, Turn } from '../App'

type TopbarProps = {
    turn:Turn,
    winner:number,
    player1:Player,
    player2:Player
}

const Topbar = ({turn,winner,player1,player2}:TopbarProps) => {

    function createMessage(){
        if(winner==1)return player1.name + " has won"
        if(winner==2)return player2.name + " has won"
        if(winner==-1)return "Game is a draw"
        if(turn==player1.sign)return player1.name + "'s turn"
        if(turn==player2.sign)return player2.name + "'s turn"
    }

    const message = createMessage();
    return (
        <View style={styles.topbarContainer}>
            <Text style={styles.topbarText}>
                {message}
            </Text>
        </View>
    )
}

export default Topbar

const styles = StyleSheet.create({
    topbarContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    topbarText:{
        color:'#fff',
        fontSize:32,
        fontWeight:'600'
    }
})