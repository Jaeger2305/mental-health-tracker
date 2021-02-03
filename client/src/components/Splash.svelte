<script lang="ts">
  import { fade, fly } from "svelte/transition";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher<{
    acknowledge: boolean;
  }>();

  function acknowledge() {
    dispatch("acknowledge", true);
  }

  const animationModifier = 2;
</script>

<main>
  <h1 in:fly={{ duration: 2000, x: -200 }}>Mental health</h1>
  <p in:fade={{ duration: 2000, delay: animationModifier * 1000 }}>
    It's one of those things that always sneaks up on me. I get busy with work,
    a personal goal lags behind, that special someone isn't texting back. Then
    the motivation slips, I stop texting back, and every night is spent drifting
    to sleep to easy entertainment I've heard several times before. For me, it's
    highs that last a month, followed by lows lasting a couple of months.
    Nothing stormy, or even to rock the boat, but it's enough to stop me from
    swimming in the sea.
  </p>
  <p in:fade={{ duration: 2000, delay: animationModifier * 7000 }}>
    This cycle isn't easy. It's boring and I'm resigned to breaking it. I don't
    claim to have any answers, but I'll be damned if I can't at least see it
    coming so I can adjust my expectations. The solution then lies in tracking.
  </p>
  <h2 in:fly={{ duration: 2000, delay: animationModifier * 10000, x: -200 }}>
    The burners
  </h2>
  <p in:fade={{ duration: 2000, delay: animationModifier * 10000 }}>
    There are four key metrics I've lived by for the past 5 years. I have little
    active agency over each and too often they are neglected. What's worse is
    that they are typically linked. A dip in one has consequences to all of the
    others.
  </p>
  <p in:fade={{ duration: 2000, delay: animationModifier * 15000 }}>
    <strong>Exercise</strong>: Did you exercise an hour each day?
  </p>
  <p in:fade={{ duration: 2000, delay: animationModifier * 15500 }}>
    <strong>Sleep</strong>: Are you getting your 8 hours? What time did you
    sleep? Are you exhausted going into bed?
  </p>
  <p in:fade={{ duration: 2000, delay: animationModifier * 16000 }}>
    <strong>Social</strong>: Did you reach out to any old friends? Make any new
    ones? Did you start a conversation when you didn't need to? Did you avoid
    anyone?
  </p>
  <p in:fade={{ duration: 2000, delay: animationModifier * 16500 }}>
    <strong>Diet</strong>: How much did you cook? Was your food healthy? Did you
    enjoy cooking?
  </p>
  <h2 in:fly={{ duration: 2000, delay: animationModifier * 19000, x: -200 }}>
    This app
  </h2>
  <p in:fade={{ duration: 2000, delay: animationModifier * 19000 }}>
    Give a score every day, and a note if you like. The algorithm will warn you
    if you're on a downward spiral, and suggest things to help.
  </p>
  <p>All data is stored local to your machine.</p>
  <p in:fade={{ duration: 2000, delay: animationModifier * 22000 }}>
    Inputting a bad score won't feel good, so the app won't reprimand you
    instantly, but it'll pop up with a suggestion when it thinks may be
    convenient.
  </p>
  <button on:click={acknowledge}>Acknowlege</button>
</main>

<style>
  main {
    min-width: 250px;
    max-width: 800px;
    width: 80vw;
    margin: 5vw;
  }
</style>
