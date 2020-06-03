<script>
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

  let currentProfile = 1;

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
  <h2 class="text-4xl font-bold">{profile.name}</h2>
  {#each fields as field}
    <p class="text-2xl mt-4">
      <span class="mr-2">{field.name}:</span>
      <span class="text-brown-gray">{profile[field.key]}</span>
    </p>
  {/each}
</div>
