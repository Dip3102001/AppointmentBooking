import React from 'react';
import { MantineProvider } from '@mantine/core';
import { Calendar } from '@mantine/dates';

import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';

function Demo() {
  return (
    <MantineProvider>
        <Calendar />
    </MantineProvider>
  );
}

export default Demo;