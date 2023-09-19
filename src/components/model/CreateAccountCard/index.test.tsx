import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';
import { CreateAccountCard } from '.';

describe('model/CreateAccountCardのテスト', () => {
  it('title is exist', () => {
    render(<CreateAccountCard />);

    const title = screen.getByText(/Googleアカウントでログイン/);

    expect(title).toBeInTheDocument();
  });
});
