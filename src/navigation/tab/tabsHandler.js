import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity, View } from 'react-native';
import { getFocusedRouteNameFromRoute, useNavigation, useRoute } from '@react-navigation/native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { TAB_HEIGHT, VW } from '../../constant/size';
import { INIDIGO } from '../../constant/color';


function TabsHandler({ tabs, isMoreTab, setIsMoreTab }) {
  const route = useRoute();
  const navigator = useNavigation();

  const onPressTab = (name) => {
    navigator.navigate("Tab", {screen:name})
  }
  
  const changeColor = (name) => {
    const currentScreen = getFocusedRouteNameFromRoute(route);
    if(name === currentScreen){
      return "red"
    }
    return "#454545"
  }

  const onPressMoreBtn = () => {
    setIsMoreTab(isMoreTab => !isMoreTab)
  }


  return(
    <View style={styles.container}>
      {
        tabs.map((item, index) => {
          // 가운데
          if(index===2){
            return(
              <View style={styles.tabEl} key={index}>
                <TouchableOpacity style={styles.plusBtn} onPress={onPressMoreBtn}>
                  <Text style={{color:"#fff"}}>
                    {
                      isMoreTab?"-":"+"
                    }
                  </Text>
                </TouchableOpacity>
              </View>
            )
          }
          return(
            <TouchableOpacity style={styles.tabEl} key={index} onPress={() => onPressTab(item.name)}>
              <Text
                style={{color:changeColor(item.name)}}
              >{item.name}</Text>
            </TouchableOpacity>
          )
        })
      }
    </View>
  )
}
export default TabsHandler;

EStyleSheet.build({
  $rem: VW / 380
});

const styles = EStyleSheet.create({
  container:{
    position:"absolute",
    flexDirection:"row",
    justifyContent:"space-between",
    height: Number(TAB_HEIGHT),
  },
  tabEl:{
    display:'flex',
    alignItems:"center",
    justifyContent:"center",
    width:"20%",
    height:"100%",
  },
  plusBtn:{
    backgroundColor:INIDIGO,
    width:55,
    height:55,
    position: "absolute",
    top:-20,
    borderRadius:30,
    alignItems:"center",
    justifyContent:"center",
  }
})