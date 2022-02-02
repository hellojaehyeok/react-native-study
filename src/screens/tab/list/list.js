import { useFocusEffect } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, ScrollView, FlatList} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useCallback } from 'react/cjs/react.development';
import ListEl from '../../../components/list/listEl';
import { BLUE, INIDIGO, SKYBLUE } from '../../../constant/color';
import { VW } from '../../../constant/size';



const List = (props) => {

    const [listData, setListData] = useState([]);

    useFocusEffect(useCallback(() => {
        let newArr = [];
        for(let i = 0 ; i < 20 ; i++){
            newArr.push({title:"product", id:i})
        }
        setListData([...newArr])
    }, []) )

    return(
        <SafeAreaView style={styles.container}>
            <FlatList 
                style={styles.listWrap}
                data={listData}
                renderItem={ListEl}
                keyExtractor={(i)=>i.id}
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