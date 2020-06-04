<script>
  import { staticPath } from "config/static";

  let zipCode;
  export let width = 600;

  const searchZip = () => {
    window.location.href = `${staticPath}/your-reps#${zipCode}`;
  };
</script>

<div
  style="width: {width}px; {$$props.style || ''}"
  class="flex rounded-full border border-c-border-2 max-h-full {$$props.class || ''}">
  <input
    placeholder="enter your zip code"
    type="number"
    on:keydown={e => {
      if (e.key === 'Enter') {
        searchZip();
      }
    }}
    pattern="\d*"
    maxlength="5"
    class="zip-input bg-transparent py-4 px-6 flex-1 text-xl lg:text-2xl
    text-left"
    bind:value={zipCode} />

  <button
    on:click={searchZip}
    class="bg-c-button-primary px-12 text-c-text-1-complement m-1 rounded-full
    self-stretch text-lg">
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
