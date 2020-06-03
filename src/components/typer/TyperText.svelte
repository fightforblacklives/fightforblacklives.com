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
      throw "done";
    }

    await delay(typeDelayDuration + Math.floor(Math.random() * 30));
  };

  const type = async () => {
    for (slice = 0; slice < text.length; slice++) {
      await typeDelay();
    }
  };

  onMount(() => {
    mounted = true;

    console.log("ran");
    api.register(type);
  });

  onDestroy(() => {
    mounted = false;
  });
</script>

<span class="relative inline-block">
  <span class="absolute inline-block">{text.slice(0, slice)}</span>
  <span class="opacity-0">{text}</span>
</span>
