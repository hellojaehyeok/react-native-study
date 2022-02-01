import { useFocusEffect,  } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import { Text,} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { INIDIGO, VW } from '../../constant/color';

const getCurrentTime = () => {
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";
    
    if(hh == 0){hh = 12;}
    if(hh > 12){
        hh = hh - 12;
        session = "PM";
    }
    
    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;
    return hh + ":" + mm + ":" + ss + " " + session
}

const Timer = (props) => {
    const [timer, setTimer] = useState(getCurrentTime());

    useFocusEffect(
        useCallback(() => {
            const startTimer = setInterval(()=>{
                setTimer(getCurrentTime())
            }, 1000);
            return () =>{
                clearInterval(startTimer)
            };
        },[])
    );

    return(
        <Text style={styles.timeText}>{timer}</Text>
    )
};

export default Timer;

EStyleSheet.build({
    $rem: VW / 380
});

const styles = EStyleSheet.create({
    timeText:{
        fontSize:20,
        color:INIDIGO,
    }
})
