import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'


type CellProps ={
    value:String,
    right?:boolean,
    left?:boolean,
    top?:boolean,
    bottom?:boolean,
    makeMove:()=>void
}
const Cell = ({
    value,
    right,
    left,
    bottom,
    top,
    makeMove
}:CellProps) => {
    return (
        <View style={[styles.cellContaienr,top && styles.topBorder,right && styles.rightBorder,left && styles.leftBorder,bottom && styles.bottomBorder]}>
            <TouchableOpacity
                style={styles.cellContaienr}
                onPress={()=>makeMove()}
            >
                <Text style={[styles.cellText]}>
                    {value}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Cell

const styles = StyleSheet.create({
    cellContaienr:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    cellText:{
        color:'#fff',
        fontSize:64,
        fontWeight:'500',
        padding:24
    },
    rightBorder:{
        borderRightColor:'#fff',
        borderRightWidth:4,
    },
    leftBorder:{
        borderLeftColor:'#fff',
        borderLeftWidth:4
    },
    topBorder:{
        borderTopColor:'#fff',
        borderTopWidth:4
    },
    bottomBorder:{
        borderBottomColor:'#fff',
        borderBottomWidth:4,
    }
})