import {NativeModules} from 'react-native';

var RNExitApp = {
  exitApp: function() {
        NativeModules.RNExitApp.exitApp();
  },
  exitRestartApp: function() {
      NativeModules.RNExitApp.exitRestartApp();
  },
};

export default RNExitApp;
