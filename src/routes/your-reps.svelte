<script>
  import { getZipCodeBundle, getDataByAddress } from "utils/api";
  import { onMount } from "svelte";
  import { staticPath } from "config/static";
  import MessagingDropdown from "components/MessagingDropdown";
  import Icon from "components/Icon";
  import {
    twitter,
    fasEnvelope,
    fasPhone,
    facebook,
    fasUser
  } from "config/icons.ts";
  const getZipCode = async () => {
    zipCodeBundle = await getDataByAddress(zipCode);
  };

  const loadNewZip = () => {
    window.history.pushState(
      {},
      `Results for ${zipCode}`,
      `${staticPath}/your-reps#${zipCode}`
    );
    getZipCode();
  };

  let zipCode = process.browser ? window.location.hash.slice(1, 6) : null;

  let tweets = [
    {
      id: "test2",
      topics: [
        "Police Accountability",
        "Use of Force",
        "Policing for Profit",
        "Invest in Community",
        "Mental Health",
        "Broken Windows Policing"
      ],
      text: "This is my text. This is not long."
    },

    {
      id: "test1",
      topics: ["Third Topic"],
      text:
        "This tweet is longer and more interisting with more #hashtags and squiggles."
    },

    {
      id: "test4",
      topics: ["Third Topic"],
      text:
        "This tweet is longer and more interisting with more #hashtags and squiggles."
    },
    {
      id: "test5",
      topics: ["Third Topic"],
      text:
        "This tweet is longer and more interisting with more #hashtags and squiggles."
    },
    {
      id: "test6",
      topics: ["Third Topic"],
      text:
        "This tweet is longer and more interisting with more #hashtags and squiggles."
    },

    {
      id: "test7",
      topics: ["Third Topic"],
      text:
        "This tweet is longer and more interisting with more #hashtags and squiggles."
    }
  ];
  let zipCodeBundle;

  let selectedPerson;
  let dropdownSize = 500;

  const getParty = party => {
    if (party == null) {
      return "";
    }

    party = party.toLowerCase();

    if (party.includes("independent")) return "(I)";
    if (party.includes("democrat")) return "(D)";
    if (party.includes("republic")) return "(R)";

    return "";
  };

  onMount(() => {
    getZipCode();
  });
</script>

{#if zipCodeBundle}

  <div class="flex flex-col flex-1">
    <div class="flex flex-col mt-16 mb-24">
      <div class="flex contained">
        <input
          pattern={'\\d*'}
          maxlength="5"
          on:keydown={e => {
            if (e.key === 'Enter') {
              loadNewZip();
            }
          }}
          bind:value={zipCode}
          class="text-4xl mr-auto" />
        <h2 class="text-4xl text-c-header-1">
          {zipCodeBundle.city}, {zipCodeBundle.state}
        </h2>

      </div>

      <hr style="height: 1.5px" class="bg-c-border-2 contained" />

      <span class="contained text-lg pt-2 text-c-header-1">Zip Code</span>
    </div>

    <ul class="grid contained mb-24">
      {#each zipCodeBundle.people as person (person.id)}
        <li
          style="padding-top: 100%; margin-bottom: {selectedPerson === person.id ? dropdownSize : 0}px"
          class="relative border-2 rounded-lg border-c-border-3 {selectedPerson === person.id ? 'shadow-lg' : ''}
          self-start">
          <div
            on:click={() => (selectedPerson === person.id ? (selectedPerson = null) : (selectedPerson = person.id))}
            class="absolute top-0 left-0 w-full h-full flex flex-col">
            <div class="flex flex-1 items-center justify-center">
              {#if person.image}
                <img
                  class="w-40 h-40 object-cover rounded-full mx-auto"
                  alt="Portrait of {person.name}"
                  src={person.image} />
              {:else}
                <div
                  class="w-40 h-40 border-2 border-c-border-3 flex flex-col
                  items-center justify-center rounded-full mx-auto">
                  <Icon icon={fasUser} class="text-5xl text-c-header-1" />
                </div>
              {/if}

            </div>

            <div class="p-4 flex flex-col text-center items-center">
              <h4 class="font-semibold">
                {person.name}
                <span class="font-normal">{getParty(person.party)}</span>
              </h4>
              <h3 class="text-sm">{person.title}</h3>

              <div class="flex mt-3">
                {#if person.twitter}
                  <Icon class="px-2" icon={twitter} />
                {/if}
                {#if person.phone}
                  <Icon class="px-2" icon={fasPhone} />
                {/if}
                {#if person.email}
                  <Icon class="px-2" icon={fasEnvelope} />
                {/if}
              </div>
            </div>

          </div>

          {#if selectedPerson === person.id}
            <MessagingDropdown {person} {tweets} height={dropdownSize} />
          {/if}
        </li>
      {/each}
    </ul>
  </div>
{/if}

<style>
  @import "../style/shared.css";

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 32px;
  }
</style>
