import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';
import { PostCards } from '.';

describe('model/PostCardsのテスト', () => {
  it('title is exist', () => {
    render(
      <PostCards
        openPostDetail={(): void => {
          console.log('click post card');
        }}
        clickFavoriteButton={(): void => {
          console.log('clickFavoriteButton');
        }}
        clickReplyButton={(): void => {
          console.log('clickReplyButton');
        }}
        clickRepostButton={(): void => {
          console.log('clickRepostButton');
        }}
        clickShareButton={(): void => {
          console.log('clickShareButton');
        }}
      />
    );

    const title = screen.getByText(/this is PostCards component/);

    expect(title).toBeInTheDocument();
  });
});
