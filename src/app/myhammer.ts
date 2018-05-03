import {Injectable} from '@angular/core';
import 'hammerjs';
import {HammerInstance} from '@angular/platform-browser/src/dom/events/hammer_gestures';

@Injectable()
export class HammerGestureConfig {
  events: string[] = [];

  overrides: {[key: string]: Object} = {};

  buildHammer(element: HTMLElement): HammerInstance {
    const retval =  new Hammer(element, {
      cssProps: Hammer.defaults.cssProps,
      recognizers: [
        [Hammer.Swipe],
        [Hammer.Tap],
      ],
    });
    retval.set({touchAction: 'pan-y'});
    return retval;
  }
}
