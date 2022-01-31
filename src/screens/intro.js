import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Intro = (props) => {
    
    const navigation = useNavigation();

    return(
        <SafeAreaView>
            <View>
                <Text>Intro</Text>
                <TouchableOpacity onPress={() => navigation.navigate("Tab")}>
                    <Text>
                        Move Tab
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
};

export default Intro;