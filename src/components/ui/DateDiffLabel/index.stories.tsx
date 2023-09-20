import { DateDiffLabel } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof DateDiffLabel> = {
  title: 'DateDiffLabel',
  component: DateDiffLabel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DateDiffLabel>;

export const Default: Story = {
  args: { date: new Date(), lang: 'ja' },
};

export const English: Story = {
  args: { date: new Date(), lang: 'en' },
};

export const SecAgo: Story = {
  args: { date: new Date(Date.now() - 1000), lang: 'ja' },
};

export const MinAgo: Story = {
  args: { date: new Date(Date.now() - 1000 * 60), lang: 'ja' },
};

export const HourAgo: Story = {
  args: { date: new Date(Date.now() - 1000 * 60 * 60), lang: 'ja' },
};

export const DayAgo: Story = {
  args: { date: new Date(Date.now() - 1000 * 60 * 60 * 24), lang: 'ja' },
};

export const WeekAgo: Story = {
  args: { date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7), lang: 'ja' },
};

export const MonthAgo: Story = {
  args: { date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 30), lang: 'ja' },
};

export const YearAgo: Story = {
  args: { date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 365), lang: 'ja' },
};

export const SecAgoEn: Story = {
  args: { date: new Date(Date.now() - 1000), lang: 'en' },
};

export const MinAgoEn: Story = {
  args: { date: new Date(Date.now() - 1000 * 60), lang: 'en' },
};

export const HourAgoEn: Story = {
  args: { date: new Date(Date.now() - 1000 * 60 * 60), lang: 'en' },
};

export const DayAgoEn: Story = {
  args: { date: new Date(Date.now() - 1000 * 60 * 60 * 24), lang: 'en' },
};

export const WeekAgoEn: Story = {
  args: { date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7), lang: 'en' },
};

export const MonthAgoEn: Story = {
  args: { date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 30), lang: 'en' },
};

export const YearAgoEn: Story = {
  args: { date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 365), lang: 'en' },
};

export const SecFuture: Story = {
  args: { date: new Date(Date.now() + 1001), lang: 'ja' },
};

export const MinFuture: Story = {
  args: { date: new Date(Date.now() + 1000 * 61), lang: 'ja' },
};

export const HourFuture: Story = {
  args: { date: new Date(Date.now() + 1000 * 60 * 61), lang: 'ja' },
};

export const DayFuture: Story = {
  args: { date: new Date(Date.now() + 1000 * 60 * 60 * 25), lang: 'ja' },
};

export const WeekFuture: Story = {
  args: { date: new Date(Date.now() + 1000 * 60 * 60 * 24 * 8), lang: 'ja' },
};

export const MonthFuture: Story = {
  args: { date: new Date(Date.now() + 1000 * 60 * 60 * 24 * 31), lang: 'ja' },
};

export const YearFuture: Story = {
  args: { date: new Date(Date.now() + 1000 * 60 * 60 * 24 * 366), lang: 'ja' },
};

export const SecFutureEn: Story = {
  args: { date: new Date(Date.now() + 1001), lang: 'en' },
};

export const MinFutureEn: Story = {
  args: { date: new Date(Date.now() + 1000 * 61), lang: 'en' },
};

export const HourFutureEn: Story = {
  args: { date: new Date(Date.now() + 1000 * 60 * 61), lang: 'en' },
};

export const DayFutureEn: Story = {
  args: { date: new Date(Date.now() + 1000 * 60 * 60 * 25), lang: 'en' },
};

export const WeekFutureEn: Story = {
  args: { date: new Date(Date.now() + 1000 * 60 * 60 * 24 * 8), lang: 'en' },
};

export const MonthFutureEn: Story = {
  args: { date: new Date(Date.now() + 1000 * 60 * 60 * 24 * 31), lang: 'en' },
};

export const YearFutureEn: Story = {
  args: { date: new Date(Date.now() + 1000 * 60 * 60 * 24 * 366), lang: 'en' },
};
