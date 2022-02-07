import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { INIDIGO } from '../../constant/color';
import { TAb_MENU_HEIGHT, VW } from '../../constant/size';

const MoreTabsHandler = ({menuArr}) => {
    

    return(
        <View style={styles.container}>

            <View style={styles.topContainer}>
                <View style={styles.topWrap}>
                    <Text style={styles.topText}>
                        송재혁님 안녕하세요
                    </Text>
                    <TouchableOpacity style={styles.logoutBtn}>
                        <Text style={styles.topText}>로그아웃</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.menuWrap}>
                {
                    menuArr.map((item, index) => {
                        return (
                            <TouchableOpacity style={styles.btnWrap} key={index}>
                                <Text>{item}</Text>
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        </View>
    )
};

export default MoreTabsHandler;

EStyleSheet.build({
    $rem: VW / 380
  });
  
  const styles = EStyleSheet.create({
    container:{
        paddingHorizontal:20,
        width: VW,
    },
    topContainer:{
        position:"absolute",
        top: -100,
        height:"80rem",
        paddingHorizontal:20,
    }, 
    topWrap:{
        width:VW - 40,
        height:"100%",
        borderRadius:"20rem",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        paddingHorizontal:30,
        borderWidth:1,
        backgroundColor:INIDIGO,
    },
    topText:{
        color:"#fff",
    },
    logoutBtn:{
        borderWidth:1,
        borderColor:"#fff",
        padding:5,
        borderRadius:50,
    },
    // ----- 
    menuWrap:{
        display:"flex",
        flexDirection:"row",
        flexWrap:"wrap",
        paddingBottom:30,
        position: "relative",
    },
    btnWrap:{
        borderWidth:1,
        width:(VW-40)/4,
        height: TAb_MENU_HEIGHT + "rem",
        alignItems:"center",
        justifyContent:"center",
    }
  })