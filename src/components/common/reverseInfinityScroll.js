import React, { useRef, useState } from 'react';
import { ScrollView, View } from 'react-native';

const R_InfinityScroll = ({children, onScrollEnd}) => {
    const chatScrollRef = useRef();
    const chatContentRef = useRef();
    const [totalChatHeight, setTotalChatHeight] = useState(0);

    const onScrollChat = async e => {
        if(e.nativeEvent.contentOffset.y == 0){
            setTotalChatHeight(e.nativeEvent.contentSize.height);
            onScrollEnd();
        }
    }

    const onChangeChatSize = (e) => {
        // scrollView의 height는 콘텐츠의 양과 관계 없이 일정하기 때문에
        // View로 감싼 후 높이를 가져온다.
        chatContentRef.current.measure((x, y, width, height) => {
            chatScrollRef.current.scrollTo({x:0, y:height - totalChatHeight, animated: false});
        })
    }

    return(
        <ScrollView
            onScroll={onScrollChat}
            ref={chatScrollRef}
            onContentSizeChange={onChangeChatSize}
        >
            <View ref={chatContentRef}>
                {children}
            </View>
        </ScrollView>
    )
};

export default R_InfinityScroll;