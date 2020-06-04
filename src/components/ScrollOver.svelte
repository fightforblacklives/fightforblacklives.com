<script>
  let el;
  let y = 0;
  export let offsetStart;
  export let length;
  export let multiplier;

  const onScroll = e => {
    if (el) {
      const rect = el.getBoundingClientRect();
      const nyPixels = Math.min(
        Math.max(0, (rect.top + offsetStart) * -1),
        length
      );
      const ny = (nyPixels / length) * multiplier;

      if (ny !== y) {
        y = ny;
      }
    }
  };
</script>

<svelte:window on:scroll={onScroll} />

<div bind:this={el}>
  <slot {y} />
</div>
