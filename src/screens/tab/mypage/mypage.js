import React from 'react';
import { View, Text } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { SafeAreaView } from 'react-native-safe-area-context';
import { INIDIGO, SKYBLUE } from '../../../constant/color';
import { VW } from '../../../constant/size';

const MyPage = (props) => {
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>MyPage</Text>
        </SafeAreaView>
    )
};

export default MyPage;

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