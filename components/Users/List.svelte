<script>
  import Loader from "../Loader";
  import SearchForm from "./SearchForm";
  import ListItem from "./ListItem";
  import { onMount } from "svelte";
  import { Users } from "../../models/Users";
  import { searchInObjectsArray as search } from "../../utils/search";

  let loading = true;
  $: usersList = [];
  let cachedUserList = [];

  const fetchUsers = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");

    const json = await res.json();

    return json;
  };

  const setUserList = async () => {
    try {
      const users = new Users();

      users.users = await fetchUsers();
      usersList = await users.users;
    } catch (err) {
      throw new Error("Something went wrong!");
    } finally {
      loading = false;
    }
  };

  const removeByUserId = event =>
    (usersList = usersList.filter(el => el.id !== event.detail.id));

  const handleSearchForm = event => {
    if (!cachedUserList.length) {
      cachedUserList = JSON.parse(JSON.stringify(usersList));
    }

    const inputVal = event.detail.username;
    const res = search(inputVal, "username", cachedUserList);

    if (!inputVal.length) {
      usersList = cachedUserList;
      return;
    }

    usersList = res;
  };

  onMount(() => {
    setUserList();
  });
</script>

<style>
  .list-items {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    box-sizing: border-box;
  }
</style>

<div>
<SearchForm on:search={handleSearchForm}/>

{#if loading && !usersList.length}
  <Loader />

{:else if !loading && usersList.length}
  <ul class="list-items">
    {#each usersList as user}
        <ListItem user={user} on:remove={removeByUserId}/>
    {/each}
  </ul>

{:else}
  <h3>List is empty!</h3>
{/if}
</div>