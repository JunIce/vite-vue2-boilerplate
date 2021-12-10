export default {
  components: {
    HelloWorld: () => import("@/components/HelloWorld.vue"),
  },
  render(h) {
    return h("div", null, [
      h("h1", null, "hello world component"),
      h("hello-world"),
    ]);
  },
};
