<script>
  import { onMount } from "svelte";
  import Icon from "components/Icon";
  import { twitter, fasEnvelope, fasPhone, facebook } from "config/icons.ts";
  import { slide } from "svelte/transition";
  export let height;
  export let offset = false;
  export let tweets;
  export let person;

  let topics = [];
  $: topics = Array.from(new Set(tweets.flatMap(tweet => tweet.topics)));

  let el;

  const scale = () => {
    return {
      css: t => `max-height: ${t * 100}%;`
    };
  };

  onMount(() => {
    offset = el.parentElement.getBoundingClientRect().x;
  });
</script>

<div class="container" bind:this={el}>
  {#if offset}
    <div
      style="height: {height}px; left: -{offset}px; font-family: {`system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif`};"
      class="absolute top-full w-screen flex flex-col text-c-text-twitter">
      <div
        transition:scale
        style="max-height: 100%;"
        class="flex bg-white border-t-2 border-b-2 border-c-border-3 flex-1 my-6">
        <div class="contained flex flex-1">
          <nav class="flex flex-col mt-4">
            {#each topics as topic}
              <button class="rounded-full mr-4 mb-4 text-left">{topic}</button>
            {/each}
          </nav>

          <ul
            class="flex flex-col border-l border-r border-c-border-twitter
            flex-1 overflow-y-auto max-h-full">
            {#each tweets as tweet, i}
              <li
                class="border-b border-c-border-twitter flex flex-col
                items-start">
                <div class="p-4">
                  <div class="flex">
                    <h5 class="font-bold">Your Name</h5>
                    <span class="ml-1 text-c-header-twitter">
                      @fight4blacklives
                    </span>
                    <span class="inline-block mx-1 text-c-header-twitter">
                      ·
                    </span>
                    <span class="text-c-header-twitter">now</span>
                  </div>

                  <p class="text-lg pt-1">{tweet.text}</p>
                </div>

                <div class="px-4 pb-4">
                  <button
                    class="bg-c-button-twitter text-white font-medium
                    rounded-full py-1 px-4">
                    Tweet This
                  </button>
                </div>
              </li>
            {/each}
          </ul>

          <div style="max-width: 375px;" class="pt-6 pl-6">
            <h2 class="text-2xl font-semibold">{person.name}</h2>
            <h3 class="text-2xl">{person.title}</h3>
            <h4 class="text-lg mt-4">{person.party}</h4>
            {#if person.address}
              <h5 class="detail-header">Office Address</h5>
              <span class="detail">{person.address}</span>
            {/if}
            {#if person.phone}
              <h5 class="detail-header">Phone Number</h5>
              <span class="detail">{person.phone}</span>
            {/if}
            {#if person.email}
              <h5 class="detail-header">Email</h5>
              <span class="detail">{person.email}</span>
            {/if}

            <div class="flex flex-row mt-4">
              {#if person.twitter}
                <a href={`https://twitter.com/${person.twitter}`}>
                  <Icon size="lg" class="px-1" icon={twitter} />
                </a>
              {/if}
              {#if person.facebook}
                <a href={`https://facebook.com/${person.facebook}`}>
                  <Icon size="lg" class="px-1" icon={facebook} />
                </a>
              {/if}

            </div>

          </div>
        </div>
      </div>
    </div>
  {/if}
</div>

<style>
  @import "../style/shared";

  .detail-header {
    @apply font-semibold text-xl mt-4;
  }

  .detail {
    @apply text-lg text-c-header-twitter;
  }

  .container:after {
    @apply bg-white block w-4 h-4 absolute border-c-border-3;
    border-top-width: 2px;
    border-left-width: 2px;
    transform: rotate(45deg);
    top: calc(100% + 16.341px);
    left: 50%;
    content: "";
  }
</style>
