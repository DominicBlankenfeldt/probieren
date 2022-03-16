<template>
  <div class="settingsCreator">
    <div class="m-5" style="border: 3px solid black; border-radius: 5px">
      <div class="mainSettings">
        <div class="g-3 align-items-center">
          <div class="col-auto">
            <label for="optionName" class="col-form-label"
              >Name der Option</label
            >
          </div>
          <div class="p-1 col-auto d-flex justify-content-center">
            <input
              type="text"
              id="optionName"
              class="form-control"
              style="width: 50%"
              placeholder="z.B. erstes Halbjahr"
            />
          </div>
        </div>
        <div class="g-3 align-items-center">
          <div class="col-auto">
            <label for="azubiName" class="col-form-label"
              >Name des/der Auszubildenden</label
            >
          </div>
          <div class="p-1 col-auto d-flex justify-content-center">
            <input
              type="text"
              id="azubiName"
              class="form-control"
              style="width: 50%"
              placeholder="z.B. Otto Ottomann"
            />
          </div>
        </div>
        <div class="g-3 align-items-center">
          <div class="col-auto">
            <label for="azubiYear" class="col-form-label"
              >Ausbildungsjahr</label
            >
          </div>
          <div class="p-1 col-auto d-flex justify-content-center">
            <input
              type="text"
              id="azubiDepartment"
              class="form-control"
              style="width: 50%"
              placeholder="z.B. 1. Ausbildungsjahr"
            />
          </div>
        </div>
        <div class="g-3 align-items-center">
          <div class="col-auto">
            <label for="azubiDepartment" class="col-form-label"
              >Ggf. ausbildende Abteilung</label
            >
          </div>
          <div class="p-1 col-auto d-flex justify-content-center">
            <input
              type="text"
              id="azubiName"
              class="form-control"
              style="width: 50%"
              placeholder="z.B. Personalabteilung"
            />
          </div>
        </div>
        <div class="g-3 align-items-center">
          <div class="col-auto">
            <label for="azubiWeekFrom" class="col-form-label"
              >Ausbildungswoche vom</label
            >
          </div>
          <div class="p-1 col-auto d-flex justify-content-center">
            <input
              type="text"
              id="azubiWeekFrom"
              class="form-control"
              style="width: 50%"
              placeholder="z.B. 1.Mai.2020"
            />
          </div>
          <div class="col-auto">
            <label for="azubiWeekTo" class="col-form-label">bis</label>
          </div>
          <div class="p-1 col-auto d-flex justify-content-center">
            <input
              type="text"
              id="azubiWeekTo"
              class="form-control"
              style="width: 50%"
              placeholder="z.B. 1.Mai.2020"
            />
          </div>
        </div>
      </div>
      <div class="daySettings m-5">
        <div class="" v-for="day in days" :key="day">
          <div style="border: solid 1px black; background-color: #42b983">
            {{ day.dayName }}
          </div>
          <div class="row g-0" style="border: 1px solid black">
            <div class="col-3">
              <label for="school">Schule</label>
              <input type="radio" id="school" name="dailySelection" />
            </div>
            <div class="col-3">
              <label for="work">Betrieb</label>
              <input type="radio" id="work" name="dailySelection" />
            </div>
            <div class="col-3">
              <label for="free">Frei/Urlaub</label>
              <input type="radio" id="free" name="dailySelection" />
            </div>
            <div class="col-3">
              <label for="none">keine Angaben</label>
              <input checked type="radio" id="none" name="dailySelection" />
            </div>
          </div>
          <div class="row g-0 align-items-center">
            <div class="col-auto">
              <label for="workHours" class="col-form-label"
                >Anzahl der Stunden am {{ day.dayName }}</label
              >
            </div>
            <div class="col-auto">
              <input type="text" id="workHours" class="form-control" />
            </div>
          </div>
        </div>
        <button type="submit" class="btn btn-success">speichern</button>
      </div>
    </div>
  </div>
  <div
    class="schoolWorkReports m-5"
    style="border: 3px black solid; border-radius: 5px"
  >
    <form>
      <div>Texte für den Bericht hinzufügen</div>
      <div>Bericht für die Schule/den Betrieb:</div>
      <div class="col-6">
        <label for="workReport">Betrieb</label>
        <input type="radio" id="workReport" name="reports" value="work" />
        <label for="schoolReport">Schule</label>
        <input type="radio" id="schoolReport" name="reports" value="school" />
      </div>
      <div class="form-group">
        <label for="reportText">Schreibe deinen Bericht</label>
        <textarea class="form-control" id="reportText" rows="3"></textarea>
      </div>
      <button class="btn btn-success" type="submit" @click="saveReport()">
        Speichern
      </button>
    </form>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      schoolReports: [],
      workReports: [],
      days: [
        { dayName: "Montag", value: {} },
        { dayName: "Dienstag", value: {} },
        { dayName: "Mittwoch", value: {} },
        { dayName: "Donnerstag", value: {} },
        { dayName: "Freitag", value: {} },
        { dayName: "Samstag", value: {} },
        { dayName: "Sonntag", value: {} },
      ],
    };
  },
  methods: {
    saveReport() {
      console.log("test");
    },
  },

  setup() {
    return {};
  },
});
</script>
<style scoped lang="scss"></style>
