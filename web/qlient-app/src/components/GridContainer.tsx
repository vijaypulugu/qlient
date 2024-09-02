import React from 'react';
import { Stack, IStackTokens, IStackStyles, ITextStyles, Label } from '@fluentui/react';

const stackTokens: IStackTokens = { childrenGap: 10 };
const rowStackStyles: IStackStyles = { root: { marginBottom: 10 } };
const boxStyles: React.CSSProperties = {
  background: 'linear-gradient(135deg, #dfe9f3, #ded5e6)',
  color: 'black',
  padding: '40px',
  textAlign: 'center',
  borderRadius: '4px',
  width: '360px',
  height: '100px',
};

const Box: React.FC<{ metricLabel: string, metricValue: string }> = ({ metricLabel,metricValue }) => (
  <div style={boxStyles}>
    <Label>{metricLabel}</Label>
    <Label>{metricValue}</Label>
    </div>
);

const GridContainer: React.FC = () => {
  const rows = Array.from({ length: 4 }, (_, rowIndex) => (
    <Stack
      horizontal
      tokens={stackTokens}
      styles={rowStackStyles}
      key={rowIndex}
    >
      {Array.from({ length: 4 + (rowIndex % 2) }, (_, boxIndex) => (
        <Box key={boxIndex} metricLabel={`Metric ${rowIndex * 5 + boxIndex + 1}`} metricValue={` ${rowIndex * 5 + boxIndex + 1}`} />
      ))}
    </Stack>
  ));

  return (
    <Stack tokens={{ childrenGap: 10 }}>
      {rows}
    </Stack>
  );
};

export default GridContainer;
