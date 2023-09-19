import { useState } from 'react';

import TelNumInput from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof TelNumInput> = {
  title: 'TelNumInput',
  component: TelNumInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TelNumInput>;

export const Default: Story = {
  args: {},
  render: function Comp() {
    const [phoneValue, setPhoneValue] = useState({
      phoneNumber: '',
      countryCode: '',
    });
    return <TelNumInput value={phoneValue} setState={setPhoneValue} />;
  },
};
