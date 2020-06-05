<script>
  import Icon from "components/Icon";
  import { fasAt } from "config/icons";
  export let person;

  let handle = "";
  let submitted = false;

  const submitTwitterSuggestion = async () => {
    if (handle.trim() !== "") {
      await fetch("https://hooks.zapier.com/hooks/catch/2777406/os9edvq/", {
        method: "POST",
        body: JSON.stringify({
          person: person,
          handle
        })
      });

      submitted = true;
    }
  };

  const updateHandle = e => {
    handle = e.target.value.replace(/[@\s]/g, "");

    if (handle === "") {
      e.target.value = "";
    }
  };
</script>

<div class="flex flex-col items-center my-auto p-4" style="max-width: 600px;">
  <h2 class="text-xl text-center">
    We don't have a Twitter account for
    <br />
    <span class="text-2xl font-semibold mt-2 text-c-header-1">
      {person.title}, {person.name}
    </span>
  </h2>

  <p class="mt-8">
    Help us fight for black lives by adding it below. We'll review your
    suggestion to make sure we find the right Twitter account.
  </p>

  {#if !submitted}
    <form
      action="/"
      on:submit={e => {
        e.stopPropagation();
        e.preventDefault();
        submitTwitterSuggestion();
        return false;
      }}>
      <label
        style="max-width: 100%; width: 350px;"
        class="rounded-full text-lg border border-c-border-1 flex
        overflow-hidden items-center mt-12 pl-4">
        <Icon
          style="margin-right: 1px; margin-top: 3px;"
          class="text-c-header-1"
          icon={fasAt} />
        <input
          value={handle}
          on:input={updateHandle}
          placeholder="handle"
          class="handle-input flex-1 py-2" />
        <button
          type="submit"
          class="rounded-full bg-c-button-primary text-c-text-1-complement m-1
          self-stretch px-8">
          Add
        </button>
      </label>
    </form>
  {:else}
    <h2 class="mt-12 text-xl">Thank you!</h2>
  {/if}
</div>

<style>
  .handle-input::placeholder {
    @apply text-c-header-1;
    opacity: 1;
  }
</style>
