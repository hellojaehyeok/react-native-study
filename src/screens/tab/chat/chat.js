import { useFocusEffect, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, Dimensions, TouchableOpacity, FlatList, SafeAreaView} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { useCallback } from 'react/cjs/react.development';
import InfinityScroll from '../../../components/common/infinityScroll';
import ListEl from '../../../components/list/listEl';
import { INIDIGO, SKYBLUE } from '../../../constant/color';
import { VW } from '../../../constant/size';

const Chat = ({userName}) => {
    const navigation = useNavigation();
    const [listData, setListData] = useState([]);
    
    // 초기 리스트 업데이트
    useFocusEffect(
        useCallback(() => {
            setListData([]);
            fetchData()
        }, [])
    )

    // 서버통신이라고 가정
    const fetchData = () => new Promise((resolve, reject)=>{
        setTimeout(() => {
            let newArr = listData;
            for(let i = 0 ; i < 20 ; i++){
                newArr.push({title:"chat", id:i, onPress:onPressChat})
            }
            setListData([...newArr]);
            resolve();
        }, 100)
    })

    // 채팅 아이템 클릭
    const onPressChat = (id) => {
        navigation.navigate("ChatDetail")
    }

    // 마지막 스크롤 감지
    const onScrollEnd = async () =>{
        await fetchData();
    }

    return(
        <SafeAreaView style={styles.container}>
            <InfinityScroll 
                endPoint={100}
                onScrollEnd={onScrollEnd}
                style={styles.listWrap}
                data={listData}
                renderItem={ListEl}
            />
        </SafeAreaView>
    )
};

export default Chat;

EStyleSheet.build({
    $rem: VW / 380
});

const styles = EStyleSheet.create({
    container:{
        backgroundColor:SKYBLUE,
        justifyContent:"center",
        alignItems:"center",
        flex:1,
    },
    title:{
        color:INIDIGO,
        fontSize:20,
    }
})