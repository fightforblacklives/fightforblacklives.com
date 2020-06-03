<script>
  import scrollLink from "mixins/scrollLink";
</script>

<div
  style="border-bottom-width: 1.5px; border-style: solid;"
  class="flex contained items-center py-12 border-brown-gray">
  <div>
    <a href="/" class="mx-auto">
      <img
        style="width: 250px; max-width: 100%;"
        alt="Fight For Black Lives Logo"
        src="/ffbl-black.png" />
    </a>
  </div>

  <nav
    class="flex flex-1 justify-end pl-32 pt-2 text-xl text-brown font-medium">
    <a use:scrollLink class="nav-link" href="#what-can-i-do">What can I do?</a>
    <a use:scrollLink class="nav-link" href="#why-should-i-do-it">
      Why should I do it?
    </a>
    <a use:scrollLink class="nav-link" href="#how-else-can-i-help">
      How else can I help?
    </a>
  </nav>
</div>

<style>
  @import "../style/shared.css";

  .nav-link {
    @apply text-brown pl-16;
  }
</style>
