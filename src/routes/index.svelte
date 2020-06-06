<script>
  import Hero from "components/Hero";
  import ZipForm from "components/ZipForm";

  import StoryCard2 from "components/StoryCard2";
  import scrollLink from "mixins/scrollLink";
  import { staticPath } from "config/static";
  import ScrollOver from "components/ScrollOver";

  let zipCode = "";
  let pristine = true;

  const zipCodePattern = /^[0-9]{5}$/;

  const submit = () => {
    if (zipCodePattern.test()) {
    } else {
      pristine = false;
    }
  };
</script>

<svelte:head>
  <title>Fight for Black Lives</title>
</svelte:head>

<div id="enter-your-zip-code" class="flex flex-col flex-1 self-stretch">
  <hr
    style="height: 4px"
    class="bg-c-border-2 contained border-0 hidden md:block" />

  <Hero />

  <div class="contained mb-40">

    <div class="flex flex-col items-start lg:flex-row">
      <div class="text-section flex-1 text-xl pr-6">
        <h1 id="what-can-i-do" class="section-header">What can I do?</h1>

        <p class="section-text">
          Demand change by way of legislation from every level of government.
          These elected officials serve YOU.
        </p>

        <p class="section-text">
          Use this tool to get contact info for your Local, State & Federal
          representatives － that’s email, phone numbers, office addresses,
          social media.
        </p>

        <p>
          We provide canned messages you can tweet on a number of topics that
          all support ending police violence against black and brown people in
          America.
        </p>
      </div>

      <div class="flex-1 mt-8 lg:mt-0 p-8 lg:py-0 lg:pr-0">
        <img
          style="border-radius: 1.3%;"
          class="flex-1 w-full h-full min-w-0 shadow-lg border
          border-c-border-twitter"
          alt="Tweet sayink {`"Find reliable federal tracking and reporting of all incedents involving the use of deadly force by law enforcement, whether lethal or not. Do something!"`}"
          src="{staticPath}/mock_tweet.png" />
      </div>
    </div>

  </div>

  <div class="contained mb-40">
    <div class="flex b-24 items-center flex-col lg:flex-row">
      <div class="text-section flex-1 pr-6">
        <h1 id="why-should-i-do-it" class="section-header">
          Why should I do it?
        </h1>

        <p class="section-text">
          Since January 1st 2015,
          <b>1262</b>
          Black men and women were shot and killed by police in America.
        </p>
        <p class="section-text">
          <b>717</b>
          of these victims were not fleeing the scene.
        </p>

        <p class="section-text">
          <b>246</b>
          were shot while running away.
        </p>

        <p class="section-text">
          In only
          <b>194</b>
          (15.4%) of these incidents were police confirmed to have been wearing
          a body camera.
        </p>

        <p class="section-text">
          While Black people throughout the country deal with the
          disproportionate effects of a global pandemic, monumental gaps in
          access to healthcare, education and thus income equality, Black people
          also have to figure how to stay alive, every day－that’s going for a
          jog, driving a car, sleeping in their home, or going to the grocery
          store.
        </p>

        <p class="section-text">
          We must
          <span class="font-semibold">Fight For Black Lives</span>
        </p>
      </div>

      <StoryCard2
        style="border-radius: 16px;"
        class="mt-16 lg:mt-0 story-card" />
    </div>
  </div>

  <div class="contained mb-40 flex b-24 items-stretch flex-col lg:flex-row">
    <div class="text-section flex-1 text-2xl lg:pr-6">
      <h1 id="how-else-can-i-help" class="section-header">
        How else can I help?
      </h1>

      <p class="section-text">
        We're just a small independent group of designers and engineers, but you
        can donate to these organizations working to fight systematic injustice
        for Black people in America.
      </p>

      <p class="mb-6">These organizations focus on the following:</p>

      <ul class="list font-medium">
        <li>
          <p>Reaching lawmakers to change discriminatory or neglegent law</p>
        </li>
        <li>
          <p>
            Supporting efforts for better healthcare and education in
            communities of color
          </p>
        </li>
        <li>
          <p>
            Moving corporations to contribute to a more just world for people of
            color nationwide
          </p>
        </li>
        <li>
          <p>
            Fighting to finally put an end to state-sanctioned violence by
            police against Black people
          </p>
        </li>
        <li>
          <p>Providing bail and legal funds for protesters</p>
        </li>
      </ul>
    </div>

    <div
      style="flex: 0 0 500px; border-radius: 16px;"
      class="flex flex-col items-center border-2 border-c-border-3 lg:ml-16
      justify-center p-12 text-lg mt-16 lg:mt-0 jason-round">
      <img
        alt="Color of Change Logo"
        class="w-48"
        src="{staticPath}/color_of_change_logo.png" />

      <p class="self-stretch text-center my-8 mx-auto">
        Color Of Change is the nation’s largest online racial justice
        organization.
      </p>

      <p class="self-stretch text-center mx-auto">
        They help people respond effectively to injustice in the world around
        us. As a national online force driven by 1.7 million members, they move
        decision-makers in corporations and government to create a more human
        and less hostile world for Black people in America.
      </p>
    </div>
  </div>

  <div class="contained hero-container mb-24">
    <p class="text-c-header-1">Still scrolling?</p>
    <p class="text-c-header-1">Enter your zip code.</p>
    <p class="text-c-header-1">Contact your lawmakers.</p>
    <p>Fight For Black Lives.</p>
  </div>
</div>

<style>
  @import "../style/shared.css";

  .hero-container {
    @apply font-semibold text-center;
    font-size: 6.4vw;

    @screen md {
      @apply text-left;
      font-size: 55px;
    }
  }

  .text-section {
    font-size: 1.3rem;
  }

  .text-section p:not(:first-child) {
    @apply pt-6;
  }

  ul.list {
    list-style: none;
  }

  ul.list > li {
    @apply flex;
  }

  ul.list > li:not(:first-child) {
    @apply mt-4;
  }

  ul.list > li:before {
    content: "•";
    padding-right: 16px;
  }

  ul.list > li > p {
    display: inline-block;
  }

  .section-text {
    @apply text-justify;

    @screen md {
      @apply text-left;
    }
  }

  .section-header {
    @apply text-4xl font-semibold text-c-header-1 mb-6 text-center;
    text-justify: inter-character;

    @screen md {
      @apply text-left;
    }
  }

  :global(.story-card) {
    flex: 0 0 100%;

    @screen md {
      flex: 0 0 500px;
    }
  }
</style>
