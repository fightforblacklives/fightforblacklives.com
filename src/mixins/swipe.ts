// Based off: https://github.com/James-revans/svelte-swipeable/blob/master/src/main.js
// Cloned to add touch support

export default function swipe(node, options = { threshX: 0, threshY: 0 }) {
  let x;
  let y;
  let initial = {
    x: undefined,
    y: undefined,
  };
  let direction = {
    x: undefined,
    y: undefined,
  };

  const getEventPoint = (event) => {
    if (event.touches) {
      const first = event.touches[0];

      if (first) {
        return { x: first.clientX, y: first.clientY };
      }

      return null;
    } else {
      return { x: event.clientX, y: event.clientY };
    }
  };

  function handleMousedown(event) {
    const point = getEventPoint(event);
    if (point == null) {
      return;
    }

    ({ x, y } = point);

    initial.x = x;
    initial.y = y;

    node.dispatchEvent(
      new CustomEvent("swipeStart", {
        detail: { x, y },
      })
    );

    window.addEventListener("mousemove", handleMousemove);
    window.addEventListener("mouseup", handleMouseup);

    window.addEventListener("touchmove", handleMousemove);
    window.addEventListener("touchend", handleMouseup);
  }

  function handleMousemove(event) {
    const point = getEventPoint(event);
    if (point == null) {
      return;
    }

    const dx = point.x - x;
    const dy = point.y - y;
    x = point.x;
    y = point.y;
    (direction.x =
      x - initial.x > options.threshX
        ? "right"
        : initial.x - x > options.threshX
        ? "left"
        : undefined),
      (direction.y =
        y - initial.y > options.threshY
          ? "down"
          : initial.y - y > options.threshY
          ? "up"
          : undefined);
    node.dispatchEvent(
      new CustomEvent("swipeMove", {
        detail: { x, y, dx, dy, initial, direction },
      })
    );
  }

  function handleMouseup(event) {
    const point = getEventPoint(event);

    if (point != null) {
      ({ x, y } = point);
    }

    if (initial.y - y >= options.threshY) {
      node.dispatchEvent(
        new CustomEvent("swipeUp", {
          detail: { x, y, initial, direction },
        })
      );
    }
    if (y - initial.y >= options.threshY) {
      node.dispatchEvent(
        new CustomEvent("swipeDown", {
          detail: { x, y, initial, direction },
        })
      );
    }
    if (initial.x - x >= options.threshX) {
      node.dispatchEvent(
        new CustomEvent("swipeRight", {
          detail: { x, y, initial, direction },
        })
      );
    }
    if (x - initial.x >= options.threshX) {
      node.dispatchEvent(
        new CustomEvent("swipeLeft", {
          detail: { x, y, initial, direction },
        })
      );
    }

    node.dispatchEvent(
      new CustomEvent("swipeEnd", {
        detail: { x, y, initial, direction },
      })
    );

    window.removeEventListener("mousemove", handleMousemove);
    window.removeEventListener("mouseup", handleMouseup);

    window.removeEventListener("touchmove", handleMousemove);
    window.removeEventListener("touchend", handleMouseup);
  }

  node.addEventListener("mousedown", handleMousedown);
  node.addEventListener("touchstart", handleMousedown);

  return {
    destroy() {
      node.removeEventListener("mousedown", handleMousedown);
      node.removeEventListener("touchstart", handleMousedown);
    },
  };
}
