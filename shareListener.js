import { NativeModules, NativeEventEmitter } from "react-native";

const { CBShareInApp } = NativeModules;

const EventEmitter = new NativeEventEmitter(CBShareInApp);

const NEW_SHARE_EVENT_NAME = "NewShareEvent";

export default {
  addNewShareListener(callback) {
    const subscription = EventEmitter.addListener(
      NEW_SHARE_EVENT_NAME,
      callback
    );

    return subscription;
  },
};