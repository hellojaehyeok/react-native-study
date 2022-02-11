import React, { useCallback, useEffect, useState } from 'react';
import ReactNative, { FlatList, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { SKYBLUE, SKYBLUEBG } from '../../constant/color';
import { VH, VW } from '../../constant/size';
import R_InfinityScroll from '../../components/common/reverseInfinityScroll';


const getChatData = (index) => {
    return [`가${index}`,`나`,`다`,`라`,`마`,`바`,`사`,`아`,`자`,`차`,`카`,`타`,`파`,`하${index}`];
}

const ChatDetail = (props) => {
    const [chatData, setChatData] = useState([]);
    const [pageIndex, setPageIndex] = useState(0);

    useEffect(()=>{
        let chatArr = getChatData(pageIndex);
        setChatData([...chatArr])
    }, [])

    const onScrollEnd = () => {
        // 서버 통신 코드
        let chatArr = getChatData(pageIndex + 1).concat(chatData);
        setChatData([...chatArr])
        setPageIndex(pageIndex+1);
    }

    return(
        <R_InfinityScroll onScrollEnd={onScrollEnd}>
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
        </R_InfinityScroll>
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