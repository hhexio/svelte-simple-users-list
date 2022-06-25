<script>
  import { createEventDispatcher } from "svelte";
  import Button from "../Button";

  export let user = {};

  const dispatch = createEventDispatcher();

  const removeUser = id => {
    dispatch("remove", { id });
  };
</script>

<style>
  .list-item {
    display: flex;
    border: 1px solid silver;
    border-radius: 10px;
    padding: 10px;
    box-sizing: border-box;
    margin: 10px 0;
    width: 100%;
  }

  .list-item-info {
    display: flex;
    align-items: center;
    flex: 3;
  }

  .list-item-nav {
    display: flex;
    justify-content: flex-end;
    flex: 1;
  }
</style>

<li class="list-item">
  <div class="list-item-info">{ user.id}: {user.username}</div>
  <div class="list-item-nav">
    <Button on:click={removeUser(user.id)}/>
  </div>
</li>