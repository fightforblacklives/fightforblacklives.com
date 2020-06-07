<script>
  import { typer } from "./typer-api";
  import { onMount, onDestroy, getContext } from "svelte";
  import { fly } from "svelte/transition";
  import { delay } from "utils/time";

  export let text;
  export let duration = 1000;
  export let introResolve = () => {};
  export let mounted = true;

  onDestroy(() => {
    mounted = false;
  });

  const api = getContext(typer);
  let waiting = true;

  onMount(() => {
    api.register(async () => {
      if (!mounted) {
        return;
      }

      waiting = false;

      return new Promise(resolve => {
        introResolve = resolve;
      });
    });
  });
</script>

{#if waiting}
  <span class="opacity-0">{text}</span>
{:else}
  <span
    class="inline-block"
    on:introend={introResolve}
    in:fly={{ duration, y: -20 }}>
    {text}
  </span>
{/if}
