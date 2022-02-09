import { useFocusEffect } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, ScrollView, FlatList, SafeAreaView} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { useCallback, useEffect } from 'react/cjs/react.development';
import InfinityScroll from '../../../components/common/infinityScroll';
import ListEl from '../../../components/list/listEl';
import { BLUE, INIDIGO, SKYBLUE } from '../../../constant/color';
import { VW } from '../../../constant/size';


const List = (props) => {

    const [listData, setListData] = useState([]);
    const [isUpdateList, setIsUpdateList] = useState(true); 
    
    // 초기 리스트 업데이트
    useFocusEffect(useCallback(() => {
        setListData([]);
        fetchData();
    }, []) )

    // 서버통신이라고 가정
    const fetchData = () => new Promise((resolve, reject)=>{
        setTimeout(() => {
            let newArr = listData;
            for(let i = 0 ; i < 20 ; i++){
                newArr.push({title:"product"})
            }
            setListData([...newArr]);
            resolve();
        }, 100)
    })

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

export default List;

EStyleSheet.build({
    $rem: VW / 380
});

const styles = EStyleSheet.create({
    container:{
        backgroundColor:SKYBLUE,
        flex:1,
    },
    listWrap:{
        width:"100%",
        height:"100%",
    },
})