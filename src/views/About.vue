<template>
  <div class="about"><SettingsCreator></SettingsCreator></div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import SettingsCreator from "../components/settingsCreator.vue";
export default defineComponent({
  components: {
    SettingsCreator,
  },
});
</script>
