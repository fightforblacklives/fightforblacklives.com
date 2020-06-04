<script>
  import Type from "components/typer/TyperText";
  import Slider from "components/typer/Slider";
  import Typer from "components/typer/Typer";
  import ScrollOver from "components/ScrollOver";
</script>

<div class="contained hero-container my-24">
  <Typer>
    <p class="text-c-header-1">
      <Slider text="Enter your zip code." />
    </p>
    <p class="text-c-header-1">
      <Slider text="Contact your representatives (we'll help)." />
    </p>
    <p class="text-c-header-1">
      <Slider text="Make them write laws to fix this." />
    </p>
    <ScrollOver offsetStart={0} length={100} multiplier={-0.4} let:y>
      <p class:invisible={y !== -0 && y < 0}>
        <Type text="Fight For Black Lives." />
      </p>

      {#if y < 0}
        <p
          style="transform-origin: 0 50%; transform: scale({1 + y}); z-index: 2;"
          class="fixed top-0">
          Fight For Black Lives.
        </p>
      {/if}
    </ScrollOver>
  </Typer>
</div>

<style>
  @import "../style/shared.css";

  .hero-container {
    @apply font-semibold;

    font-size: 4.5vw;

    @screen xl {
      font-size: 60px;
    }
  }
</style>
