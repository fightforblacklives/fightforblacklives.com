<script>
  import Nav from "components/Nav";
  import Footer from "components/Footer";

  export let segment;
</script>

<div class="min-h-screen flex flex-col">
  <Nav {segment} />

  <main class="flex self-stretch flex-1">
    <slot />
  </main>

  <Footer class="mt-auto" />
</div>

<style>
  @import "../style/shared.css";

  :global(body) {
    @apply bg-c-bg-primary text-c-text-1;
  }
</style>
