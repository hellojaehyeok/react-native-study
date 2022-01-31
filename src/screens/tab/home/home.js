import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Dimensions, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = (props) => {

    const navigation = useNavigation();


    return(
        <SafeAreaView>
            <Text>Home</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Intro")}>
                <Text>
                    Go Test
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
};

export default Home;