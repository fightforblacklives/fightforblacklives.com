<script>
  import Type from "components/typer/TyperText";
  import Slider from "components/typer/Slider";
  import Typer from "components/typer/Typer";
  import ScrollOver from "components/ScrollOver";
  import ZipForm from "components/ZipForm";

  let zipContainerWidth;
  let zipFormWidth = 600;
  let zipScrollEffectLength = 200;
  let zipFormScaleDown = 0.2;
  let windowWidth = window.innerWidth;
  let stickyHeight = 100;

  $: isMobile = windowWidth < 768;
  $: zipFormWidth = isMobile ? windowWidth - 48 : 600;
  $: basezipFormWidth = zipFormWidth;
  $: stickyHeight = isMobile ? 75 : 100;
  $: zipFormScaleDown = isMobile ? 0 : 0.2;

  const zipFormScrollLocation = (isMobile, zipContainerWidth, y) => {
    const scale = 1 - zipFormScaleDown * y;
    const zipFormWidth = basezipFormWidth * scale;
    const startX = zipContainerWidth / 2 - zipFormWidth / 2;
    const endX = zipContainerWidth - zipFormWidth;

    if (isMobile) {
      return startX;
    }

    return startX + (endX - startX) * y;
  };

  $: contactText =
    windowWidth > 768
      ? "Contact your representatives (we'll help)."
      : "Contact your lawmakers.";
</script>

<svelte:window bind:innerWidth={windowWidth} />

<div class="contained hero-container my-24">
  <Typer>
    <p class="text-c-header-1">
      <Slider text="Enter your zip code." />
    </p>
    <p class="text-c-header-1">
      <Slider text={contactText} />
    </p>
    {#if !isMobile}
      <p class="text-c-header-1">
        <Slider text="Make them write laws to fix this." />
      </p>
    {/if}
    <ScrollOver offsetStart={0} length={150} multiplier={1} let:y>
      <p class:invisible={y > 0 && !isMobile}>
        <Type text="Fight For Black Lives." />
      </p>

      {#if y > 0 && !isMobile}
        <p
          style="transform-origin: 0 50%; transform: scale({1 + y * -0.4});
          min-height: {y * stickyHeight}px;"
          class="fixed z-20 top-0 flex items-center">
          Fight For Black Lives.
        </p>
      {/if}
    </ScrollOver>
  </Typer>
</div>

{#if isMobile}
  <ScrollOver offsetStart={0} length={100} multiplier={1} let:y>
    <div class="py-4" class:invisible={y > 0}>
      <ZipForm width={zipFormWidth} class="mb-20 mx-auto" />
    </div>

    {#if y > 0}
      <div
        class="top-0 z-10 fixed w-full flex py-4 bg-c-bg-primary border-b"
        style="border-bottom-color: rgba(148, 131, 123, {y * 0.4});">
        <ZipForm width={zipFormWidth} class="mx-auto" />
      </div>
    {/if}
  </ScrollOver>

{:else}
  <ScrollOver
    offsetStart={-180}
    length={zipScrollEffectLength}
    multiplier={1}
    let:y>
    <ZipForm
      width={zipFormWidth}
      class="{y > 0 ? 'invisible' : ''} mb-32 mx-auto" />

    {#if y > 0}
      <div
        style="top: {Math.max(zipScrollEffectLength - y * zipScrollEffectLength - 20, 0)}px;
        border-bottom-color: rgba(148, 131, 123, {y * 0.4}); min-height: {y * stickyHeight}px;"
        class="fixed z-10 border-b flex items-center overflow-visible w-full
        sticky-nav moz-sticky-nav">
        <div bind:offsetWidth={zipContainerWidth} class="contained">
          <ZipForm
            width={zipFormWidth}
            style="left: {zipFormScrollLocation(isMobile, zipContainerWidth, y)}px;
            transform-origin: 0 50%; margin-bottom: {36 * (1 - y)}px; transform:
            scale({1 - zipFormScaleDown * y});"
            class="relative mx-0" />
        </div>
      </div>
    {/if}
  </ScrollOver>
{/if}

<style>
  @import "../style/shared.css";

  .sticky-nav {
    @apply border-c-border-2 border-b bg-c-bg-primary;
    backdrop-filter: blur(10px);
  }

  .hero-container {
    @apply font-semibold text-center;

    font-size: 7.1vw;

    @screen md {
      @apply text-left;
      font-size: 4.5vw;
    }

    @screen xl {
      font-size: 60px;
    }
  }
</style>
