<script>
  export let text;

  const parseTweet = message => {
    return message.split(/([#@][^\s]+)/).map(value => {
      if (value.trim().length > 1) {
        if (value.startsWith("#")) {
          return { type: "hashtag", value: value, tag: value.slice(1) };
        }

        if (value.startsWith("@")) {
          return { type: "at", value: value, user: value.slice(1) };
        }
      }

      return { type: "text", value };
    });
  };

  $: segments = parseTweet(text);
</script>

<p style="font-size: 0px;" class={$$props.class || ''}>
  {#each segments as segment}
    {#if segment.type === 'text'}
      <span>{segment.value}</span>
    {:else if segment.type === 'at'}
      <a
        on:click|stopPropagation={() => true}
        target="_blank"
        href="https://twitter.com/{encodeURIComponent(segment.user)}">
        <span>{segment.value}</span>
      </a>
    {:else if segment.type === 'hashtag'}
      <a
        on:click|stopPropagation={() => true}
        target="_blank"
        href="https://twitter.com/hashtag/{encodeURIComponent(segment.tag)}">
        <span>{segment.value}</span>
      </a>
    {/if}
  {/each}
</p>

<style>
  a {
    @apply text-c-link-twitter;
    display: inline;
  }

  span {
    @apply text-lg;
    white-space: pre-wrap;
    display: inline;
    font-family: inherit;
  }
</style>
