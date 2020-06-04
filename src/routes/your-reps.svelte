<script>
  import { getZipCodeBundle } from "utils/api";
  import { onMount } from "svelte";
  import MessagingDropdown from "components/MessagingDropdown";

  let zipCode = window.location.hash.slice(1, 6);

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
      text: "This is my text. This is not long. #kkkkkgggg"
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
  let zipCodeBundle = {
    city: "New York",
    state: "New York",
    people: [
      {
        id: 0,
        image:
          "https://upload.wikimedia.org/wikipedia/commons/9/9a/Kirsten_Gillibrand%2C_official_photo%2C_116th_Congress.jpg",
        title: "United States Senator",
        name: "Kirsten Gillibrand",
        phone: "202-224-6542",
        address: "478 Russell Senate Office Building Washington, DC 20510",
        email: "mockdata@gmail.com",
        party: "Democrat",
        state: "New York"
      },

      {
        id: 1,
        image:
          "https://upload.wikimedia.org/wikipedia/commons/9/9a/Kirsten_Gillibrand%2C_official_photo%2C_116th_Congress.jpg",
        title: "ActivatedSenatorV2",
        name: "Kristi G. Bloq 2",
        phone: "202-224-6542",
        email: "mockdata@gmail.com",
        address: "478 Russell Senate Office Building Washington, DC 20510",
        party: "DemiLavato",
        state: "NewerY"
      }
    ]
  };

  let selectedPerson = 0;
  let dropdownSize = 500;

  const getZipCode = () => {
    /*
    getZipCodeBundle(zipCode).then(res => {
      zipCodeBundle = res;
    });
    */
  };

  onMount(() => {
    getZipCode();
  });
</script>

<div class="flex flex-col flex-1">
  <div class="flex flex-col mt-16 mb-24">
    <div class="flex contained">
      <h1 class="text-4xl mr-auto">{zipCode}</h1>
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
        class="relative border-2 rounded-lg border-c-border-3 self-start">
        <div class="absolute top-0 left-0 w-full h-full flex flex-col">
          <div class="flex flex-1 items-center">
            <img
              class="w-32 h-32 object-cover rounded-full mx-auto"
              alt="Portrait of {person.name}"
              src={person.image} />
          </div>
          <div class="p-4">
            <h4 class="font-semibold">{person.title}</h4>
            <h3>{person.name}</h3>
            <h5>{person.party}</h5>
          </div>
        </div>

        {#if selectedPerson === person.id}
          <MessagingDropdown {person} {tweets} height={dropdownSize} />
        {/if}
      </li>
    {/each}
  </ul>
</div>

<style>
  @import "../style/shared.css";

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 32px;
  }
</style>
