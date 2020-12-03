import { NativeModules, DeviceEventEmitter, Platform } from 'react-native';

const { RNImmersiveMode } = NativeModules;

const canUseThisModule = () => {
  if (!RNImmersiveMode || Platform.OS !== 'android') {
    return false;
  }
  return true;
};

const ImmersiveMode = {
  ...RNImmersiveMode, // for constants

  fullLayout(full) {
    if (!canUseThisModule()) {
      return;
    }
    RNImmersiveMode.fullLayout(full);
  },

  setBarMode(mode) {
    if (!canUseThisModule()) {
      return;
    }
    RNImmersiveMode.setBarMode(mode);
  },

  setBarStyle(style) {
    if (!canUseThisModule()) {
      return;
    }
    RNImmersiveMode.setBarStyle(style);
  },

  setBarTranslucent(enable) {
    if (!canUseThisModule()) {
      return;
    }
    RNImmersiveMode.setBarTranslucent(enable);
  },

  setBarColor(color) {
    if (!canUseThisModule()) {
      return;
    }
    if (typeof color === 'string') {
      if (color.length === 9) {
        // convert #rgba to #argb
        color = '#' + color.substr(7, 2) + color.substr(1, 6);
      } else if (color.length === 4) {
        color =
          '#' + color[1] + color[1] + color[2] + color[2] + color[3] + color[3];
      }
    }

    RNImmersiveMode.setBarColor(color);
  },

  addEventListener(callback) {
    if (!canUseThisModule()) {
      return;
    }
    if (typeof callback !== 'function') return;

    RNImmersiveMode.setOnSystemUiVisibilityChangeListener();

    const subscription = DeviceEventEmitter.addListener(
      RNImmersiveMode.OnSystemUiVisibilityChange,
      (e) => callback(e)
    );

    return subscription;
  },
};

export default ImmersiveMode;
