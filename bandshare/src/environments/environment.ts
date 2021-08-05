// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  API_URL: 'https://parseapi.back4app.com/classes',
  headers: {
    ['X-Parse-Application-Id']: 'gYx45QnkJrrBrchiTSmxjouXD0lll9ccmQgxuWbW',
    ['X-Parse-REST-API-Key']: '74RcLbRsOW4oLAseXpPZ9QsDDTQdlsTZqlfp4A2e',
    ['Content-Type']: 'application/json'
  },
  authHeaders: {
    ['X-Parse-Application-Id']: 'gYx45QnkJrrBrchiTSmxjouXD0lll9ccmQgxuWbW',
    ['X-Parse-REST-API-Key']: '74RcLbRsOW4oLAseXpPZ9QsDDTQdlsTZqlfp4A2e',
    ['Content-Type']: 'application/json',
    ['X-Parse-Revocable-Session']: '1'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
