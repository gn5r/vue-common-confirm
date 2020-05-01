<template>
  <v-app>
    <header-bar />
    <v-content>
      <sample />
    </v-content>
    <footer-bar />
  </v-app>
</template>

<script>
import HeaderBar from "@/components/common/HeaderBar";
import FooterBar from "@/components/common/FooterBar";
import Sample from "@/components/Sample";

export default {
  name: "App",
  components: {
    HeaderBar,
    FooterBar,
    Sample
  }
};
</script>
