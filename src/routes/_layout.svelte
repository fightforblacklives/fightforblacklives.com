<script>
  import Nav from "components/Nav";
  import Footer from "components/Footer";

  export let segment;
</script>

<div class="min-h-screen flex flex-col">
  <Nav />

  <main class="flex self-stretch flex-1">
    <slot />
  </main>

  <Footer class="mt-auto" />
</div>

<style>
  :global(body) {
    @apply bg-brown-white text-brown;
  }
</style>
