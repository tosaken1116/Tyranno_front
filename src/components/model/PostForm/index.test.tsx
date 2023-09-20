import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';
import { PostForm } from '.';

import { ConnectClient } from '@/components/functional/ConnectClient';

describe('model/PostFormのテスト', () => {
  it('title is exist', () => {
    render(
      <ConnectClient baseUrl={process.env['NEXT_PUBLIC_BACKEND_URL']!}>
        <PostForm userIcon="https://avatars.githubusercontent.com/u/65708479?v=4" />
      </ConnectClient>
    );

    const title = screen.getByText('投稿');

    expect(title).toBeInTheDocument();
  });
});
