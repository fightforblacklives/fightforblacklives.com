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

  let swapped = new Set();
  let swapping = false;
  let swapInterval;

  let animationDuration = 100;
  let animationDimension = "y";

  onMount(() => {
    swapInterval = setInterval(async () => {
      swapped = new Set();

      const nextProfile = (currentProfile + 1) % profiles.length;

      swapping = "name";
      await delay(animationDuration);
      swapped.add("name");

      for (const field of fields) {
        swapping = field.key;
        await delay(animationDuration * 0.9);
        swapped.add(field.key);
      }

      currentProfile = nextProfile;
      swapping = false;
    }, 4500);
  });

  onDestroy(() => {
    clearInterval(swapInterval);
  });

  $: profile = profiles[currentProfile];
  $: nextProfile = profiles[(currentProfile + 1) % profiles.length];

  const getField = (swapped, swapping, profile, nextProfile, key) => {
    return swapping === false || !swapped.has(key)
      ? profile[key]
      : nextProfile[key];
  };

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
  <h2 style="height: 1.4em" class="text-4xl font-bold">
    {#if swapping !== 'name'}
      <span
        class="inline-block"
        in:fly={{ duration: animationDuration, [animationDimension]: 20 }}
        out:fly={{ duration: animationDuration, [animationDimension]: -20 }}>
        {getField(swapped, swapping, profile, nextProfile, 'name')}
      </span>
    {/if}
  </h2>
  {#each fields as field (field.name)}
    <p class="text-2xl mt-4">
      <span class="mr-2">{field.name}:</span>

      {#if swapping !== field.key}
        <span
          in:fly={{ duration: animationDuration, [animationDimension]: 15 }}
          out:fly={{ duration: animationDuration, [animationDimension]: -15 }}
          class="text-brown-gray inline-block">
          {getField(swapped, swapping, profile, nextProfile, field.key)}
        </span>
      {/if}
    </p>
  {/each}
</div>
