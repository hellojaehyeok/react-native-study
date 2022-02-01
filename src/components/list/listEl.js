import React from 'react';
import { View, Text,TouchableOpacity } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { BLUE, INIDIGO } from '../../constant/color';
import { VW } from '../../constant/size';



const ListEl = (props) => {
    return(
        <TouchableOpacity style={styles.listEl}>
            <View style={styles.listLeft}>
                <View style={styles.listImg}></View>
            </View>
            <View style={styles.listRight}>
                <Text style={styles.listTitle}>Title</Text>
                <Text style={styles.listDesc}>I am Fontend-developer</Text>
            </View>
        </TouchableOpacity>
    )
};

export default ListEl;

EStyleSheet.build({
    $rem: VW / 380
});

const styles = EStyleSheet.create({
    listEl:{
        marginHorizontal:"10%",
        width:"80%",
        height:"100rem",
        backgroundColor:"#ccdfff",
        borderRadius:"30rem",
        display: "flex",
        flexDirection:"row",
        alignItems:"center",
        padding:"10rem",
        marginBottom:"20rem",
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