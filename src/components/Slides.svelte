<script>
  import swipe from "mixins/swipe";
  import { onMount, onDestroy } from "svelte";
  import { spring } from "svelte/motion";

  onMount(() => {
    updateCurrent(0);
  });

  const previousCoords = { x: 0, y: 0 };

  let slidesInput;

  export let width = "100vw";
  export let current = null;
  export let damping = 1;
  export let currentSlide;
  export let stiffness = 0.5;
  export { slidesInput as slides };

  const position = spring({ x: 0 }, { stiffness: 1, damping: 0 });

  const wrapRange = (i, max) => {
    return ((i % max) + max) % max;
  };

  const findMinimumLength = count => {
    if (count < 3) {
      return findMinimumLength(count * 2);
    }

    return count;
  };

  const buildSlides = slidesInput =>
    slidesInput.length < 3
      ? Array.from(new Array(findMinimumLength(slidesInput.length))).map(
          (v, index) => {
            const input = slidesInput[wrapRange(index, slidesInput.length)];
            return { ...input, _id: input.id + `-${index}` };
          }
        )
      : slidesInput;

  let slides = buildSlides(slidesInput);
  $: slides = buildSlides(slidesInput);

  $: {
    if (current != null && currentSlide !== slides[current].id) {
      const slide = slidesInput.findIndex(slide => slide.id === currentSlide);
      const direction = slide < current ? -1 : 1;

      if (slide != -1) {
        current = slide;

        position.stiffness = position.damping = 1;
        position.update(() => ({
          x: direction * clientWidth
        }));

        requestAnimationFrame(() => {
          position.stiffness = stiffness;
          position.damping = damping;
          position.update(() => ({
            x: 0
          }));
        });
      }
    }
  }

  let clientWidth = null;
  let buffer = 0;

  function swipeStart() {
    position.stiffness = position.damping = 1;
  }

  function swipeMove(event) {
    previousCoords.x = $position.x;

    position.update($position => ({
      x: $position.x + event.detail.dx
    }));
  }

  const stayWindow = 0.1;

  function updateCurrent(next) {
    current = next;
    currentSlide = slides[current].id;
  }

  function swipeEnd() {
    position.damping = damping ? damping : 1;
    position.stiffness = stiffness;

    if (Math.abs($position.x) <= stayWindow) {
      return position.update(() => ({
        x: 0
      }));
    }

    const direction = $position.x > 0 ? -1 : 1;

    updateCurrent(wrapRange(current + direction, slides.length));

    position.stiffness = 1;
    position.update(({ x }) => ({
      x: x + direction * clientWidth
    }));

    position.stiffness = stiffness;
    position.update(() => ({
      x: 0
    }));
  }

  function swipeNext() {
    position.damping = damping ? damping : 1;
    position.stiffness = stiffness;

    const direction = 1;

    updateCurrent(wrapRange(current + direction, slides.length));

    position.stiffness = 1;
    position.update(({ x }) => ({
      x: x + direction * clientWidth
    }));

    position.stiffness = stiffness;
    position.update(() => ({
      x: 0
    }));
  }

  let interval;
  onMount(() => {
    interval = setInterval(() => {
      if (!hovering) {
        swipeNext();
      }
    }, 4500);
  });

  onDestroy(() => {
    clearInterval(clearInterval);
  });

  const getSlidingWindow = (current, slides) => {
    if (current === null) {
      return slides;
    }

    return [
      slides[wrapRange(current - 1, slides.length)],
      slides[current % slides.length],
      slides[wrapRange(current + 1, slides.length)]
    ];
  };

  let hovering = false;
</script>

<div
  on:mouseenter={() => (hovering = true)}
  on:mouseleave={() => (hovering = false)}
  bind:clientWidth
  style="flex: 0 0 {width};"
  class="flex">
  <div
    class="panels"
    style="width: {width}"
    use:swipe
    on:swipeStart={swipeStart}
    on:swipeMove={swipeMove}
    on:swipeEnd={swipeEnd}>
    <div
      class="inner-container"
      style="transform: translateX({$position.x + buffer}px)">
      {#each getSlidingWindow(current, slides) as slide (slide._id || slide.id)}
        <div
          class="panel"
          style="flex: 0 0 {width}; transform: translate({current != null ? '-100%' : '0%'})">
          <slot {slide} />
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
  .panel {
    display: flex;
  }

  .panels {
    display: flex;
    overflow: hidden;
    user-select: none;
  }

  .inner-container {
    display: flex;
  }
</style>
