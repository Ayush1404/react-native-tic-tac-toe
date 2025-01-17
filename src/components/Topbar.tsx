import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type TopbarProps = {
    message:string
}

const Topbar = ({message}:TopbarProps) => {
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