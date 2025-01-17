import React from 'react';

import { Grommet, Box, List, Text } from 'grommet';
import { grommet } from 'grommet/themes';

const locations = [
  'Boise',
  'Fort Collins',
  'Los Gatos',
  'Palo Alto',
  'San Francisco',
];

const data = [];
for (let i = 0; i < 40; i += 1) {
  data.push({
    entry: `entry-${i + 1}`,
    location: locations[i % locations.length],
  });
}

export const RenderedList = () => (
  <Grommet theme={grommet}>
    <Box align="center" pad="large">
      <List
        data={data.slice(0, 10)}
        primaryKey={(item) => (
          <Text key={item.entry} size="large" weight="bold">
            {item.entry}
          </Text>
        )}
        secondaryKey={(item) => (
          <Text key={item.location} size="small" color="dark-4">
            {item.location}
          </Text>
        )}
      />
    </Box>
  </Grommet>
);

RenderedList.storyName = 'Key render';

export default {
  title: 'Visualizations/List/Key render',
};
