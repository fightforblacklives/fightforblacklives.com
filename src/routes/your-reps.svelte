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
    fasAngleRight,
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
    "Reduce Police Funding",
    "Police Accountability",
    "Use of Force",
    "Policing for Profit",
    "Invest in Community",
    "Mental Health",
    "Broken Windows Policing"
  ];

  let testTweets = [
    {
      id: "test2",
      text: "Help us write impactful tweets!"
    },

    {
      id: "test3",
      text: "Help us write impactful tweets!"
    },

    {
      id: "test4",
      text: "Help us write impactful tweets!"
    },

    {
      id: "test5",
      text: "Help us write impactful tweets!"
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
  let windowWidth;
  let windowHeight;

  $: dropdownSize =
    windowWidth < 640
      ? windowHeight - 110
      : windowWidth < 1024
      ? windowHeight - cardWidth - 100
      : 500;

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

<svelte:window bind:innerHeight={windowHeight} bind:innerWidth={windowWidth} />

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

    <ul bind:this={gridEl} class="grid contained-sm mb-24">
      {#each zipCodeBundle.people as person, i (person.id)}
        <li
          class:border-t={i === 0}
          class="card relative sm:self-start flex flex-col border-b
          border-c-border-3 lg:border-b-0 lg:border-t-0">
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
                  style="width: {0.4 * cardWidth}px; height: {0.4 * cardWidth}px"
                  class="card-image object-cover rounded-full mx-auto border-2
                  border-c-border-3"
                  alt="Portrait of {person.name}"
                  src={person.image.startsWith('http://') ? `https://external-content.duckduckgo.com/iu/?u=${encodeURIComponent(person.image)}` : person.image} />
              {:else}
                <div
                  style="width: {0.4 * cardWidth}px; height: {0.4 * cardWidth}px"
                  class="border-2 border-c-border-3 flex flex-col items-center
                  justify-center rounded-full mx-auto">
                  <Icon icon={fasUser} class="text-5xl text-c-header-1" />
                </div>
              {/if}
            </div>

            <RepCardInfo class="text-center items-center p-4" {person} />
          </div>

          <div
            on:click={e => selectCard(e, person)}
            class="card-content flex flex-col sm:hidden py-5">
            <div class="flex contained items-center">
              {#if person.image}
                <img
                  class="card-image object-cover rounded-full mx-auto w-20 h-20
                  border-2 border-c-border-3"
                  alt="Portrait of {person.name}"
                  src={person.image.startsWith('http://') ? `https://external-content.duckduckgo.com/iu/?u=${encodeURIComponent(person.image)}` : person.image} />
              {:else}
                <div
                  class="w-20 h-20 border-2 border-c-border-3 flex flex-col
                  items-center justify-center rounded-full mx-auto">
                  <Icon icon={fasUser} class="text-5xl text-c-header-1" />
                </div>
              {/if}

              <RepCardInfo
                class="flex-1 text-left items-stretch pl-6"
                featureTextClass="text-xl"
                secondaryTextClass="text-lg"
                {person} />

              <Icon
                style="transition: transform 0.25s; transform: {selectedPerson == person.id ? 'rotate(90deg)' : 'rotate(0deg)'}"
                class="text-2xl text-c-header-1"
                icon={fasAngleRight} />
            </div>
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

  .card {
    @screen sm {
      border-width: 0 !important;
    }
  }

  .grid {
    @apply flex flex-col;

    @media only screen and (max-width: 1344px) and (min-width: 640px) {
      max-width: calc(100vw - 64px);
    }

    @screen sm {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 32px;
    }
  }
</style>
