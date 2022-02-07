
import React, { memo, useMemo, useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import TabsShape from './tabsShape';
import TabsHandler from './tabsHandler';
import MoreTabs from './moreTabs';

const { width: wWidth } = Dimensions.get('window');

function TabsUI({ tabs }) {
    const tabWidth = useMemo(() => wWidth / tabs.length, [tabs.length]);
    const [isMoreTab, setIsMoreTab] = useState(false);

    return (
        <View
            style={{
                position:"absolute",
                zIndex:9999,
                bottom: 0,
                left: 0,
            }}
        >   
            {
                isMoreTab && 
                <MoreTabs tabWidth={tabWidth}/>
            }

            <TabsShape tabWidth={tabWidth}/>
            <TabsHandler tabs={tabs} isMoreTab={isMoreTab} setIsMoreTab={setIsMoreTab}/>
        </View>
    );
}

export default memo(TabsUI);