import React, { useState } from 'react';
import { FlatList } from 'react-native';

const InfinityScroll = ({style, data, renderItem, onScrollEnd, endPoint}) => {
    
    const [isUpdateList, setIsUpdateList] = useState(true);

    const onScrollList = async (e) => {
        if(!isUpdateList){return}
        let updateScroll = e.nativeEvent.contentOffset.y;
        if(updateScroll == 0){return}
        let screenHeight = e.nativeEvent.layoutMeasurement.height;
        let documentHeight = e.nativeEvent.contentSize.height;

        let _endPoint = endPoint??0;
        
        if (screenHeight + updateScroll + _endPoint >= documentHeight) {
            if(!isUpdateList){return};
            setIsUpdateList(false);
            
            return new Promise((resolve, reject) => {
                resolve( onScrollEnd() )
            }).then(() => {
                setIsUpdateList(true);
            });
        }
    };

    return (
        <FlatList 
            onScroll={onScrollList}
            style={style}
            data={data}
            renderItem={renderItem}
            keyExtractor={(i,index)=>index}
        />
    )
};

export default InfinityScroll;