import { useFocusEffect, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, Dimensions, TouchableOpacity, FlatList, SafeAreaView} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { useCallback } from 'react/cjs/react.development';
import ListEl from '../../../components/list/listEl';
import { INIDIGO, SKYBLUE } from '../../../constant/color';
import { VW } from '../../../constant/size';

const Chat = ({userName}) => {
    const navigation = useNavigation();
    const [listData, setListData] = useState([]);

    useFocusEffect(
        useCallback(() => {
            let newArr = [];
            for(let i = 0 ; i < 20 ; i++){
                newArr.push({title:"chat", id:i, onPress:onPressChat})
            }
            setListData([...newArr])
        }, [])
    )

    const onPressChat = (id) => {
        navigation.navigate("ChatDetail")
    }

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