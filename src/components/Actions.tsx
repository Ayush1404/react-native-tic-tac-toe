import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

type ActionsProps = {
    action1:()=>void,
    action2:()=>void,
    label1:string,
    label2:string
}

const Actions = ({
    action1,
    action2,
    label1,
    label2
}:ActionsProps) => {
  return (
    <View style={styles.actionsContainer}>
        <TouchableOpacity style={styles.button} onPress={()=>action1()}>
            <Text style={styles.btnText}>
                {label1}
            </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>action2()}>
            <Text style={styles.btnText}>
                {label2}
            </Text>
        </TouchableOpacity>
    </View>
  )
}

export default Actions

const styles = StyleSheet.create({
    actionsContainer:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'flex-start'
    },
    button:{
        paddingVertical:16,
        paddingHorizontal:32,
        borderColor:'#fff',
        borderWidth:2,
        borderRadius:15
    },
    btnText:{
        color:'#fff',
        fontSize:24,
        fontWeight:'600'
    }
})