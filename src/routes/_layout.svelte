<script>
  import Nav from "components/Nav";
  import Footer from "components/Footer";

  export let segment;
</script>

<div class="min-h-screen flex flex-col">
  <div
    class:hidden={process.env.NODE_ENV !== 'production'}
    class="bg-c-bg-complement">
    <div class="contained text-c-text-1-complement py-4">
      This site is under construction. For more information, you can contact us
      at
      <a class="underline" href="mailto:contact@fightforblacklives.com">
        contact@fightforblacklives.com
      </a>
    </div>
  </div>

  <Nav />

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
