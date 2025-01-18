import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Cell from './Cell'

type BoardProps = {
    board:Array<String>,
    makeMove:(ind:number)=>void
}

const Board = ({board,makeMove}:BoardProps) => {
  return (
    <View style={styles.boardContainer}>
        <View style={styles.boardRow}>
            <Cell key={0} value={board[0]} right makeMove={()=>makeMove(0)}/>
            <Cell key={1} value={board[1]} makeMove={()=>makeMove(1)} />
            <Cell key={2} value={board[2]} left makeMove={()=>makeMove(2)} />
        </View>
        <View style={styles.boardRow}>
            <Cell key={3} value={board[3]} top bottom makeMove={()=>makeMove(3)} />
            <Cell key={4} value={board[4]} top bottom right left makeMove={()=>makeMove(4)} />
            <Cell key={5} value={board[5]} top bottom makeMove={()=>makeMove(5)} />
        </View>
        <View style={styles.boardRow}>
            <Cell key={6} value={board[6]} right makeMove={()=>makeMove(6)} />
            <Cell key={7} value={board[7]} makeMove={()=>makeMove(7)} />
            <Cell key={8} value={board[8]} left makeMove={()=>makeMove(8)} />
        </View>
    </View>
  )
}

export default Board

const styles = StyleSheet.create({
    boardContainer:{
        flex:3,
        alignItems:'stretch' , 
        justifyContent:'center',
        paddingHorizontal:16
    },
    boardRow:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center'   
    }
})