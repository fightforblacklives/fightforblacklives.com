<script>
  import ZipForm from "components/ZipForm";
  import Icon from "components/Icon";

  import { twitter } from "config/icons.ts";

  let bottomLinks = [
    { url: "/privacy", name: "Privacy Policy" },
    { url: "/credits", name: "Credits" },
    { url: "mailto:contact@fightforblacklives.com", name: "Contact" }
  ];

  let orgLinks = [
    { url: "https://www.joincampaignzero.org/", name: "Campaign Zero " },
    { url: "https://colorofchange.org/", name: "Color of Change" },

    {
      url: "https://minnesotafreedomfund.org/",
      name: "Minnesota Freedom Fund"
    },
    {
      url: "https://www.nlg.org/massdefenseprogram/",
      name: "National Lawyers Guild Mass Defense Fund"
    }
  ];
</script>

<div class="bg-c-bg-complement text-white footer {$$props.class || ''}">
  <div class="contained flex flex-col">
    <h3 class="font-semibold text-4xl sm:text-2xl mt-8">How to support</h3>

    <div class="flex text-xl sm:text-lg sm:items-center flex-col sm:flex-row">
      <p class="support-p mr-auto">
        Support us by donating to our short list of organizations working to
        fight systematic injustice for Black people in America.
      </p>
      <div
        class="flex flex-col underline text-left mt-6 sm:mt-0 sm:text-right
        sm:justify-end sm:flex-row sm:flex-wrap org-list">
        {#each orgLinks as link}
          <a href={link.url}>{link.name}</a>
        {/each}
      </div>
    </div>

    <div class="flex flex-row">
      <div class="flex-col font-semibold flex-1 my-10 mr-8 hidden sm:flex">
        <h2 class="text-2xl mb-10">Fight for Black Lives.</h2>
        <ZipForm style="max-width: 500px;" />
      </div>

      <div class="flex flex-col items-center my-10 hidden md:flex">
        <h2 class="text-2xl ml-auto mb-10">Follow Us</h2>
        <a
          style="height: 50px;"
          class="flex ml-auto items-center"
          href="https://twitter.com/fight4blacklife">
          <Icon icon={twitter} class="text-5xl " />
        </a>

      </div>
    </div>

    <div
      style="border-top: 1px solid white;"
      class="desktop-footer flex flex-row justify-between py-6 flex-col
      sm:flex-row hidden md:flex text-xs lg:text-lg">

      <span>♡ Made in NYC by 3 people that want change.</span>

      <div class="flex mx-auto px-4">
        {#each bottomLinks as link}
          <a class="mx-4" href={link.url}>{link.name}</a>
        {/each}
      </div>

      <span
        class="text-center sm:text-left border-t border-white sm:border-0 mt-4
        sm:mt-0 pt-4 sm:pt-0">
        © 2020 Fight for Black Lives
      </span>
    </div>

    <div class="mobile-footer flex flex-col justify-between py-6 md:hidden">

      <div class="flex justify-between border-t border-b border-white py-4">
        {#each bottomLinks as link}
          <a href={link.url}>{link.name}</a>
        {/each}
        <a href="https://twitter.com/fight4blacklife">Twitter</a>
      </div>

      <div
        class="flex text-lg sm:text-left sm:text-base flex-col sm:flex-row mt-4
        pt-4">
        <span class="mr-auto hidden sm:block">
          ♡ Made in NYC by 3 people that want change.
        </span>

        <span>© 2020 Fight for Black Lives</span>
      </div>
    </div>

  </div>

</div>

<style>
  @import "../style/shared.css";

  .org-list {
    @apply -mx-4;
    max-width: 500px;

    & > a {
      @apply mx-4 mb-4;
    }
  }

  .support-p {
    @screen sm {
      max-width: 350px;
    }
  }

  .footer {
    --c-button-primary: var(--color-brownWhite);
    --c-text-1-complement: var(--color-offBlack);
    --c-border-2: var(--color-brownWhite);
    --zip-border-width: 2px;
    --zip-font-size: 1.2em;
  }
</style>
