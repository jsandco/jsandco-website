/* eslint-disable */
import { Meteor } from 'meteor/meteor';

// first add raf shim
// http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
if (Meteor.isClient) {
  window.requestAnimFrame = (function () {
    return window.requestAnimationFrame
            || window.webkitRequestAnimationFrame
            || window.mozRequestAnimationFrame
            || function (callback) {
              window.setTimeout(callback, 1000 / 60);
            };
  }());
}

export const scrollToTop = (scrollDuration) => {
  const cosParameter = window.scrollY / 2;
  let scrollCount = 0;
  let oldTimestamp = performance.now();
  function step(newTimestamp) {
    scrollCount += Math.PI / (scrollDuration / (newTimestamp - oldTimestamp));
    if (scrollCount >= Math.PI) window.scrollTo(0, 0);
    if (window.scrollY === 0) return;
    window.scrollTo(0, Math.round(cosParameter + cosParameter * Math.cos(scrollCount)));
    oldTimestamp = newTimestamp;
    window.requestAnimationFrame(step);
  }
  window.requestAnimationFrame(step);
};

// main function
export const scrollToY = (target, position) => {
  // scrollTargetY: the target scrollY property of the window
  // speed: time in pixels per second
  // easing: easing equation to use
  const elementToScrollTo = document.getElementById(target);

  const { scrollY } = window;
  const scrollTargetY = position || elementToScrollTo && elementToScrollTo.offsetTop - 100 || 0;
  const speed = 2000;
  const easing = 'easeOutSine';
  let currentTime = 0;

  // min time .1, max time .8 seconds
  const time = Math.max(0.1, Math.min(Math.abs(scrollY - scrollTargetY) / speed, 0.8));

  // easing equations from https://github.com/danro/easing-js/blob/master/easing.js
  const PI_D2 = Math.PI / 2;
  const easingEquations = {
    easeOutSine(pos) {
      return Math.sin(pos * (Math.PI / 2));
    },
    easeInOutSine(pos) {
      return (-0.5 * (Math.cos(Math.PI * pos) - 1));
    },
    easeInOutQuint(pos) {
      if ((pos /= 0.5) < 1) {
        return 0.5 * Math.pow(pos, 5);
      }
      return 0.5 * (Math.pow((pos - 2), 5) + 2);
    },
  };

  // add animation loop
  const tick = () => {
    currentTime += 1 / 60;

    const p = currentTime / time;
    const t = easingEquations[easing](p);
    const { requestAnimFrame } = window;

    if (p < 1) {
      requestAnimFrame(tick);

      window.scrollTo(0, scrollY + ((scrollTargetY - scrollY) * t));
    } else {
      window.scrollTo(0, (scrollTargetY));
    }
  };

  // call it once to get started
  tick();
};
