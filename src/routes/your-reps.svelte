<script>
  import { getZipCodeBundle } from "utils/api";
  import { onMount } from "svelte";

  let zipCode = window.location.hash.slice(1, 6);
  let zipCodeBundle;

  const getZipCode = () => {
    getZipCodeBundle(zipCode).then(res => {
      zipCodeBundle = res;
    });
  };

  onMount(() => {
    getZipCode();
  });
</script>

{#if zipCodeBundle}{JSON.stringify(zipCodeBundle)}{/if}
