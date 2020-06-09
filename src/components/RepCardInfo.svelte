<script>
  import Icon from "components/Icon";
  import { twitter, fasEnvelope, fasPhone, facebook } from "config/icons";

  export let featureTextClass = "text-base";
  export let secondaryTextClass = "text-sm";

  const getParty = (party) => {
    if (party == null) {
      return "";
    }

    party = party.toLowerCase();

    if (party.includes("independent")) return "(I)";
    if (party.includes("democrat")) return "(D)";
    if (party.includes("republic")) return "(R)";

    return "";
  };

  export let person;
</script>

<div class="flex flex-col {$$props.class || ''}">
  <div class="flex font-semibold items-center ">
    <h4 class="text-c-header-1 {featureTextClass}">
      {person.name}
      <span class="font-normal">{getParty(person.party)}</span>
    </h4>

  </div>

  <h3 class={secondaryTextClass}>{person.title}</h3>

  <div class="flex text-base text-c-header-1 mt-2 sm:pl-3">
    {#if person.twitter}
      <Icon class="pr-3" icon={twitter} />
    {/if}
    {#if person.facebook}
      <Icon class="pr-3" icon={facebook} />
    {/if}
    {#if person.phone}
      <Icon class="pr-3" icon={fasPhone} />
    {/if}
    {#if person.email}
      <Icon class="pr-3" icon={fasEnvelope} />
    {/if}
  </div>
</div>
