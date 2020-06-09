<script>
  import { createEventDispatcher } from "svelte";

  const fire = createEventDispatcher();

  export let zipCode;
  export let zipCodeBundle;
</script>

<div class="flex flex-col mt-16 mb-24">
  <div class="flex contained">
    <input
      pattern={'\\d*'}
      maxlength="5"
      style="max-width: 100px;"
      on:keydown={(e) => {
        if (e.key === 'Enter') {
          fire('submit');
        }
      }}
      bind:value={zipCode}
      class="text-4xl mr-auto bg-transparent" />
    {#if zipCodeBundle}
      <h2 class="text-4xl text-c-header-1">
        {zipCodeBundle.city}, {zipCodeBundle.state}
      </h2>
    {/if}

  </div>

  <hr style="height: 1.5px" class="bg-c-border-2 contained" />

  <span class="contained text-lg pt-2 text-c-header-1">Zip Code</span>
</div>

<style>
  @import "../style/shared.css";
</style>
