<script>
  import Type from "components/typer/TyperText";
  import Slider from "components/typer/Slider";
  import Typer from "components/typer/Typer";
</script>

<div class="contained hero-container my-24">
  <Typer>
    <p class="text-brown-gray">
      <Slider text="Enter your zip code." />
    </p>
    <p class="text-brown-gray">
      <Slider text="Contact your representatives (we'll help)." />
    </p>
    <p class="text-brown-gray">
      <Slider text="Make them write laws to fix this." />
    </p>
    <p>
      <Type text="Fight For Black Lives." />
    </p>
  </Typer>
</div>

<style>
  @import "../style/shared.css";

  .hero-container {
    @apply font-semibold;

    font-size: 60px;
  }
</style>
