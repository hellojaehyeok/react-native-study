import React from 'react';
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { TAB_HEIGHT, VW } from '../../constant/size';
import MoreTabsHandler from './moreTabsHandler';
import MoreTabsShape from './moreTabsShape';

const MoreTabs = ({tabWidth}) => {
    
    const menuArr = [
        "menu1",
        "menu2",
        "menu3",
        "menu4",
        "menu5",
        "menu6",
        "menu7",
        "menu8",
        "menu9",
        "menu10",
        "menu11",
        "menu12",
    ]

    return(
        <View style={styles.container}>
            <MoreTabsShape menuArr={menuArr} tabWidth={tabWidth}/>
            <MoreTabsHandler menuArr={menuArr}/>
        </View>
    )
};

export default MoreTabs;

EStyleSheet.build({
    $rem: VW / 380
});
  
const styles = EStyleSheet.create({
    container:{
        position:"absolute",
        bottom: Number(TAB_HEIGHT) + 5,
        zIndex:9999,
        width: VW,
    },
})