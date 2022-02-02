import { useFocusEffect } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, ScrollView, FlatList} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useCallback, useEffect } from 'react/cjs/react.development';
import ListEl from '../../../components/list/listEl';
import { BLUE, INIDIGO, SKYBLUE } from '../../../constant/color';
import { VW } from '../../../constant/size';


const List = (props) => {

    const [listData, setListData] = useState([]);
    const [isUpdateList, setIsUpdateList] = useState(true); 
    
    // 초기 리스트 업데이트
    useFocusEffect(useCallback(() => {
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
        }, 500)
    })

    const onScrollList = async (e) => {
        if(!isUpdateList){return}
        // 현재 스크롤 값
        let updateScroll = e.nativeEvent.contentOffset.y;
        if(updateScroll == 0){return}

        // 현재 보여지는 화면 높이 값
        let screenHeight = e.nativeEvent.layoutMeasurement.height;
        // 전체 문서의 높이
        let documentHeight = e.nativeEvent.contentSize.height;
        // 무한 스크롤이 시작하는 최소의 여백
        let paddingBottom = 100;

        if (screenHeight + updateScroll + paddingBottom >= documentHeight) {
            if(!isUpdateList){return};
            setIsUpdateList(false);
            await fetchData();
            setIsUpdateList(true);
        }
    };

    return(
        <SafeAreaView style={styles.container}>
            <FlatList 
                onScroll={onScrollList}
                style={styles.listWrap}
                data={listData}
                renderItem={ListEl}
                keyExtractor={(i,index)=>index}
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
        flexGrow:1,
    },
    listWrap:{
        width:"100%",
        display:"flex",
        height:"100%",
    },
})