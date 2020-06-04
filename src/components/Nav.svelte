<script>
  import scrollLink from "mixins/scrollLink";
  import { staticPath } from "config/static";
</script>

<div class="contained items-center py-12 hidden md:flex">
  <div class="flex flex-grow md:flex-grow-0">
    <a
      href="/"
      class="mx-auto inline-block font-semibold text-4xl border-c-border-1">
      Fight For Black Lives.
    </a>
  </div>

  <nav class="flex-1 justify-end ml-auto pt-2 font-semibold hidden md:flex">
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
    @apply pl-4;
    @apply text-lg;

    @screen lg {
      @apply pl-16 text-xl text-c-header-1;
    }
  }

  .logo {
    width: 200px;
    max-width: 100%;

    @screen lg {
      width: 250px;
    }
  }
</style>
