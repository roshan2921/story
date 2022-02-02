// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { ButtonComponent } from './button.component';
import { action } from '@storybook/addon-actions';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: ButtonComponent,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  props: args, 
  
});

// export const Primary: Story = () => ({
//   props: {
//     label: 'Button',
//     primary: true,
//   },

export const Primary: Story = () => ({
  props: {
    label: 'submit',
    backgroundColor: '#ff0',
    onClick: action('clicked'),
  },
});

export const Secondary: Story = () => ({
  props: {
    label: '😄👍😍💯',
    backgroundColor: '#FF00FF',
  },
});

export const Tertiary: Story = () => ({
  props: {
    label: '📚📕📈🤓',
    backgroundColor: '#ff0',
  },
});

Primary.storyName='i am the primary';
