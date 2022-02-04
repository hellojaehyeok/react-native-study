import React, { useMemo } from 'react';


// --------------------------------------------------------
import { Svg, Path } from 'react-native-svg';
import { line, curveBasis } from 'd3-shape';
import { TAB_HEIGHT, VW } from '../../constant/size';
import { View } from 'react-native';

const lineGenerator = line()
  .x(({ x }) => x)
  .y(({ y }) => y);

function TabsShape({ tabWidth }) {
  const d = useMemo(() => {
    const left = lineGenerator([
      { x: 0, y: 0 },
      { x: tabWidth * 2, y: 0 },
    ]);
    const right = lineGenerator([
      { x: tabWidth * 3, y: 0 },
      { x: VW, y: 0 },
      { x: VW, y: TAB_HEIGHT },
      { x: 0, y: TAB_HEIGHT },
      { x: 0, y: 0 },
    ]);
    const center = lineGenerator.curve(curveBasis)([
      { x: tabWidth * 1.9, y: 0 },
      { x: tabWidth * 2 + 5, y: 0 },
      { x: tabWidth * 1.9 + 15, y: TAB_HEIGHT * 0.45 },
      { x: tabWidth * 3.1 - 15, y: TAB_HEIGHT * 0.45 },
      { x: tabWidth * 3 - 5, y: 0 },
      { x: tabWidth * 3.1, y: 0 },
    ]);
    
    return `${left} ${center} ${right}`;
  }, [tabWidth]);

  return (
    <Svg width={VW} height={Number(TAB_HEIGHT)}>
      <Path fill="#fff" {...{d}} />
    </Svg>
  );
}

export default TabsShape;