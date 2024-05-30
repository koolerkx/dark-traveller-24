import React, { createContext, useContext } from "react";
import { FirebaseApp, initializeApp } from "firebase/app";
import { Analytics, getAnalytics } from "firebase/analytics";

interface FirebaseContext {
  app: FirebaseApp;
  analytics: Analytics;
}

const FirebaseContext = createContext<FirebaseContext | null>(null);

export const FirebaseProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
  };

  // TODO: Extract to env
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  return (
    <FirebaseContext.Provider value={{ app, analytics }}>
      {children}
    </FirebaseContext.Provider>
  );
};
