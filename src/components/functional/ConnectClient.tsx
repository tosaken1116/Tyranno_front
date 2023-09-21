'use client';
import type { FC, ReactNode } from 'react';

import { TransportProvider } from '@bufbuild/connect-query';
import { createConnectTransport } from '@bufbuild/connect-web';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import type { Interceptor } from '@bufbuild/connect';
type Props = {
  baseUrl: string;
  token?: string;
  children: ReactNode;
};
export const authInterceptor: Interceptor = (next) => async (req) => {
  const accessToken = localStorage.getItem('accessToken');
  if (accessToken != null) {
    req.header.set('Origin', 'tyranno-front.vercel.app');
  }
  return await next(req);
};
export const ConnectClient: FC<Props> = ({ baseUrl, children }) => {
  const transport = createConnectTransport({
    baseUrl,
    interceptors: [authInterceptor],
  });
  const client: QueryClient = new QueryClient();
  return (
    <TransportProvider transport={transport}>
      <QueryClientProvider client={client}>{children}</QueryClientProvider>
    </TransportProvider>
  );
};
