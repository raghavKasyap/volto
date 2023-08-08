import { injectIntl } from 'react-intl';
import React from 'react';
import VideoComponent from './Edit';
import { RealStoreWrapper as Wrapper } from '@plone/volto/storybook';

const IntlVideoComponent = injectIntl(VideoComponent);

function StoryComponent(args) {
  return (
    <Wrapper
      customStore={{
        intl: {
          locale: 'en',
          messages: {},
        },
      }}
    >
      <div id="toolbar" style={{ display: 'none' }} />
      <IntlVideoComponent
        {...args}
        data={{
          url: 'https://www.youtube.com/watch?v=ayjNbKju-8s',
          '@type': 'video',
        }}
        selected={false}
        block="1234"
        onChangeBlock={() => {}}
        onSelectBlock={() => {}}
        onDeleteBlock={() => {}}
        onFocusPreviousBlock={() => {}}
        onFocusNextBlock={() => {}}
        handleKeyDown={() => {}}
        index={1}
      />
    </Wrapper>
  );
}

export const Video = StoryComponent.bind({});

export default {
  title: 'Public components/Video',
  component: Video,
  decorators: [
    (Story) => (
      <div className="ui segment form attached" style={{ width: '400px' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {},
};
