import React, { useState } from 'react';
import { View, Text, ScrollView, FlatList} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { SafeAreaView } from 'react-native-safe-area-context';
import ListEl from '../../../components/list/listEl';
import { BLUE, INIDIGO, SKYBLUE } from '../../../constant/color';
import { VW } from '../../../constant/size';



const List = (props) => {

    const [listData, setListData] = useState(new Array(3));

    return(
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.listWrap}>
                <FlatList 
                    data={listData}
                    renderItem={ListEl}
                    keyExtractor={(i,index)=>index}
                />
            </ScrollView>
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
    title:{
        color:"#fff",
        fontSize:20,
    },
    listWrap:{
        width:"100%",
        display:"flex",
    },
    listEl:{
        marginHorizontal:"10%",
        width:"80%",
        height:"100rem",
        backgroundColor:"#ccdfff",
        borderRadius:"30rem",
        display: "flex",
        flexDirection:"row",
        alignItems:"center",
        padding:"10rem"
    },
    listLeft:{
        height: "100%",
        width: "30%",
        alignItems:"center",
        justifyContent:"center",
    },
    listImg:{
        height: "50%",
        width: "50%",
        backgroundColor:INIDIGO,
        borderRadius:"50rem"
    },
    listRight:{
        borderLeftWidth:1,
        borderColor:BLUE,
        width: "70%",
        height: "100%",
        justifyContent:"center",
        paddingLeft:"15rem",
    },
    listTitle:{
        color: INIDIGO,
        fontSize:"20rem"
    },
    listDesc:{
        color: INIDIGO,
        fontSize:"14rem"
    },
})