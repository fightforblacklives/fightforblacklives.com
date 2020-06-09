<script>
  import Nav from "components/Nav";
  import Footer from "components/Footer";
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";

  export let segment;

  let mounted = false;

  onMount(() => {
    mounted = true;
  });
</script>

{#if mounted}
  <div in:fade={{ duration: 200 }} class="min-h-screen flex flex-col">
    <Nav {segment} />

    <main class="flex self-stretch flex-1">
      <slot />
    </main>

    <Footer class="mt-auto" />
  </div>
{/if}

<style>
  @import "../style/shared.css";

  :global(body) {
    @apply bg-c-bg-primary text-c-text-1;
  }
</style>
