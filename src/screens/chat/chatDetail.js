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


const getChatData = (index) => {
    return [`가${index}`,`나${index}`,`다${index}`,`라${index}`,`마${index}`,`바${index}`,`사${index}`,`아${index}`,`자${index}`,`차${index}`,`카${index}`,`타${index}`,`파${index}`,`하${index}`];
}

const ChatDetail = (props) => {
    const chatScrollRef = useRef();
    const chatContentRef = useRef();
    const [totalChatHeight, setTotalChatHeight] = useState(0);
    const [chatData, setChatData] = useState([]);
    const [pageIndex, setPageIndex] = useState(0);

    useEffect(()=>{
        let chatArr = getChatData(pageIndex);
        setChatData([...chatArr])
    }, [])

    const onScrollChat = async e => {
        if(e.nativeEvent.contentOffset.y == 0){
            setTotalChatHeight(e.nativeEvent.contentSize.height);

            // 서버 통신
            let chatArr = getChatData(pageIndex + 1).concat(chatData);
            setChatData([...chatArr])
            setPageIndex(pageIndex+1);
        }
    }
    
    const onChangeChatSize = (e) => {
        chatContentRef.current.measureLayout(ReactNative.findNodeHandle(chatScrollRef.current), (xPos, yPos, Width, Height) => {
            chatScrollRef.current.scrollTo({x:0, y:Height - totalChatHeight, animated: false});
        })
    }


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
                            <View key={index}>
                                <View style={styles.chatWrap, {alignItems:index%2===0?"flex-end":"flex-start"}}>
                                    <Text style={styles.chatText}>{item}</Text>
                                </View>
                            </View>
                        );
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