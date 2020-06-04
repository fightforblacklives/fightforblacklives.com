<script>
  let zipCode;
  export let width = 600;

  const searchZip = () => {
    window.location.href = `/your-reps#${zipCode}`;
  };
</script>

<div
  style="width: {width}px; {$$props.style || ''}"
  class="flex rounded-full border border-c-border-2 max-h-full {$$props.class || ''}">
  <input
    placeholder="enter your 5-digit zip code"
    class="zip-input bg-transparent py-4 px-6 flex-1 text-2xl text-center"
    bind:value={zipCode} />

  <button
    on:click={searchZip}
    class="bg-c-button-primary px-12 text-c-text-1-complement m-1 rounded-full
    self-stretch text-xl">
    Fight!
  </button>
</div>

<style>
  @import "../style/shared.css";

  .zip-input::placeholder {
    color: inherit;
    opacity: 1;
  }
</style>
