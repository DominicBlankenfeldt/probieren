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
              v-model="Option.optionName"
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
              v-model="Option.azubiName"
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
              v-model="Option.azubiYear"
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
              v-model="Option.department"
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
              v-model="Option.weekFrom"
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
              v-model="Option.weekTo"
            />
          </div>
        </div>
      </div>
      <div class="daySettings m-5">
        <div class="" v-for="day in Option.week" :key="day.dayName">
          <div style="border: solid 1px black; background-color: #42b983">
            {{ day.dayName }}
          </div>
          <div class="row g-0" style="border: 1px solid black">
            <div class="col-3">
              <label for="school">Schule</label>
              <input
                type="radio"
                id="school"
                :name="day.dayName"
                @change="day.value = 'school'"
                :checked="day.value == 'school'"
              />
            </div>
            <div class="col-3">
              <label for="work">Betrieb</label>
              <input
                type="radio"
                id="work"
                :name="day.dayName"
                @change="day.value = 'work'"
                :checked="day.value == 'work'"
              />
            </div>
            <div class="col-3">
              <label for="free">Frei/Urlaub</label>
              <input
                type="radio"
                id="free"
                :name="day.dayName"
                @change="day.value = 'free'"
                :checked="day.value == 'free'"
              />
            </div>
            <div class="col-3">
              <label for="none">keine Angaben</label>
              <input
                type="radio"
                id="none"
                :name="day.dayName"
                @change="day.value = 'none'"
                :checked="day.value == 'none'"
              />
            </div>
          </div>
          <div class="row g-0 align-items-center">
            <div class="col-auto">
              <label for="workHours" class="col-form-label"
                >Anzahl der Stunden am {{ day.dayName }}</label
              >
            </div>
            <div class="col-auto">
              <input
                type="text"
                id="workHours"
                class="form-control"
                v-model="day.hours"
              />
            </div>
          </div>
        </div>
        <div
          v-if="alertOption == true"
          class="alert alert-success"
          role="alert"
        >
          Deine Option wurde gespeichert!
        </div>
        <button type="submit" class="btn btn-success" @click="saveOption()">
          speichern
        </button>
      </div>
    </div>
  </div>
  <div
    class="schoolWorkReports m-5"
    style="border: 3px black solid; border-radius: 5px"
  >
    <form class="m-5">
      <div>Texte für den Bericht hinzufügen</div>
      <div>Bericht für die Schule/den Betrieb:</div>
      <div class="m-1">
        <label for="workReport">Betrieb</label>
        <input
          type="radio"
          id="workReport"
          name="reports"
          value="work"
          v-model="report.type"
          @change="report.type = 'work'"
          :checked="report.type == 'work'"
        />
        <label for="schoolReport">Schule</label>
        <input
          type="radio"
          id="schoolReport"
          name="reports"
          value="school"
          v-model="report.type"
          @change="report.type = 'school'"
          :checked="report.type == 'school'"
        />
      </div>
      <div class="form-group m-1">
        <label for="reportText">Schreibe deinen Bericht</label>
        <div v-if="alert == true" class="alert alert-danger" role="alert">
          Du hast keinen Typen ausgewählt. Wähle einen Typen Betrieb oder Schule
          aus!
        </div>
        <div
          v-if="alertSuccess == true"
          class="alert alert-success"
          role="alert"
        >
          Dein Bericht wurde gespeichert!
        </div>
        <textarea
          class="form-control"
          id="reportText"
          rows="3"
          v-model="report.value"
        ></textarea>
      </div>
      <button class="btn btn-success" type="submit" @click="saveReport()">
        Speichern
      </button>
    </form>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { Day } from "@/types";
import * as API from "@/API";
const initialOption = {
  optionName: "",
  azubiName: "",
  azubiYear: "",
  department: "",
  weekFrom: "",
  weekTo: "",
  week: [
    { dayName: "Montag", value: "", hours: "" },
    { dayName: "Dienstag", value: "", hours: "" },
    { dayName: "Mittwoch", value: "", hours: "" },
    { dayName: "Donnerstag", value: "", hours: "" },
    { dayName: "Freitag", value: "", hours: "" },
    { dayName: "Samstag", value: "", hours: "" },
    { dayName: "Sonntag", value: "", hours: "" },
  ] as Day[],
};
export default defineComponent({
  data() {
    return {
      report: {
        type: "",
        value: "",
      },
      Option: { ...initialOption },
      alert: false,
      alertOption: false,
      alertSuccess: false,
    };
  },
  methods: {
    saveReport() {
      if (this.report.type == "school") {
        try {
          API.addSchoolReport(this.report);
        } catch (e) {
          console.error(e, "API.addSchoolReport()");
        }
        this.alertSuccess = true;
      } else if (this.report.type == "work") {
        try {
          API.addWorkReport(this.report);
        } catch (e) {
          console.error(e, "API.addWorkReport()");
        }
        this.alertSuccess = true;
      } else {
        this.alert = true;
        return;
      }
      this.report.value = "";
    },
    saveOption() {
      try {
        API.addOption(this.Option);
      } catch (e) {
        console.error(e, "API.addOption()");
      }
      this.Option = { ...initialOption };
      this.alertOption = true;
    },
  },

  setup() {
    return {};
  },
});
</script>
<style scoped lang="scss"></style>
