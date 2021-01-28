<script lang="ts">
  import Slider from "./Slider.svelte";

  export let burner;
  export let burnerType;

  $: color = `hsl(
    ${burner * 14 - 20},
						85%,
						45%
					)`;
</script>

<main>
  <h2>{burnerType}</h2>
  <div class="hob" style="--burner-color: {color}"><span>{burner}</span></div>
  <Slider bind:score={burner} />
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
  }
  .hob {
    display: grid;
    place-items: center;
    height: 250px;
    width: 250px;
    font-size: 50px;
    color: white;
    text-shadow: 2px 2px 5px black;
    text-align: center;
    vertical-align: middle;
    border-radius: 50%;
    background-color: var(--burner-color);
  }
</style>
