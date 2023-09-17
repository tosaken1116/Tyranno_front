import { Stack } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Stack> = {
  title: 'Stack',
  component: Stack,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  render: (args) => (
    <div className="h-full w-full">
      <Stack {...args} className="h-[256px] w-[256px]">
        {args.children}
      </Stack>
    </div>
  ),
};

export default meta;
type Story = StoryObj<typeof Stack>;

export const Default: Story = {
  args: {
    children: (
      <>
        <div className="bg-blue-800 p-4">item1</div>
        <div className="bg-blue-800 p-4">item2</div>
        <div className="bg-blue-800 p-4">item3</div>
      </>
    ),
  },
};

export const Column: Story = {
  args: {
    direction: 'column',
    children: (
      <>
        <div className="bg-blue-800 p-4">item1</div>
        <div className="bg-blue-800 p-4">item2</div>
        <div className="bg-blue-800 p-4">item3</div>
      </>
    ),
  },
};

export const Row: Story = {
  args: {
    direction: 'row',
    children: (
      <>
        <div className="bg-blue-800 p-4">item1</div>
        <div className="bg-blue-800 p-4">item2</div>
        <div className="bg-blue-800 p-4">item3</div>
      </>
    ),
  },
};

export const ItemsFlexStart: Story = {
  args: {
    alignItems: 'flexStart',
    children: (
      <>
        <div className="bg-blue-800 p-4">item1</div>
        <div className="bg-blue-800 p-4">item2</div>
        <div className="bg-blue-800 p-4">item3</div>
      </>
    ),
  },
};

export const ItemsCenter: Story = {
  args: {
    alignItems: 'center',
    children: (
      <>
        <div className="bg-blue-800 p-4">item1</div>
        <div className="bg-blue-800 p-4">item2</div>
        <div className="bg-blue-800 p-4">item3</div>
      </>
    ),
  },
};

export const ItemsFlexEnd: Story = {
  args: {
    alignItems: 'flexEnd',
    children: (
      <>
        <div className="bg-blue-800 p-4">item1</div>
        <div className="bg-blue-800 p-4">item2</div>
        <div className="bg-blue-800 p-4">item3</div>
      </>
    ),
  },
};

export const ItemStretch: Story = {
  args: {
    alignItems: 'stretch',
    children: (
      <>
        <div className="bg-blue-800 p-4">item1</div>
        <div className="bg-blue-800 p-4">item2</div>
        <div className="bg-blue-800 p-4">item3</div>
      </>
    ),
  },
};

export const ItemBaseline: Story = {
  args: {
    alignItems: 'baseline',
    children: (
      <>
        <div className="bg-blue-800 p-4">item1</div>
        <div className="bg-blue-800 p-4">item2</div>
        <div className="bg-blue-800 p-4">item3</div>
      </>
    ),
  },
};

export const ContentFlexStart: Story = {
  args: {
    justifyContent: 'flexStart',
    children: (
      <>
        <div className="bg-blue-800 p-4">item1</div>
        <div className="bg-blue-800 p-4">item2</div>
        <div className="bg-blue-800 p-4">item3</div>
      </>
    ),
  },
};

export const ContentCenter: Story = {
  args: {
    justifyContent: 'center',
    children: (
      <>
        <div className="bg-blue-800 p-4">item1</div>
        <div className="bg-blue-800 p-4">item2</div>
        <div className="bg-blue-800 p-4">item3</div>
      </>
    ),
  },
};

export const ContentFlexEnd: Story = {
  args: {
    justifyContent: 'flexEnd',
    children: (
      <>
        <div className="bg-blue-800 p-4">item1</div>
        <div className="bg-blue-800 p-4">item2</div>
        <div className="bg-blue-800 p-4">item3</div>
      </>
    ),
  },
};

export const ContentSpaceBetween: Story = {
  args: {
    justifyContent: 'spaceBetween',
    children: (
      <>
        <div className="bg-blue-800 p-4">item1</div>
        <div className="bg-blue-800 p-4">item2</div>
        <div className="bg-blue-800 p-4">item3</div>
      </>
    ),
  },
};

export const ContentSpaceAround: Story = {
  args: {
    justifyContent: 'spaceAround',
    children: (
      <>
        <div className="bg-blue-800 p-4">item1</div>
        <div className="bg-blue-800 p-4">item2</div>
        <div className="bg-blue-800 p-4">item3</div>
      </>
    ),
  },
};

export const ContentSpaceEvenly: Story = {
  args: {
    justifyContent: 'spaceEvenly',
    children: (
      <>
        <div className="bg-blue-800 p-4">item1</div>
        <div className="bg-blue-800 p-4">item2</div>
        <div className="bg-blue-800 p-4">item3</div>
      </>
    ),
  },
};
