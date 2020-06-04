<script>
  import { delay } from "utils/time";
  import { onMount, onDestroy, getContext } from "svelte";
  import { typer } from "components/typer/typer-api";

  export let text;
  export let mounted = true;
  export let typeDelayDuration = 40;

  const api = getContext(typer);

  let slice = 0;

  const typeDelay = async () => {
    if (mounted === false) {
      return "done";
    }

    await delay(typeDelayDuration + Math.floor(Math.random() * 30));
  };

  const type = async showAnimation => {
    if (!showAnimation) {
      slice = false;
      return;
    }

    for (slice = 0; slice < text.length; slice++) {
      if ((await typeDelay()) === "done") {
        return;
      }
    }
  };

  onMount(() => {
    mounted = true;
    api.register(type);
  });

  onDestroy(() => {
    mounted = false;
  });
</script>

<span class="relative inline-block">
  {#if slice !== false}
    <span class="absolute inline-block">{text.slice(0, slice)}</span>
  {/if}
  <span class:opacity-0={slice !== false}>{text}</span>
</span>
