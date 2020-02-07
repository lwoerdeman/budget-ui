// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const firebaseConfig = {
  apiKey: "AIzaSyDWVOzWn3Gh66Y0BQHAQOn2FT06iZbRW4M",
  authDomain: "budget-bb5a0.firebaseapp.com",
  databaseURL: "https://budget-bb5a0.firebaseio.com",
  projectId: "budget-bb5a0",
  storageBucket: "budget-bb5a0.appspot.com",
  messagingSenderId: "884655347316",
  appId: "1:884655347316:web:e5df2d849c29f093"
};

export const environment = {
  production: false,
  firebase: firebaseConfig
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
