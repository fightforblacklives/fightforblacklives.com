<script>
  import { getDataByAddress } from "utils/api";
  import { onMount, tick } from "svelte";
  import { staticPath } from "config/static";
  import MessagingDropdown from "components/MessagingDropdown";
  import Icon from "components/Icon";
  import RepCardInfo from "components/RepCardInfo";
  import {
    twitter,
    fasEnvelope,
    fasPhone,
    facebook,
    fasUser
  } from "config/icons.ts";

  let animationDuration = 250;
  let gridEl;

  const getZipCode = async () => {
    zipCodeBundle = await getDataByAddress(zipCode);
  };

  const loadNewZip = () => {
    window.location.href = `${staticPath}/your-reps?zip=${zipCode}`;
  };

  let zipCode = process.browser
    ? new URLSearchParams(window.location.search).get("zip")
    : null;

  let lastArrowRect = null;

  let topics = [
    "Police Accountability",
    "Use of Force",
    "Policing for Profit",
    "Invest in Community",
    "Mental Health",
    "Broken Windows Policing",
    "Defund the Police"
  ];

  let testTweets = [
    {
      id: "test2",
      topic: "Police Accountability",
      text: "This is my text. This is not long."
    },

    {
      id: "test1",
      topic: "Police Accountability",
      text:
        "This tweet is longer and more interisting with more #hashtags and squiggles."
    },

    {
      id: "test4",
      topic: "Use of Force",
      text:
        "This tweet is longer and more interisting with more #hashtags and squiggles."
    },
    {
      id: "test5",
      topic: "Policing for Profit",
      text:
        "This tweet is longer and more interisting with more #hashtags and squiggles."
    },
    {
      id: "test6",
      topic: "Invest in Community",
      text:
        "This tweet is longer and more interisting with more #hashtags and squiggles."
    },

    {
      id: "test7",
      topic: "Mental Health",
      text:
        "This tweet is longer and more interisting with more #hashtags and squiggles."
    },

    {
      id: "test7",
      topic: "Broken Windows Policing",
      text:
        "This tweet is longer and more interisting with more #hashtags and squiggles."
    }
  ];

  let tweetTopics = topics.map(topic => {
    return {
      topic: topic,
      tweets: testTweets
    };
  });

  let zipCodeBundle;

  let lastPerson;
  let nextPerson;
  let selectedPerson;
  let dropdownSize = 500;

  const selectCard = async (e, person) => {
    if (selectedPerson === person.id) {
      lastPerson = person.id;
      nextPerson = null;

      await tick();

      selectedPerson = null;
      lastPerson = null;
    } else {
      lastPerson = selectedPerson;
      nextPerson = person.id;

      await tick();

      selectedPerson = person.id;
    }
  };

  const getGridColumns = gridEl => {
    return window.getComputedStyle(gridEl)["grid-template-columns"].split(" ")
      .length;
  };

  const getExitTransitionType = (lastPerson, nextPerson) => {
    const lastPos = zipCodeBundle.people.findIndex(
      person => person.id === lastPerson
    );
    const nextPos = zipCodeBundle.people.findIndex(
      person => person.id === nextPerson
    );
    const columns = getGridColumns(gridEl);
    const lastRow = Math.floor(lastPos / columns);
    const nextRow = Math.floor(nextPos / columns);

    if (nextPos == -1) {
      return { type: "collapse-expand", duration: animationDuration };
    }

    if (lastRow === nextRow) {
      return {
        type: "swap",
        direction: nextPos < lastPos ? -1 : 1,
        duration: animationDuration
      };
    }

    return { type: "collapse-expand", duration: animationDuration };
  };

  const getTransitionType = (lastPerson, nextPerson) => {
    const lastPos = zipCodeBundle.people.findIndex(
      person => person.id === lastPerson
    );
    const nextPos = zipCodeBundle.people.findIndex(
      person => person.id === nextPerson
    );
    const columns = getGridColumns(gridEl);

    const lastRow = Math.floor(lastPos / columns);
    const nextRow = Math.floor(nextPos / columns);

    if (lastPos == -1) {
      return { type: "collapse-expand", duration: animationDuration };
    }

    if (lastRow === nextRow) {
      return {
        type: "swap",
        duration: animationDuration,
        direction: nextPos < lastPos ? 1 : -1
      };
    }

    return { type: "collapse-expand", duration: animationDuration };
  };

  let cardWidth;

  onMount(() => {
    getZipCode();
  });
</script>

<svelte:head>
  {#if zipCodeBundle}
    <title>
      Fight for Black Lives - Elected Officials for {zipCodeBundle.city}, {zipCodeBundle.state}
      {zipCode}
    </title>
  {:else}
    <title>Fight for Black Lives</title>
  {/if}
</svelte:head>

{#if zipCodeBundle}
  <div class="flex flex-col flex-1">
    <div class="flex flex-col mt-16 mb-24">
      <div class="flex contained">
        <input
          pattern={'\\d*'}
          maxlength="5"
          style="max-width: 100px;"
          on:keydown={e => {
            if (e.key === 'Enter') {
              loadNewZip();
            }
          }}
          bind:value={zipCode}
          class="text-4xl mr-auto bg-transparent" />
        <h2 class="text-4xl text-c-header-1">
          {zipCodeBundle.city}, {zipCodeBundle.state}
        </h2>

      </div>

      <hr style="height: 1.5px" class="bg-c-border-2 contained" />

      <span class="contained text-lg pt-2 text-c-header-1">Zip Code</span>
    </div>

    <ul bind:this={gridEl} class="grid sm:contained mb-24">
      {#each zipCodeBundle.people as person (person.id)}
        <li class="card relative sm:self-start flex flex-col">
          <div
            on:click={e => selectCard(e, person)}
            style="transition: box-shadow {(animationDuration / 1000).toFixed(4)}s;
            height: {cardWidth}px;"
            class="hidden sm:flex select-none cursor-pointer card-content
            flex-col border-2 rounded-lg border-c-border-3 {selectedPerson === person.id ? 'shadow-lg' : ''}
            ">
            <div class="flex flex-1 items-center justify-center">
              {#if person.image}
                <img
                  style="width: {0.5 * cardWidth}px; height: {0.5 * cardWidth}px"
                  class="card-image object-cover rounded-full mx-auto"
                  alt="Portrait of {person.name}"
                  src={person.image.startsWith('http://') ? `https://external-content.duckduckgo.com/iu/?u=${encodeURIComponent(person.image)}` : person.image} />
              {:else}
                <div
                  class="w-40 h-40 border-2 border-c-border-3 flex flex-col
                  items-center justify-center rounded-full mx-auto">
                  <Icon icon={fasUser} class="text-5xl text-c-header-1" />
                </div>
              {/if}
            </div>

            <RepCardInfo {person} />
          </div>

          <div class="card-content flex sm:hidden border-t-2 border-c-border-3">
            <RepCardInfo {person} />
          </div>

          {#if selectedPerson === person.id}
            <MessagingDropdown
              transition={person.id === lastPerson ? getExitTransitionType(lastPerson, nextPerson) : getTransitionType(lastPerson, selectedPerson)}
              {lastArrowRect}
              on:lastRect={e => (lastArrowRect = e.detail)}
              exiting={person.id === lastPerson}
              {person}
              tweets={tweetTopics}
              height={dropdownSize} />
          {/if}
        </li>
      {/each}
      <li bind:offsetWidth={cardWidth} />
    </ul>
  </div>
{/if}

<style>
  @import "../style/shared.css";

  .grid {
    @apply flex flex-col;
    max-width: none;

    @media only screen and (max-width: 1344px) {
      max-width: calc(100vw - 64px);
    }

    @screen sm {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 32px;
    }
  }
</style>
