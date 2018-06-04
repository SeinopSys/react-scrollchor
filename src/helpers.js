import { setTimeout, clearTimeout } from 'requestanimationframe-timer';

export const animateScroll = (function () {
  let timeoutId;
  let resolvePrevious;

  return function animateScroll (id, animate) {
    return new Promise((resolve, reject) => {
      const element = id ? document.getElementById(id) : document.body;

      if (!element) {
        return reject(`Cannot find element: #${id}`);
      }

      const { offset, duration, easing } = animate;
      const start = getScrollTop();
      const to = getOffsetTop(element) + offset;
      const change = to - start;

      function animateFn (elapsedTime = 0) {
        const increment = 20;
        const elapsed = elapsedTime + increment;
        const position = easing(null, elapsed, start, change, duration);
        setScrollTop(position);
        if (elapsed < duration) {
          timeoutId = setTimeout(function () {
            animateFn(elapsed);
          }, increment);
        } else {
          timeoutId = undefined;
          return resolve(id);
        }
      }

      if (timeoutId) {
        clearTimeout(timeoutId);
        resolvePrevious();
      }
      resolvePrevious = resolve;
      animateFn();
    });
  }
})();

export function updateHistory (id) {
  id = '#' + id;
  if (history.pushState) {
    history.pushState(null, null, id);
  }
  else {
    location.hash = id;
  }
}

function getScrollTop () {
  // like jQuery -> $('html, body').scrollTop
  return document.documentElement.scrollTop || document.body.scrollTop;
}

function setScrollTop (position) {
  document.documentElement.scrollTop = document.body.scrollTop = position;
}

function getOffsetTop (element) {
  const { top } = element.getBoundingClientRect();
  return top + getScrollTop();
}
