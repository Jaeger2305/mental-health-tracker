<script lang="ts">
  import { tweened } from "svelte/motion";
  import { cubicOut } from "svelte/easing";
  import Slider from "./Slider.svelte";

  export let burner;
  export let burnerType;

  const scoreTween = tweened(burner, {
    duration: 2000,
    easing: cubicOut,
  });

  $: scoreTween.set(burner);

  $: proportion = (10 - $scoreTween) / 10;

  $: angle = 170 + 360 - proportion * 360;
  $: angleColor = `hsl(120, 60%, ${30 + proportion * 70}%)`;

  $: color = `hsl(${$scoreTween * 14 - 20}, 85%, 45%)`;

  function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
    var angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

    return {
      x: centerX + radius * Math.cos(angleInRadians),
      y: centerY + radius * Math.sin(angleInRadians),
    };
  }

  function describeArc(x, y, radius, startAngle, endAngle) {
    var start = polarToCartesian(x, y, radius, endAngle);
    var end = polarToCartesian(x, y, radius, startAngle);

    var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

    var d = [
      "M",
      start.x,
      start.y,
      "A",
      radius,
      radius,
      0,
      largeArcFlag,
      0,
      end.x,
      end.y,
    ].join(" ");

    return d;
  }
</script>

<main>
  <div class="hob" style="--burner-color: {color}">
    <svg viewBox="0 0 100 100" class="hob-outline">
      <g>
        <path
          d={describeArc(50, 50, 40, 190, angle)}
          stroke={angleColor}
          stroke-width="15"
          fill="none"
        />
        <circle cy="50" cx="50" r="40" fill={color} />
      </g>
    </svg>
    <span>{burner}</span>
    <img src="/images/{burnerType}.svg" alt={burnerType} class="burner-icon" />
  </div>
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
    min-height: 150px;
    min-width: 150px;
    text-align: center;
    vertical-align: middle;
  }

  span {
    font-size: 3em;
    text-shadow: 0.1em 0.1em 0.2em black;
    color: white;
    grid-column: 1 / 1;
    grid-row: 1 / 1;
  }

  .hob-outline {
    display: block;
    margin: auto;
    grid-column: 1 /1;
    grid-row: 1 /1;
    height: 100%;
  }

  .burner-icon {
    height: 5rem;
    grid-column: 1 /1;
    grid-row: 1 /1;
    place-self: end;
  }
</style>
