<script>
  import { onMount, onDestroy, createEventDispatcher } from "svelte";
  import Icon from "components/Icon";
  import {
    twitter,
    fasAt,
    fasEnvelope,
    fasPhone,
    facebook
  } from "config/icons.ts";
  import { fade, fly } from "svelte/transition";
  import { delay } from "utils/time";
  import { staticPath } from "config/static";
  import TweetText from "components/TweetText";
  import scrollSectionReporter from "mixins/scrollSectionReporter";
  import { relativeRect, padRect } from "utils/math";
  import AddTwitterAccount from "components/AddTwitterAccount";

  const fire = createEventDispatcher();

  export let height;
  export let offset = false;
  export let tweets;
  export let person;
  export let lastArrowRect;
  export let transition;
  export let exiting;

  let arrowRect;

  $: topics = Array.from(new Set(tweets.map(topicGroup => topicGroup.topic)));

  let currentTopic;

  let el;
  let arrowAnchor;

  const getDefaultDuration = transition => {
    if (transition === "none") {
      return 0;
    }

    if (transition.type === "swap") {
      return 0;
    }

    return transition.duration;
  };

  const arrowTransitionEnter = (
    e,
    { transition, arrowRect, lastArrowRect }
  ) => {
    if (lastArrowRect === null) {
      return {
        duration: 0
      };
    }

    const startX = arrowPosition(lastArrowRect);
    const endX = arrowPosition(arrowRect);
    const delta = endX - startX;

    return {
      duration:
        transition.type === "swap" && lastArrowRect ? transition.duration : 0,
      css: t => `left: ${startX + t * delta}px`
    };
  };

  const arrowTransitionExit = ({ transition }) => {
    return {
      duration: 0,
      css: t => "opacity: 0"
    };
  };

  const hideOverflowOnTransition = (e, { transition }) => {
    return {
      duration: getDefaultDuration(transition),
      css: t => `overflow-y: ${t === 1 ? "auto" : "hidden"}`
    };
  };

  const placeholder = (e, { transition, height }) => {
    return {
      delay: 0,
      duration: getDefaultDuration(transition),
      css: t => `margin-bottom: ${t * height}px;`
    };
  };

  const swap = (e, { transition }) => {
    if (transition.type === "swap") {
      return fly(e, {
        duration: transition.duration,
        x: transition.direction * -100
      });
    }

    return {
      duration: 0
    };
  };

  const scale = (e, { transition }) => {
    if (transition.type === "swap") {
      return {
        duration: 0
      };
    }

    return {
      delay: 0,
      duration: getDefaultDuration(transition),
      css: t =>
        `height: ${t * height}px; opacity: ${t}; overflow: ${
          t === 1 ? "visible" : "hidden"
        };`
    };
  };

  $: {
    if (arrowAnchor != null) {
      arrowRect = arrowAnchor.getBoundingClientRect();
    }
  }

  const arrowPosition = rect => {
    if (rect == null) {
      return 0;
    }

    return rect.x + rect.width / 2;
  };

  onMount(async () => {
    const parentRect = el.parentElement.getBoundingClientRect();
    offset = parentRect.x;

    if (transition.type === "collapse-expand") {
      await delay(transition.duration);
    }

    const elRect = el.getBoundingClientRect();
    const bodyRect = document.body.getBoundingClientRect();

    const bottomScreen = window.innerHeight - bodyRect.y;
    const topOfEl = elRect.y - bodyRect.y;
    const bottomOfMessage = topOfEl + height;

    if (bottomScreen < bottomOfMessage) {
      window.scroll({
        top: window.scrollY + (bottomOfMessage - bottomScreen) + 100,
        behavior: "smooth"
      });
    }
  });

  let tweetScroller;
  const selectTopic = newTopic => {
    if (tweetScroller) {
      const el = tweetScroller.querySelector(
        `:scope > li[data-topic=${JSON.stringify(newTopic)}]`
      );

      if (el) {
        const scrollerRect = tweetScroller.getBoundingClientRect();
        const elRect = el.getBoundingClientRect();

        tweetScroller.scroll({
          top: tweetScroller.scrollTop + (elRect.y - scrollerRect.y),
          behavior: "smooth"
        });
      }
    }
  };

  const getTweetLink = (person, tweet) => {
    const tweetText = `@${person.twitter} ${tweet}`;

    return `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      tweetText
    )}`;
  };

  $: {
    if (exiting) {
      fire("lastRect", arrowRect);
    }
  }

  let navEl;

  const getRectStyle = rect => {
    return `
    top: ${rect.top}px;
    left: ${rect.left}px;
    width: ${rect.width}px;
    height: ${rect.height}px;
    `;
  };

  $: topicActiveButtonRect =
    currentTopic &&
    navEl &&
    relativeRect(
      navEl.getBoundingClientRect(),
      navEl
        .querySelector(
          `:scope > button[data-topic=${JSON.stringify(currentTopic)}]`
        )
        .getBoundingClientRect()
    );
  const twitterFont = `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif`;
</script>

<div
  bind:this={el}
  style="margin-bottom: {height}px; height: 0px;"
  in:placeholder={{ height, transition }}
  out:placeholder={{ height, transition }}>
  {#if offset}
    <div class="absolute arrow-anchor w-full" bind:this={arrowAnchor} />
    <div
      style="height: {height}px; left: -{offset + 1}px;"
      in:scale={{ transition }}
      out:scale={{ transition }}
      class="absolute box top-full w-screen flex flex-col pt-6">

      {#if arrowRect}
        <div
          in:arrowTransitionEnter={{ transition, arrowRect, lastArrowRect }}
          out:arrowTransitionExit={{ transition }}
          class="absolute arrow -z-5"
          style="left: {arrowPosition(arrowRect)}px;" />
      {/if}

      <div
        style="max-height: 100%"
        class="flex bg-c-bg-primary border-t-2 border-b-2 border-c-border-3
        flex-1">
        <div
          class="contained flex flex-1 z-50"
          in:swap={{ transition }}
          out:swap={{ transition }}>
          {#if person.twitter != null}
            <nav
              bind:this={navEl}
              class="flex flex-col items-start mt-4 relative">
              {#if topicActiveButtonRect}
                <div
                  style="{getRectStyle(padRect(topicActiveButtonRect, 12, 4))};
                  transition: width 0.2s, height 0.2s, left 0.2s, top 0.2s;
                  background-color: rgba(242, 219, 192, 0.7);"
                  class="active-indicator absolute rounded-full z-10" />
              {/if}
              {#each topics as topic (topic)}
                <button
                  data-topic={topic}
                  on:click={() => selectTopic(topic)}
                  class="rounded-full mb-4 text-left z-20">
                  {topic}
                </button>
              {/each}
            </nav>

            <ul
              bind:this={tweetScroller}
              use:scrollSectionReporter={{ itemData: 'topic', selector: ':scope > .topic-header', offsetTop: 200 }}
              on:updateScrollSection={e => (currentTopic = e.detail)}
              in:hideOverflowOnTransition={{ transition }}
              out:hideOverflowOnTransition={{ transition }}
              style="font-family: {twitterFont};"
              class="flex bg-white flex-col border-l border-r
              border-c-border-twitter flex-1 overflow-y-auto max-h-full
              text-c-text-twitter mx-10">
              {#each tweets as topicGroup (topicGroup.topic)}
                <li
                  data-topic={topicGroup.topic}
                  class="topic-header px-4 py-2 bg-c-border-twitter
                  text-c-link-2-twitter text-sm">
                  {topicGroup.topic}
                </li>
                {#each topicGroup.tweets as tweet, i}
                  <li
                    style="transition: background-color 0.25s;"
                    class="border-b border-c-border-twitter flex flex-col
                    cursor-pointer hover:bg-c-bg-secondary-twitter">
                    <a
                      class="flex flex-col"
                      target="_blank"
                      href={getTweetLink(person, tweet.text)}>
                      <div class="flex p-4">
                        <img
                          class="bg-c-button-2-twitter rounded-full p-2"
                          style="width: 49px; height: 49px;"
                          alt="Fist Icon"
                          src="{staticPath}/fist.svg" />
                        <div class="pl-2 flex flex-col">
                          <div class="flex">
                            <h5 class="font-bold">Your Name</h5>
                            <span class="ml-1 text-c-header-twitter">
                              @yourtwitter
                            </span>
                            <span
                              class="inline-block mx-1 text-c-header-twitter">
                              ·
                            </span>
                            <span class="text-c-header-twitter">now</span>
                          </div>

                          <TweetText
                            class="pt-1"
                            text={`@${person.twitter} ${tweet.text}`} />

                          <div class="pt-4">
                            <a
                              href={getTweetLink(person, tweet.text)}
                              target="_blank"
                              on:click|stopPropagation={() => true}
                              class="inline-flex transition-colors items-center
                              font-medium rounded-full text-c-link-2-twitter
                              hover:text-c-link-twitter
                              hover:bg-c-button-2-twitter px-3 py-1 -ml-3
                              font-thin">
                              <Icon class="mr-1" icon={twitter} />
                              Share on Twitter
                            </a>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                {/each}
              {/each}
            </ul>
          {:else}
            <div
              style="height: 100%"
              class="flex flex-col items-center flex-1 border-r border-l
              border-c-border-twitter bg-white mr-10">
              <AddTwitterAccount {person} />
            </div>
          {/if}

          <div
            style="max-width: 375px; min-width: 300px; flex: 0;"
            class="pt-6">
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
    @apply font-semibold text-c-header-1 text-xl mt-4;
  }

  .detail {
    @apply text-lg;
  }

  .arrow {
    @apply block absolute;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 10px 12px 10px;
    border-color: transparent transparent var(--c-border-3) transparent;
    z-index: 5;
    transform: translate(-50%, -100%);
  }

  .transition-colors {
    transition: background-color 0.25s, color 0.25s;
  }
</style>