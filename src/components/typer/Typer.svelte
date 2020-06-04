<script>
  import { delay } from "utils/time";
  import { onMount, onDestroy, setContext } from "svelte";
  import { typer } from "components/typer/typer-api";

  const texts = [];
  let started = false;
  let done = false;

  setContext(typer, {
    register(start) {
      if (done) {
        start(false);
        return;
      }

      texts.push(start);

      if (!started) {
        started = true;
        type();
      }
    }
  });

  const type = async () => {
    console.log(texts);
    for (const text of texts) {
      await text(true);
    }
    done = true;
  };
</script>

<slot />
