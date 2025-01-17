import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


type CellProps ={
    value:String
}
const Cell = ({
    value
}:CellProps) => {
    return (
        <View style={styles.cellContaienr}>
            <Text style={styles.cellText}>
                {value}
            </Text>
        </View>
    )
}

export default Cell

const styles = StyleSheet.create({
    cellContaienr:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        height:80,
        width:80,
    },
    cellText:{
        color:'#fff',
        fontSize:64,
        fontWeight:'500'
    }
})