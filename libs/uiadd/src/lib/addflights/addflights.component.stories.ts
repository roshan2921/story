import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { AddflightsComponent } from './addflights.component';

export default {
  title: 'AddflightsComponent',
  component: AddflightsComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<AddflightsComponent>;

const Template: Story<AddflightsComponent> = (args: AddflightsComponent) => ({
  component: AddflightsComponent,
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}