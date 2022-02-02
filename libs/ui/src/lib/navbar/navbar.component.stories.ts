import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { NavbarComponent } from './navbar.component';

export default {
  title: 'NavbarComponent',
  component: NavbarComponent,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
  argTypes:{
    description:{}
  },
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<NavbarComponent>;

const Template: Story<NavbarComponent> = (args: NavbarComponent) => ({
  component: NavbarComponent,
  props: args,
});

export const primary=Template.bind({});

export const secondary=Template.bind({});

primary.args={
  label:'click me',
  disabled:false,
  backgroundColor: '#ff00ff',
  tableColor:'#ff00ff',
  navColor:'#ff00ff',
  description:'test desc'
}

secondary.args={
  label:'im secondary',
  disabled:true,
  backgroundColor:'#ff54ss',
  tableColor:'#ff00ff',
  navColor:'#ff00ff',
  description:'test desc'

}

primary.storyName='Navbar';

