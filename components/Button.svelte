<script>
		import { createEventDispatcher } from "svelte";

		const dispatch = createEventDispatcher();
		const sendClick = () => dispatch("click");
</script>

<style>
	button {
	  background: #ff3e00;
	  color: white;
	  border: none;
	  padding: 8px 12px;
	  border-radius: 6px;
	  cursor: pointer;
	}
</style>

<button on:click={sendClick}>
	Delete
</button>