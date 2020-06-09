<script>
  import { getDataByAddress } from "utils/api";
  import { onMount, tick } from "svelte";
  import ZipHeader from "components/ZipHeader";
  import { staticPath } from "config/static";
  import LoadImage from "components/LoadImage";
  import MessagingDropdown from "components/MessagingDropdown";
  import Icon from "components/Icon";
  import RepCardInfo from "components/RepCardInfo";
  import {
    twitter,
    fasEnvelope,
    fasPhone,
    facebook,
    fasAngleRight,
    fasUser,
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
    "Broken Windows Policing",
  ];

  const tweetTopicsBase = [
    {
      topic: "Reduce Police Funding",
      tweets: [
        `When we look at police and how they're using their resources, it makes a clear case for reducing their budget, and then using those funds for social services, harm reduction & community-based public safety.\n\nReduce the budget for our police!`,
        `The economic harm from the coronavirus pandemic can be reduced by taking money from the budget for police and reappropriating those funds to healthcare and social services.\n\nReduce the budget for our police!`,
        `It is inappropriate to increase in our police department's budget. Our tax dollars continue to fund violence against Black and Brown people, as seen with #GeorgeFloyd, #BreonnaTaylor and many others before them, funding the police is not the solution for change.`,
      ],
    },

    {
      topic: "Police Accountability",
      tweets: [
        `Establish a permanent Special Prosecutor's Office for cases of police violence. This office should be required to prosecute all cases where police kill or injure a civilian, in-custody deaths & cases where a civilian alleges criminal misconduct against an officer`,
        `Remove barriers to reporting police misconduct! Require officers to give civilians their name, badge number, reason for the stop and a card with instructions for filing a complaint to a civilian oversight structure.\n\nIncrease accountability for our police!`,
        `Communities need an urgent way to ensure police officers are held accountable for violence. Establish an all-civilian oversight structure with discipline power that includes a Police Commission and Civilian Complaints Office.\n\nMake police accountable!`,
      ],
    },

    {
      topic: "Use of Force",
      tweets: [
        `Establish standards for reporting of police use of deadly force.\n\n1) Require reporting of police killings and serious injuries of civilians\n2) Require the names of both the officer(s) involved and victim(s) to be released within 72 hours of a deadly force incident.`,
        `Set a standard to monitor how police use force and proactively hold officers accountable for excessive force. Make our police report all uses of force to a public database with information on injuries and victim demographics.`,
        `Strengthen police use of force policies.\n\n1) Restrict officers from using deadly force unless all alternatives have been exhausted\n2) Ban using force on a person for talking back or running away\n3) Ban chokeholds & transporting people face down in a vehicle`,
      ],
    },

    {
      topic: "Policing for Profit",
      tweets: [
        `End police department quotas for tickets and arrests. Ban police departments from using ticket or arrest quotas to evaluate the performance of police officers.\n\nEnd policing for profit!`,
        `Require police departments to bear the cost of police misconduct. Require the cost of misconduct settlements to be paid from the police department budget instead of the City's general fund. When they go over-budget on lawsuit payments, don't give them more money`,
        `Prevent police from taking money/property from innocent people. Prohibit seizing property of civilians unless they are convicted of a crime. Prohibit police from keeping any property that has legally been forfeited. This property should go to the city's budget`,
        `Ban issuing fines for civilians who fail to appear in court for traffic violations. Ban generating more than 10% of total municipal revenue from fines & fees. Prohibit courts from ordering individuals on parole/probation to pay supervision and correctional fees.`,
      ],
    },
    {
      topic: "Invest in Community",
      tweets: [
        `Reallocate funds from policing and incarceration to long-term strategies for education, restorative justice services, and employment programs.\n\nInvest in our community, not cops!`,
        `I urge you to move money out of policing, prisons, and the criminal legal system that are clearly steeped in racism–invest in a safe, liberated future by moving money into schools, healthcare, & transformative justice promoting well-being for our community.`,
        `Use your power and my tax dollars to support healthy, stable communities that do not rely on imprisonment to reduce harm.\n\nInvest in our community, not cops!`,
      ],
    },

    {
      topic: "Broken Windows Policing",
      tweets: [
        `Decriminalize activities that pose no threat to public safety but are often used to police Black bodies: disorderly conduct, trespassing, loitering, marijuana possession, jaywalking, disturbing the peace, spitting, biking on the sidewalk & fare evasion.`,
        `Establish enforceable protections against racial profiling and police interventions solely based on "suspicion" of one’s Blackness or other aspects of their identity.`,
      ],
    },
  ];

  let tweetTopics = tweetTopicsBase.map((topic) => {
    return {
      topic: topic.topic,
      tweets: topic.tweets.map((value, i) => ({
        text: value,
        id: topic + i,
      })),
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

  const getGridColumns = (gridEl) => {
    return window.getComputedStyle(gridEl)["grid-template-columns"].split(" ")
      .length;
  };

  const getExitTransitionType = (lastPerson, nextPerson) => {
    const lastPos = zipCodeBundle.people.findIndex(
      (person) => person.id === lastPerson
    );
    const nextPos = zipCodeBundle.people.findIndex(
      (person) => person.id === nextPerson
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
        duration: animationDuration,
      };
    }

    return { type: "collapse-expand", duration: animationDuration };
  };

  const getTransitionType = (lastPerson, nextPerson) => {
    const lastPos = zipCodeBundle.people.findIndex(
      (person) => person.id === lastPerson
    );
    const nextPos = zipCodeBundle.people.findIndex(
      (person) => person.id === nextPerson
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
        direction: nextPos < lastPos ? 1 : -1,
      };
    }

    return { type: "collapse-expand", duration: animationDuration };
  };

  let cardWidth;
  let windowWidth = window.innerWidth;
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
    <ZipHeader {zipCodeBundle} on:submit={() => loadNewZip()} bind:zipCode />

    <ul bind:this={gridEl} class="grid contained-sm mb-24">
      {#each zipCodeBundle.people as person, i (person.id)}
        <li
          class:border-t={i === 0}
          class="card relative sm:self-start flex flex-col border-b
          border-c-border-3 lg:border-b-0 lg:border-t-0">
          <div
            on:click={(e) => selectCard(e, person)}
            style="transition: box-shadow {(animationDuration / 1000).toFixed(4)}s;
            height: {cardWidth}px;"
            class="hidden sm:flex select-none cursor-pointer card-content
            flex-col border-2 rounded-lg border-c-border-3 {selectedPerson === person.id ? 'shadow-lg' : ''}
            ">
            <div class="flex flex-1 items-center justify-center">
              {#if person.image}
                <LoadImage
                  style="width: {0.4 * cardWidth}px; height: {0.4 * cardWidth}px"
                  class="card-image object-cover rounded-full mx-auto border-2
                  border-c-border-3"
                  alt="Portrait of {person.name}"
                  src={person.image} />
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
            on:click={(e) => selectCard(e, person)}
            class="card-content flex flex-col sm:hidden py-5">
            <div class="flex contained items-center">
              {#if person.image}
                <LoadImage
                  class="card-image object-cover rounded-full mx-auto w-20 h-20
                  border-2 border-c-border-3"
                  alt="Portrait of {person.name}"
                  src={person.image} />
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
              on:lastRect={(e) => (lastArrowRect = e.detail)}
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
