import {
  katalonStringifyChromeRecording
} from "@katalon/chrome-recorder";

export class RecorderPlugin {
  async stringify(recording) {
    return await katalonStringifyChromeRecording(JSON.stringify(recording));
  }
  async stringifyStep(step) {
    return JSON.stringify(step);
  }
}

/* eslint-disable no-undef */
chrome.devtools.recorder.registerRecorderExtensionPlugin(
  new RecorderPlugin(),
  /* name=*/
  'Katalon test',
  /* mediaType=*/
  'text/javascript'
);
