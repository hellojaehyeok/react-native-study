import { CommonActions, useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View, TouchableOpacity, Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BLUE, INIDIGO } from '../constant/color';
import { VW } from '../constant/size';

const Intro = (props) => {
    const navigation = useNavigation();

    const onPressTab = () => {
        navigation.navigate(
            "Tab",
            {
                screen:"Home",
                userName:"sjh"
            },
        );
    }

    return(
        <View style={styles.container}>
            {/* 상단 */}
            <Text style={styles.title}>React-Native{`\n`}study app</Text>
            <TouchableOpacity
                style={styles.btnWrap}
                onPress={onPressTab}
            >
                <Text style={styles.btnText}>Go Home</Text>
            </TouchableOpacity>

            {/* 하단 */}
            <View style={styles.bottomLeftBack}></View>
            <View style={styles.bottomLeftRadius}></View>
            <View style={styles.bottomSide}>
                <Text style={styles.bottomText}>
                    Github : hellojaehyeok
                </Text>
            </View>
        </View>
    )
};

export default Intro;


EStyleSheet.build({
    $rem: VW / 380
});

const styles = EStyleSheet.create({
    container:{
        backgroundColor:INIDIGO,
        justifyContent:"center",
        alignItems:"center",
        flex:1,
    },
    title:{
        color:"#fff",
        fontSize:"30rem",
        textAlign:"center",
    },
    btnWrap:{
        marginTop:"30rem",
    },
    btnText:{
        color:BLUE,
        fontSize:"20rem",
        borderWidth:1,
        borderColor:BLUE,
        padding:"10rem",
        borderRadius:"5rem",
    },
    bottomLeftRadius:{
        width:"150rem",
        height: "150rem",
        position: "absolute",
        bottom:"15%",
        left:0,
        backgroundColor:INIDIGO,
        borderBottomLeftRadius:"75rem",
    },
    bottomLeftBack:{
        width:"150rem",
        height: "150rem",
        left:0,
        bottom:"15%",
        backgroundColor:BLUE,
        position: "absolute",
    },
    bottomSide:{
        width: "100%",
        height:"15%",
        backgroundColor:BLUE,
        position:"absolute",
        bottom:0,
        borderTopRightRadius:"75rem",
        alignItems:"center",
        justifyContent:"center"
    },
    bottomText:{
        color:INIDIGO,
        fontSize:"15rem",
    },
})