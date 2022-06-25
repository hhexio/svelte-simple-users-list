<script>
  import { createEventDispatcher } from "svelte";
  import { debounce } from "../../utils/helpers";

  const dispatch = createEventDispatcher();

  let searchValue = "";

  const handleSearchInput = debounce(
    () =>
      dispatch("search", {
        username: searchValue
      }),
    300
  );

  const searchInput = {
    type: "text",
    eventMethod: handleSearchInput,
    placeholder: "Let's find anybody..."
  };
</script>

<div class="search-form">
	<form>
		<input bind:value={searchValue} :type={searchInput.type} on:keyup={searchInput.eventMethod} placeholder={searchInput.placeholder}>
	</form>

</div>

<style>
  .search-form {
    padding: 10px;
  }
  .search-form input {
    border: 1px solid silver;
    border-radius: 10px;
    padding: 10px;
    width: 100%;
    box-sizing: border-box;
  }
</style>