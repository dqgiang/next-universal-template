import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Card, CardProps } from '@components/card';

export default {
  title: 'Elements/Card',
  component: Card,
  decorators: [
    (Card) => (
      <div style={{ display: 'flex', maxWidth: '800px' }}>
        <Card />
      </div>
    ),
  ],
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  url: '#',
  title: 'Card title 1',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
};

export const TwoLines = Template.bind({});
TwoLines.args = {
  url: '#',
  title: 'Card title Lorem ipsum dolor sit amet',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
};
