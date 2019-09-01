<template>
  <div class="home">
    <h1>Home</h1>
    <div>{{ countToString }}</div>
    <div>{{ count }}</div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapState } = createNamespacedHelpers("home");

export default {
  name: "Home",
  computed: {
    ...mapState(["count"]),
    ...mapGetters(["countToString"])
  },
  components: {},
  methods: {}
};
</script>
