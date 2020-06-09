<script>
  let loaded = false;
  const onLoad = () => {
    loaded = true;
  };
</script>

<img
  alt={$$props.alt}
  {...$$props}
  class:img-loading={!loaded}
  on:load={onLoad} />

<style>
  .img-loading {
    opacity: 0;
  }

  .img-loading:after {
  }
</style>
