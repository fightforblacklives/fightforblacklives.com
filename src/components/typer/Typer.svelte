<script>
  import { delay } from "utils/time";
  import { onMount, onDestroy, setContext } from "svelte";
  import { typer } from "components/typer/typer-api";

  const texts = [];
  let started = false;

  setContext(typer, {
    register(start) {
      texts.push(start);

      console.log("test");

      if (!started) {
        started = true;
        type();
      }
    }
  });

  const type = async () => {
    for (const text of texts) {
      await text();
    }
  };
</script>

<slot />
