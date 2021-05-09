<template>
  <v-app>
    <header-bar />
    <v-main>
      <sample />
    </v-main>
    <footer-bar />
  </v-app>
</template>

<script>
import HeaderBar from "@/components/common/HeaderBar";
import FooterBar from "@/components/common/FooterBar";
import Sample from "@/components/Sample";

export default {
  name: "App",
  created() {
    console.debug(this)
  },
  components: {
    HeaderBar,
    FooterBar,
    Sample
  }
};
</script>
