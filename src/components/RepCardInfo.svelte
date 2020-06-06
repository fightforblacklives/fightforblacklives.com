<script>
  import Icon from "components/Icon";
  import { twitter, fasEnvelope, fasPhone } from "config/icons.ts";

  const getParty = party => {
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

<div class="p-4 flex flex-col text-center items-center">
  <h4 class="font-semibold">
    {person.name}
    <span class="font-normal">{getParty(person.party)}</span>
  </h4>
  <h3 class="text-sm">{person.title}</h3>

  <div class="flex mt-3">
    {#if person.twitter}
      <Icon class="px-2" icon={twitter} />
    {/if}
    {#if person.phone}
      <Icon class="px-2" icon={fasPhone} />
    {/if}
    {#if person.email}
      <Icon class="px-2" icon={fasEnvelope} />
    {/if}
  </div>
</div>
