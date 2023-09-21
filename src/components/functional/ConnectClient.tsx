'use client';
import type { FC, ReactNode } from 'react';

import { TransportProvider } from '@bufbuild/connect-query';
import { createConnectTransport } from '@bufbuild/connect-web';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

type Props = {
  baseUrl: string;
  token?: string;
  children: ReactNode;
};
export const ConnectClient: FC<Props> = ({ baseUrl, children }) => {
  const transport = createConnectTransport({
    baseUrl,
  });
  const client: QueryClient = new QueryClient();
  return (
    <TransportProvider transport={transport}>
      <QueryClientProvider client={client}>{children}</QueryClientProvider>
    </TransportProvider>
  );
};
