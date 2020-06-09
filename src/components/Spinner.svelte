<script>
  import { fasSpinnerThird } from "config/icons";
  import Icon from "components/Icon";
</script>

<span class="spinner {$$props.class} text-5xl">
  <Icon class="text-c-text-1" icon={fasSpinnerThird} />
</span>

<style>
  .spinner :global(svg) {
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
