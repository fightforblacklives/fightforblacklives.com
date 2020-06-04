<script>
  import ZipForm from "components/ZipForm";
  import Icon from "components/Icon";

  import { twitter } from "config/icons.ts";

  let bottomLinks = [
    { url: "/privacy", name: "Privacy Policy" },
    { url: "/credits", name: "Credits" },
    { url: "/contact", name: "Contact" }
  ];
</script>

<div class="bg-c-bg-complement text-white footer {$$props.class || ''}">
  <div class="contained">
    <div class="font-semibold text-2xl mt-8">How to support</div>
    <div class="flex flex-row text-lg items-center">
      <div class="w-4/12">
        Support us by donating to our short list of organizations working to
        fight systematic injustice for Black people in America.
      </div>
      <div class="underline ml-auto text-right">

        <div class="flex flex-col text-right">
          <div class="flex flex-row ml-auto">
            <a class="mr-6" href="todo">Campaign Zero</a>
            <a href="todo">Color of Change</a>

          </div>
          <div class="flex flex-row my-4 ml-auto">
            <a class="mr-6" href="todo">Black Lives Matter</a>
            <a href="todo">Minnesota Freedom Fund</a>

          </div>
          <div class="flex flex-row ml-auto">
            <a href="todo">National Lawyers Guild Mass Defense Fund</a>

          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-row font-semibold text-2xl mt-10">
      <span>Fight for Black Lives.</span>
      <span class="ml-auto">Follow Us</span>

    </div>
    <div class="flex flex-row items-center my-10">
      <ZipForm />
      <a class="ml-auto" href="https://twitter.com/fight4blacklife">
        <Icon icon={twitter} class="text-5xl " />
      </a>

    </div>
    <div
      style="border-top: 1px solid white;"
      class="flex flex-row justify-between py-6">

      <span>♡ Made in NYC by 3 people that want change.</span>
      {#each bottomLinks as link}
        <a class="mx-8" href={link.url}>{link.name}</a>
      {/each}

      <span>© 2020 Fight for Black Lives</span>

    </div>
  </div>

</div>

<style>
  @import "../style/shared.css";

  .footer {
    --c-button-primary: var(--color-brownWhite);
    --c-text-1-complement: var(--color-offBlack);
    --c-border-2: var(--color-brownWhite);
    --zip-border-width: 2px;
    --zip-font-size: 1.2em;
  }
</style>
