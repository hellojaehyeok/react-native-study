/**
 * 
 *  measue 함수를 공부하기 위해 만들어진 스크린입니다.
 *  https://talkwithcode.tistory.com/58
 * 
 */


import React, { useEffect, useRef } from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, findNodeHandle } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { VW } from '../../constant/size';

const Measure = (props) => {
    
    const boxRef = useRef();
    const boxTwoRef = useRef();

    useEffect(() => {
        getBoxMeasure();
    }, []);

    const getBoxMeasure = () => {
        boxRef.current.measure((x, y, width, height, pageX, pageY)=> {
            console.log("measure == ")
            console.log("x : ", x);
            console.log("y : ", y);
            console.log("width : ", width);
            console.log("height : ", height);
            console.log("pageX : ", pageX);
            console.log("pageY : ", pageY);
        })

        boxRef.current.measureInWindow((x, y, width, height)=> {
            console.log("measureInWindow ==")
            console.log("x : ", x);
            console.log("y : ", y);
            console.log("width : ", width);
            console.log("height : ", height);
        });

        boxRef.current.measureLayout(boxTwoRef.current, (x, y, width, height) => {
            console.log("measureLayout ==")
            console.log("x : ", x);
            console.log("y : ", y);
            console.log("width : ", width);
            console.log("height : ", height);
        }, () => console.log("chat error"))

    };


    return(
        <SafeAreaView style={styles.container}>
            <View ref={boxTwoRef} style={{position:"absolute", top:50, left:50, padding:10, backgroundColor:"blue"}}>
                <View style={{backgroundColor:"green", padding:20,}}>
                    <View ref={boxRef} style={{backgroundColor:"red",width:100,height:100,}}></View>
                </View>
            </View>

            <TouchableOpacity style={styles.buttonWrap} onPress={getBoxMeasure}>
                <Text>get measure</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
};

export default Measure;

EStyleSheet.build({
    $rem: VW / 380
});

const styles = EStyleSheet.create({
    container:{
        flex:1,
    },
    buttonWrap:{
        position:"absolute",
        bottom:100,
    }
})