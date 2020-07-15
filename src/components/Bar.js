import React, { useEffect } from 'react';
import { ResponsiveBar } from '@nivo/bar';
import { data } from '../utils/bardata';
import styled from 'styled-components';

const Bar = () => {
  useEffect(() => {
    console.log(data);
  }, []);

  return (
    <Div>
      <ResponsiveBar
        data={data}
        indexBy={'date'}
        keys={['one', 'two', 'three', 'four', 'five']}
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.75}
        enableGridY={false}
        axisLeft={null}
        enableLabel={false}
        legends={[
          {
            dataForm: 'keys',
            anchor: 'top-right',
            direction: 'row',
            translateX: 120,
            translateY: -50,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 30,
            itemDirection: 'left-to-right',
            // itemOpacity: 0.85,
            symbolSize: 20,
            // effects: [
            //   {
            //     on: 'hover',
            //     style: {
            //       itemOpacity: 1,
            //     },
            //   },
            // ],
          },
        ]}
      />
    </Div>
  );
};

const Div = styled.div`
  height: 75%;
  width: 100%;
  padding-left: 15rem;
  padding-top: 10rem;
  padding-right: 5rem;
`;

export default Bar;
