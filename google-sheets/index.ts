/**
 * This is a template for new plugin wrappers
 *
 * TODO:
 * - Add/Change information below
 * - Document usage (importing, executing main functionality)
 * - Remove any imports that you are not using
 * - Add this file to /src/index.ts (follow style of other plugins)
 * - Remove all the comments included in this template, EXCEPT the @Plugin wrapper docs and any other docs you added
 * - Remove this note
 *
 */
import { Injectable } from '@angular/core';
import { Plugin, Cordova, CordovaProperty, CordovaInstance, InstanceProperty, IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs/Observable';

/**
 * @name GoogleSheets
 * @description
 * This plugin allows you to perform requests to the GoogleSheets API v4
 * using the native client built for android.
 *
 * @usage
 * ```typescript
 * import { GoogleSheets } from '@ionic-native/google-sheets';
 *
 *
 * constructor(private googleSheets: GoogleSheets) { }
 *
 * ...
 *
 *
 * this.googleSheets.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'GoogleSheets',
  plugin: 'cordova-plugin-google-sheets', // npm package name, example: cordova-plugin-camera
  pluginRef: 'cordova.plugins.GoogleSheets', // the variable reference to call the plugin, example: navigator.geolocation
  repo: '', // the github repository URL for the plugin
  platforms: ['Android'], // Array of platforms supported, example: ['Android', 'iOS']
  install: '', // OPTIONAL install command, in case the plugin requires variables
})
@Injectable()
export class GoogleSheets extends IonicNativePlugin {

  /**
   * This function does something
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova()
  public signIn(): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  public getSpreadsheet(spreadsheetId: String, spreadsheetRange: String): Promise<any> {
    return;
  }

  @Cordova()
  public signOut() {
    return;
  }

  @Cordova()
  public updateSpreadsheetValues(spreadsheetId: String, spreadsheetRange: String, updateValues: String) {
    return;
  }

}
