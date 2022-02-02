import { useFocusEffect } from '@react-navigation/native';
import React, { useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useCallback } from 'react/cjs/react.development';
import { SKYBLUE, SKYBLUEBG } from '../../constant/color';
import { VW } from '../../constant/size';


const MyChat = () => {
    return (
        <View style={styles.chatWrap, {alignItems:"flex-end"}}><Text style={styles.chatText}>my chat</Text></View>
    )
}
const YourChat = () => {
    return (
        <View style={styles.chatWrap, {alignItems:"flex-start"}}><Text style={styles.chatText}>your chat</Text></View>
    )
}

const getChatData = () => {
    let dataArr = [];
    for(let i=0 ; i < 30 ; i++){
        dataArr.push(Math.round(Math.random())===0)
    }
    console.log(dataArr)
    return dataArr;
}

const ChatDetail = (props) => {
    // 0 -> mychat, 1 -> yourchat
    const [chatData, setChatData] = useState(getChatData())

    useFocusEffect(
        useCallback(() => {
            
        }, [])
    )

    return(
        <SafeAreaView style={styles.container}>
            <FlatList 
                data={chatData}
                renderItem={({item}) => item?<MyChat/>:<YourChat />}
                keyExtractor={(i,index)=>index}
            />
        </SafeAreaView>
    )
};

export default ChatDetail;

EStyleSheet.build({
    $rem: VW / 380
});

const styles = EStyleSheet.create({
    container:{
        backgroundColor:SKYBLUE,
        flex:1,
        padding: "10rem",
    },
    chatWrap:{
        display:"flex",
    },
    chatText:{
        backgroundColor:SKYBLUEBG,
        marginBottom:"10rem",
        padding:"10rem",
        borderRadius:"5rem",
    }
})