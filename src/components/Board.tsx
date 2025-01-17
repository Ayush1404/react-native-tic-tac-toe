import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Cell from './Cell'

type BoardProps = {
    board:Array<String>
}

const Board = ({board}:BoardProps) => {
  return (
    <View style={styles.boardContainer}>
        <View style={styles.boardRow}>
            <Cell value={'O'} />
            <Cell value={'O'} />
            <Cell value={'O'} />
        </View>
        <View style={styles.boardRow}>
            <Cell value={'O'} />
            <Cell value={'O'} />
            <Cell value={'O'} />
        </View>
        <View style={styles.boardRow}>
            <Cell value={'O'} />
            <Cell value={'O'} />
            <Cell value={'O'} />
        </View>
    </View>
  )
}

export default Board

const styles = StyleSheet.create({
    boardContainer:{
        flex:3,
        gap:8,
        alignItems:'center',
        padding:30
    },
    boardRow:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center'
    }
})