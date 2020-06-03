<script>
  let zipCode;
</script>

<div
  style="width: 600px"
  class="bg-white flex mx-auto rounded-full border border-brown max-h-full {$$props.class || ''}">
  <input
    placeholder="enter your 5-digit zip code"
    class="zip-input bg-transparent py-4 px-6 flex-1 text-2xl text-center"
    bind:value={zipCode} />

  <button
    class="bg-brown px-12 text-brown-white m-1 rounded-full self-stretch text-xl">
    Fight!
  </button>
</div>

<style>
  @import "../style/shared.css";

  .zip-input::placeholder {
    @apply text-brown-gray;
  }
</style>
