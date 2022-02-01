import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View, Text, Dimensions, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Chat = ({userName}) => {
    const navigation = useNavigation();

    return(
        <SafeAreaView>
            <Text>Chat</Text>
        </SafeAreaView>
    )
};

export default Chat;