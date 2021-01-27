import App from "./components/App.svelte";

const app = new App({
  target: document.body,
  props: {
    name: "test",
  },
});

export default app;
