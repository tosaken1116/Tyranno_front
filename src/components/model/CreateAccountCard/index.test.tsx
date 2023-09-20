import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';
import { CreateAccountCard } from '.';

import { ConnectClient } from '@/components/functional/ConnectClient';
import { envGuard } from '@/libs/envGuard';
jest.mock('next/navigation', () => ({
  useRouter(): { asPath: string } {
    return {
      asPath: '/',
    };
  },
}));
describe('model/CreateAccountCardのテスト', () => {
  it('title is exist', () => {
    render(
      <ConnectClient
        baseUrl={envGuard(
          process.env['NEXT_PUBLIC_BACKEND_URL'],
          'NEXT_PUBLIC_BACKEND_URL'
        )}
      >
        <CreateAccountCard />
      </ConnectClient>
    );

    const title = screen.getByText(/Googleアカウントでログイン/);

    expect(title).toBeInTheDocument();
  });
});
