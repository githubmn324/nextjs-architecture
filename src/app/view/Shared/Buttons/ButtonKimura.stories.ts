// import Button from './ButtonKimura';
// import  { StoryObj } from '@storybook/react';

// export default {
//   title: 'Example/ButtonKimura',
//   component: Button,
// };

import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './ButtonKimura';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
  title: 'Example/ButtonKimura',
  component: Button,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    label: 'Hello',
    // primary: true,
    // label: 'Button',
    onClick: action('aaaa'),
  },
};
