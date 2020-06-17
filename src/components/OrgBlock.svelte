<script>
  import { staticPath } from "config/static";
  import { onDestroy, onMount } from "svelte";
  import Slides from "components/Slides";

  const slides = [
    {
      id: "Color of Change",
      image: "color_of_change_logo.png",
      description: [
        "Color Of Change is the nation’s largest online racial justice organization.",
        "They help people respond effectively to injustice in the world around us. As a national online force driven by 1.7 million members, they move decision-makers in corporations and government to create a more human and less hostile world for Black people in America."
      ]
    },

    {
      id: "Campaign Zero",
      image: "campaignzero_logo.png",
      description: [
        "Over 1,000 people are killed by police every year in America.",
        "Campaign Zero calls on local, state, and federal lawmakers to take immediate action to adopt data-driven policy solutions to end this violence and hold police accountable."
      ]
    },

    {
      id: "Minnesota Freedom Fund",
      image: "MinnesotaFreedomFund_logo.png",
      description: [
        "An organization that helps pay jail bonds for those who cannot afford to fight discriminatory and coercive jailing in Minnesota, which has been the epicenter of protests after Floyd's death in the state.",
        "Every dollar of financial donations to Minnesota Freedom Fund helps us help free people"
      ]
    },

    {
      id: "National Lawyers Guild Mass Defense Fund",
      image: "National_Lawyers_Guild_Mass_Defense_Fund.png",
      description: [
        "The NLG Mass Defense Program is currently working across the country to protect the rights of those protesting the police killing of George Floyd and the broader pattern of ongoing racialized police violence.",
        "Their chapters and members are on the ground in dozens of cities right now supporting the right to dissent. Your donation will help provide legal support for political activists and movements for racial and economic justice."
      ]
    },

    {
      id: "Critical Resistance",
      image: "cr-logo-transparent.png",
      description: [
        "Critical Resistance seeks to build an international movement to end the Prison Industrial Complex by challenging the belief that caging and controlling people makes us safe.",
        "They believe that basic necessities such as food, shelter, and freedom are what really make our communities secure. As such, their work is part of global struggles against inequality and powerlessness."
      ]
    },

    {
      id: "Black Visions Collective",
      image: "BLACK-VISIONS-COLLECTIVE-LOGO.png",
      description: [
        "Black Visions Collective envisions a world in which ALL Black Lives Matter.",
        "They use the guidance and brilliance of our ancestors as well as the teachings of our own experiences to pursue our commitment to dismantling systems of oppression and violence. They are determined in our pursuit of dignity and equity for all."
      ]
    }
  ];

  let currentSlide = slides[0].id;
  let windowWidth = window.innerWidth;

  $: slideWidth = windowWidth
    ? windowWidth > 1024
      ? 500
      : windowWidth - 64
    : 500;
</script>

<svelte:window bind:innerWidth={windowWidth} />

<div
  style="min-height: 500px;"
  class="flex slide-container border-2 border-c-border-3 lg:ml-16 mt-16 lg:mt-0
  rounded-lg">
  <Slides width="{slideWidth}px" {slides} bind:currentSlide let:slide>
    <div class="flex flex-col items-center p-12 pt-0 text-lg">
      <div style="max-height: 300px;" class="flex-1 flex flex-col">
        <img
          alt={`${slide.id} Logo`}
          style="max-width: {Math.min(slideWidth - 96, 500)}px; max-height:
          170px;"
          class="my-auto"
          src="{staticPath}/{slide.image}" />
      </div>

      {#each slide.description as paragraph}
        <p class="text-lg md:text-base self-stretch text-left mt-4">
          {paragraph}
        </p>
      {/each}
    </div>
  </Slides>
</div>

<style>
  .slide-container {
    @apply pt-12;
  }
</style>
