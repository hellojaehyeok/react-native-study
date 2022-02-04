
import React, { useMemo } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { useSafeArea } from 'react-native-safe-area-context';
import TabsShape from './tabsShape';
import TabsHandler from './tabsHandler';

const { width: wWidth } = Dimensions.get('window');

function TabsUI({ tabs }) {
    const tabWidth = useMemo(() => wWidth / tabs.length, [tabs.length]);
    
    return (
        <View
            style={{
                position:"absolute",
                zIndex:9999,
                bottom: 0,
                left: 0,
            }}
        >   
            {/* <MoreTap /> */}
            <TabsShape tabWidth={tabWidth}/>
            <TabsHandler tabs={tabs} tabWidth={tabWidth} />
        </View>
    );
}

export default TabsUI;