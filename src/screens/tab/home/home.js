import { useFocusEffect, useNavigation } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import { View, Text, Dimensions, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import EStyleSheet from 'react-native-extended-stylesheet';
import { VW, INIDIGO, SKYBLUE } from '../../../constant/color';
import Timer from '../../../components/timer/timer';

const today = new Date();

const Home = (props) => {

    const navigation = useNavigation();

    return(
        <SafeAreaView style={styles.container}>
            {/* 타이머 */}
            <Timer />

            <Text style={styles.title}>Home</Text>
        </SafeAreaView>
    )
};

export default Home;

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