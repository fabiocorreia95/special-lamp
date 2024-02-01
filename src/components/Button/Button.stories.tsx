import React from 'react';
import {StoryFn, StoryObj} from '@storybook/react';
import Button from './Button';

// You can learn about this: https://storybook.js.org/docs/react/writing-stories/introduction

export default {
    title: 'Button',
    component: Button,
} as StoryObj<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({});
Primary.args = {
    label: "Primary"
}

export const Secondary = Template.bind({})
Secondary.args = {
    label: "Secondary"
}