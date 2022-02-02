import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { TestComponent } from './test.component';

export default {
  title: 'TestComponent',
  component: TestComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<TestComponent>;

const Template: Story<TestComponent> = (args: TestComponent) => ({
  component: TestComponent,
  props: args,
});


const argTypes = {
  label: {
    name: 'label',
    type: { name: 'string', required: false },
    defaultValue: 'Hello',
    description: 'overwritten description',
    table: {
      type: { 
        summary: 'something short', 
        detail: 'something really really long' 
      },
      defaultValue: { summary: 'Hello' },
    },
    control: {
      type: null
    }
  }
}

export const Primary = Template.bind({});
Primary.args = {
  label:'Hello',
  color:'#ff0'
}
argTypes.label.description='test desc'