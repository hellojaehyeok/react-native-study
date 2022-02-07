import React, { memo, useMemo } from 'react';


// --------------------------------------------------------
import { Svg, Path } from 'react-native-svg';
import { line, curveBasis } from 'd3-shape';
import { TAb_MENU_HEIGHT, VW } from '../../constant/size';
import { View } from 'react-native';



function MoreTabsShape({ menuArr, tabWidth }) {
    
    const svgHeight = (menuArr.length / 4) * TAb_MENU_HEIGHT + 100;
    
    const lineGenerator = line()
    .x(({ x }) => x)
    .y(({ y }) => y);

    const d = useMemo(() => {
        const left = lineGenerator([
            { x: 0, y: 0 },
            { x: VW, y: 0 },
            { x: VW, y: svgHeight},
            { x: tabWidth * 3, y: svgHeight},
        ]);

        const right = lineGenerator([
            { x: tabWidth * 2 , y: svgHeight },
            { x: 0, y: svgHeight },
            { x: 0, y: 0 },
        ]);

        const center = lineGenerator.curve(curveBasis)([
            { x: tabWidth * 3, y: svgHeight },
            { x: tabWidth * 3 - 10, y: svgHeight },
            { x: tabWidth * 3 - 15, y: svgHeight - 20 },
            { x: tabWidth * 2 + 15, y: svgHeight - 20 },
            { x: tabWidth * 2 + 10, y: svgHeight },
            { x: tabWidth * 2 , y: svgHeight },
        ]);

        return `${left} ${center.replace("M", "")} ${right.replace("M", "")}`;
    }, [tabWidth, menuArr]);

    return (
        <View style={{
            position: "absolute",
            bottom: 0,
        }}>
            <Svg width={VW} height={svgHeight}>
                <Path fill="#fff" {...{d}} />
            </Svg>
        </View>
    );
}

export default memo(MoreTabsShape);