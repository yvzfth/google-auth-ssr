import firebaseClient from 'firebase/compat/app';
import 'firebase/compat/auth';

if (typeof window !== 'undefined' && !firebaseClient.apps.length) {
  firebaseClient.initializeApp({
    apiKey: 'AIzaSyAZFngCbrx7gGN3I_hGz_hgN_rZqRQRLQQ',
    authDomain: 'fir-auth-ssr.firebaseapp.com',
    projectId: 'fir-auth-ssr',
    storageBucket: 'fir-auth-ssr.appspot.com',
    messagingSenderId: '809542314988',
    appId: '1:809542314988:web:54de1bb3ab0e9a23deaec9',
  });
  firebaseClient
    .auth()
    .setPersistence(firebaseClient.auth.Auth.Persistence.SESSION);
}

export default firebaseClient;
