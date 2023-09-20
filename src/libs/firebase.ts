import { getApp, getApps, initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';

import { FIREBASE_CONFIG } from '@/constants/firebase';

const app = getApps().length > 0 ? getApp() : initializeApp(FIREBASE_CONFIG);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
