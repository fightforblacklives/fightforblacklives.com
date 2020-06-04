<script>
  import { getZipCodeBundle } from "utils/api";
  import Hero from "components/Hero";
  import ZipForm from "components/ZipForm";
  import StoryCard from "components/StoryCard";
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

  let zipContainerWidth;
  let zipFormWidth = 600;
  let basezipFormWidth = zipFormWidth;
  let zipScrollEffectLength = 200;
  let zipFormScaleDown = 0.2;

  const zipFormScrollLocation = (zipContainerWidth, y) => {
    const scale = 1 - zipFormScaleDown * y;
    const zipFormWidth = basezipFormWidth * scale;
    const startX = zipContainerWidth / 2 - zipFormWidth / 2;
    const endX = zipContainerWidth - zipFormWidth;

    return startX + (endX - startX) * y;
  };
</script>

<div id="enter-your-zip-code" class="flex flex-col flex-1 self-stretch">
  <hr style="height: 1.5px" class="bg-c-border-2 contained" />

  <Hero />

  <ScrollOver
    offsetStart={-180}
    length={zipScrollEffectLength}
    multiplier={1}
    let:y>
    <ZipForm
      width={zipFormWidth}
      class="mt-2 {y > 0 ? 'invisible' : ''} mb-32 mx-auto" />

    {#if y > 0}
      <div
        style="top: {Math.max(zipScrollEffectLength - y * zipScrollEffectLength - 20, 0)}px;
        border-bottom-color: rgba(148, 131, 123, {y * 0.4});"
        class="fixed border-b overflow-visible w-full sticky-nav moz-sticky-nav">
        <div bind:offsetWidth={zipContainerWidth} class="contained">
          <ZipForm
            width={zipFormWidth}
            style="left: {zipFormScrollLocation(zipContainerWidth, y)}px;
            transform-origin: 0 50%; transform: scale({1 - zipFormScaleDown * y});"
            class="mt-2 relative mx-0" />
        </div>
      </div>
    {/if}
  </ScrollOver>

  <div class="contained mb-32">

    <div class="flex flex-col items-start lg:flex-row">
      <div class="text-section flex-1 text-xl pr-6">
        <h1 id="what-can-i-do" class="section-header">What can I do?</h1>

        <p>
          Demand change by way of legislation from every level of government.
          These elected officials serve YOU.
        </p>

        <p>
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
          class="flex-1 w-full h-full min-w-0 shadow-lg"
          alt="Tweet sayink {`"Find reliable federal tracking and reporting of all incedents involving the use of deadly force by law enforcement, whether lethal or not. Do something!"`}"
          src="{staticPath}/mock_tweet.png" />
      </div>
    </div>

  </div>

  <div class="contained mb-32">
    <div class="flex b-24 items-center flex-col lg:flex-row">
      <div class="text-section flex-1 pr-6">
        <h1 id="why-should-i-do-it" class="section-header">
          Why should I do it?
        </h1>

        <p>
          Since January 1st 2015,
          <b>1262</b>
          Black men and women were shot and killed by police in America.
        </p>
        <p>
          <b>717</b>
          of these victims were not fleeing the scene.
        </p>

        <p>
          <b>246</b>
          were shot while running away.
        </p>

        <p>
          In only
          <b>194</b>
          (15.4%) of these incidents were police confirmed to have been wearing
          a body camera.
        </p>

        <p>
          While Black people throughout the country deal with the
          disproportionate effects of a global pandemic, monumental gaps in
          access to healthcare, education and thus income equality, Black people
          also have to figure how to stay alive, every day－that’s going for a
          jog, driving a car, sleeping in their home, or going to the grocery
          store.
        </p>

        <p>
          We must
          <span class="font-semibold">Fight For Black Lives</span>
        </p>
      </div>

      <StoryCard2 class="mt-16 lg:mt-0" style="flex: 0 0 450px;" />
    </div>
  </div>

  <div class="contained mb-32">
    <h1 id="how-else-can-i-help" class="section-header">
      How else can I help?
    </h1>

    <div class="flex b-24 items-start">
      <div class="text-section flex-1 text-2xl pr-6">
        <p>
          We're just a small independent group of designers and engineers, but
          you can donate to these organizations working to fight systematic
          injustice for Black people in America.
        </p>

        <p class="mb-6">These organizations focus on the following:</p>

        <ul class="list font-medium">
          <li>
            <span>
              Reaching lawmakers to change discriminatory or neglegent law
            </span>
          </li>
          <li>
            <span>
              Supporting efforts for better healthcare and education in
              communities of color
            </span>
          </li>
          <li>
            <span>
              Moving corporations to contribute to a more just world for people
              of color nationwide
            </span>
          </li>
          <li>
            <span>
              Fighting to finally put an end to state-sanctioned violence by
              police against Black people
            </span>
          </li>
          <li>
            <span>Providing bail and legal funds for protesters</span>
          </li>
        </ul>
      </div>

      <div class="flex-1" />
    </div>
  </div>

  <div class="contained hero-container mb-24">
    <p class="text-c-header-1">Still scrolling?</p>
    <p class="text-c-header-1">Enter your zip code.</p>
    <p class="text-c-header-1">Contact your representatives.</p>
    <p>Fight For Black Lives.</p>
  </div>
</div>

<style>
  @import "../style/shared.css";

  .hero-container {
    @apply font-semibold;
    font-size: 50px;
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

  ul.list > li > span {
    display: inline-block;
  }

  .section-header {
    @apply text-4xl font-semibold text-c-header-1 mb-6;
  }

  .sticky-nav {
    @apply border-c-border-2 border-b bg-c-bg-primary;
    backdrop-filter: blur(10px);
  }
</style>
