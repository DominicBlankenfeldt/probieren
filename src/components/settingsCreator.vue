<template>
  <div class="settingsCreator">
    <div class="mainSettings">
      <div class="row g-3 align-items-center">
        <div class="col-auto">
          <label for="azubiName" class="col-form-label"
            >Name des/der Auszubildenden</label
          >
        </div>
        <div class="col-auto">
          <input type="text" id="azubiName" class="form-control" />
        </div>
      </div>
      <div class="row g-3 align-items-center">
        <div class="col-auto">
          <label for="azubiYear" class="col-form-label">Ausbildungsjahr</label>
        </div>
        <div class="col-auto">
          <input type="text" id="azubiDepartment" class="form-control" />
        </div>
      </div>
      <div class="row g-3 align-items-center">
        <div class="col-auto">
          <label for="azubiDepartment" class="col-form-label"
            >Ggf. ausbildende Abteilung</label
          >
        </div>
        <div class="col-auto">
          <input type="text" id="azubiName" class="form-control" />
        </div>
      </div>
      <div class="row g-3 align-items-center">
        <div class="col-auto">
          <label for="azubiWeekFrom" class="col-form-label"
            >Ausbildungswoche vom</label
          >
        </div>
        <div class="col-auto">
          <input type="text" id="azubiWeekFrom" class="form-control" />
        </div>
        <div class="col-auto">
          <label for="azubiWeekTo" class="col-form-label">bis</label>
        </div>
        <div class="col-auto">
          <input type="text" id="azubiWeekTo" class="form-control" />
        </div>
      </div>
    </div>
    <div class="daySettings">
      <div class="row" v-for="day in days" :key="day">
        <span style="border: solid 1px black">{{ day }}</span>
        <div class="row" style="border: 1px solid black">
          <div class="col-3">
            <label for="school">Schule</label>
            <input type="radio" id="school" />
          </div>
          <div class="col-3">
            <label for="work">Betrieb</label>
            <input type="radio" id="work" />
          </div>
          <div class="col-3">
            <label for="free">Frei/Urlaub</label>
            <input type="radio" id="free" />
          </div>
          <div class="col-3">
            <label for="none">keine Angaben</label>
            <input checked type="radio" id="none" />
          </div>
        </div>
      </div>
    </div>
    <div class="schoolSettings"></div>
    <div class="workSettings"></div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  methods: {},
  data() {
    return {
      days: [
        "Montag",
        "Dienstag",
        "Mittwoch",
        "Donnerstag",
        "Freitag",
        "Samstag",
        "Sonntag",
      ],
    };
  },
  setup() {
    return {};
  },
});
</script>
<style scoped lang="scss"></style>
