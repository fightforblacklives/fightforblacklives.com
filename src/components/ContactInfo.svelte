<script>
  import { twitter, facebook } from "config/icons";
  import Icon from "components/Icon";

  export let person;
</script>

<div class="pt-6">
  <h2 class="text-2xl font-semibold">{person.name}</h2>
  <h3 class="text-2xl">{person.title}</h3>
  <h4 class="text-lg mt-4">{person.party}</h4>
  {#if person.address}
    <h5 class="detail-header">Office Address</h5>
    <span class="detail">{person.address}</span>
  {/if}
  {#if person.phone}
    <h5 class="detail-header">Phone Number</h5>
    <span class="detail">{person.phone}</span>
  {/if}
  {#if person.email}
    <h5 class="detail-header">Email</h5>
    <span class="detail">{person.email}</span>
  {/if}

  <div class="flex flex-row mt-4">
    {#if person.twitter}
      <a href={`https://twitter.com/${person.twitter}`}>
        <Icon size="lg" class="px-1" icon={twitter} />
      </a>
    {/if}
    {#if person.facebook}
      <a href={`https://facebook.com/${person.facebook}`}>
        <Icon size="lg" class="px-1" icon={facebook} />
      </a>
    {/if}
  </div>
</div>
