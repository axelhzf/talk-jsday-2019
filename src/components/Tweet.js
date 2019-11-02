import React from 'react';
import { TwitterTweetEmbed } from 'react-twitter-embed';

export function Tweet({ id }) {
  return (
    <div
      css={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <TwitterTweetEmbed tweetId={id} />
    </div>
  );
}
