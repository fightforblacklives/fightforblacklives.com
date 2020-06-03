<script>
  import { fade, fly } from "svelte/transition";
  import { onDestroy, onMount } from "svelte";
  import { delay } from "utils/time";

  export let style = "";

  const profiles = [
    {
      name: "Breonna Taylor",
      date: "03/12/2019",
      mannerOfDeath: "Shot",
      armed: "Unarmed",
      age: 26,
      sex: "Female",
      location: "Louisville, KY",
      fleeing: "Not fleeing",
      bodyCamera: "No body camera"
    },

    {
      name: "Chris E.",
      date: "03/16/2020",
      mannerOfDeath: "Shot",
      armed: "Unarmed",
      age: 45,
      sex: "Male",
      location: "Detroit, MI",
      fleeing: "Not fleeing",
      bodyCamera: "No body camera"
    }
  ];

  let currentProfile = 0;

  let swapping = false;
  let swapInterval;

  let animationDuration = 200;
  let animationDimension = "y";

  onMount(() => {
    swapInterval = setInterval(async () => {
      swapping = true;

      await delay(animationDuration - 5);

      currentProfile = (currentProfile + 1) % profiles.length;
      swapping = false;
    }, 3000);
  });

  onDestroy(() => {
    clearInterval(swapInterval);
  });

  $: profile = profiles[currentProfile];

  const fields = [
    { name: "Date", key: "date" },
    { name: "Manner of Death", key: "mannerOfDeath" },
    { name: "Armed", key: "armed" },
    { name: "Age", key: "age" },
    { name: "Sex", key: "sex" },
    { name: "Location", key: "location" },
    { name: "Fleeing the Scene", key: "fleeing" },
    { name: "Body Camera", key: "bodyCamera" }
  ];
</script>

<div {style} class="border-2 border-tan {$$props.class || ''} p-12 items-start">
  {#if !swapping}
    <h2
      in:fly={{ duration: animationDuration, [animationDimension]: -20 }}
      out:fly={{ duration: animationDuration, [animationDimension]: 20 }}
      class="text-4xl font-bold">
      {profile.name}
    </h2>
  {/if}
  {#each fields as field (field.name)}
    {#if !swapping}
      <p
        class="text-2xl mt-4"
        in:fly={{ duration: animationDuration, [animationDimension]: -20 }}
        out:fly={{ duration: animationDuration, [animationDimension]: 20 }}>
        <span class="mr-4">{field.name}:</span>
        <span class="text-brown-gray inline-block">{profile[field.key]}</span>
      </p>
    {/if}
  {/each}
</div>
