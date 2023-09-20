import { envGuard } from '@/libs/envGuard';

export const FIREBASE_CONFIG = {
  apiKey: envGuard(
    process.env['NEXT_PUBLIC_FIREBASE_API_KEY'],
    'NEXT_PUBLIC_FIREBASE_API_KEY'
  ),
  authDomain: envGuard(
    process.env['NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN'],
    'NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN'
  ),
  projectId: envGuard(
    process.env['NEXT_PUBLIC_FIREBASE_PROJECT_ID'],
    'NEXT_PUBLIC_FIREBASE_PROJECT_ID'
  ),
  storageBucket: envGuard(
    process.env['NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET'],
    'NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET'
  ),
  messagingSenderId: envGuard(
    process.env['NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID'],
    'NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID'
  ),
  appId: envGuard(
    process.env['NEXT_PUBLIC_FIREBASE_APP_ID'],
    'NEXT_PUBLIC_FIREBASE_APP_ID'
  ),
} as const;
