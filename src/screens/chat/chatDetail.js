import { useFocusEffect } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';
import ReactNative, { FlatList, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useCallback } from 'react/cjs/react.development';
import { SKYBLUE, SKYBLUEBG } from '../../constant/color';
import { VH, VW } from '../../constant/size';
import { RecyclerListView, DataProvider, LayoutProvider } from "recyclerlistview";

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

const getChatData = (arr) => {
    let dataArr = arr;
    for(let i=0 ; i < 30 ; i++){
        dataArr.push(Math.round(Math.random())===0)
    }
    return dataArr;
}

const ChatDetail = (props) => {
    const chatScrollRef = useRef();
    const chatContentRef = useRef();
    const [chatData, setChatData] = useState([]);
    const [isFirstRender, setIsFirstRender] = useState(true);
    const [totalChatHeight, setTotalChatHeight] = useState(0);


    useEffect(()=>{
        let chatArr = getChatData([]);
        setChatData([...chatArr])
    }, [])

    const onScrollChat = async e => {
        // 현재 스크롤 값
        let updateScroll = e.nativeEvent.contentOffset.y;
        // 전체 문서의 높이
        let documentHeight = e.nativeEvent.contentSize.height;

        if(updateScroll == 0){
            setTotalChatHeight(documentHeight);
            // 서버 통신
            let chatArr = getChatData(chatData);
            setChatData([...chatArr])
        }
    }
    const onChangeChatSize = () => {
        if(isFirstRender){setIsFirstRender(false); return}
        chatContentRef.current.measureLayout(ReactNative.findNodeHandle(chatScrollRef.current), (xPos, yPos, Width, Height) => {
            chatScrollRef.current.scrollTo({x:0, y:Height - totalChatHeight, animated: false});
        })

    }
    useEffect(() => {
        if(chatData.length <= 10){
            chatScrollRef.current.scrollToEnd({animated: false});
            setIsFirstRender(false);
        }
    }, [chatData])

    return(
        <ScrollView
            onScroll={onScrollChat}
            ref={chatScrollRef}
            onContentSizeChange={onChangeChatSize}
        >
            <View ref={chatContentRef}>
                {
                    chatData.map((item, index) => {
                        return (
                            <View>
                                <Text>{index}</Text>
                                {item?<MyChat/>:<YourChat />}
                            </View>
                        )
                        ;
                    })
                }
            </View>
        </ScrollView>
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