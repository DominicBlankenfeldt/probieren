<template>
  <div class="no-print">
    <div>DailyReport</div>
    <div class="selection d-flex justify-content-center">
      <select
        class="form-select"
        aria-label="Default select example"
        style="width: 25%"
        v-model="selected"
      >
        <option selected disabled>Einstellung auswählen:</option>
        <option
          v-for="option in options"
          :key="option.optionName"
          :value="option"
        >
          {{ option.optionName }}
        </option>
      </select>
    </div>
    <div class="m-2">
      <label for="counter" class="m-3">Wie viele Berichte</label>
      <input
        id="counter"
        type="number"
        style="width: 80px"
        placeholder="z.B. 10"
        v-model="counter2"
      />
    </div>
    <div class="buttonGroup">
      <button class="btn btn-success" style="margin: 1rem" @click="getOption()">
        generieren
      </button>
      <button
        class="btn btn-danger"
        style="margin: 1rem"
        @click="resetOption()"
      >
        zurücksetzen
      </button>
    </div>
  </div>
  <div class="report" v-for="n in parseInt(counter)" :key="n">
    <div class="reportHeader" style="margin: 2rem; width: 100%">
      <span><b>Ausbildungsnachweis (täglich)</b></span>

      <div class="d-flex justify-content-around">
        <table>
          <tbody>
            <tr>
              <th scope="row">Name des/der Auszubildenden:</th>
              <td colspan="3">{{ values.azubiName }}</td>
            </tr>
            <tr>
              <th scope="row">Ausbildungjahr:</th>
              <td colspan="3">{{ values.azubiYear }}</td>
            </tr>
            <tr>
              <th scope="row">Ggf. ausbildende Abteilung</th>
              <td colspan="3">{{ values.department }}</td>
            </tr>
            <tr>
              <th scope="row">Ausbildungswoche von:</th>
              <td>{{ values.weekFrom }}</td>
              <td><b>bis:</b></td>
              <td>{{ values.weekTo }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="reportBody d-flex justify-content-around" style="margin: 2rem">
      <table>
        <thead>
          <tr>
            <th scope="col">Tag</th>
            <td scope="col">
              <b>
                Betriebliche Tätigkeiten, Unterweisungen bzw. überbetriebliche
                Unterweisungen (z.B. im Handwerk), betrieblicher Unterricht,
                sonstige Schulungen, Themen des Berufsschulunterrichts
              </b>
            </td>
            <td scope="col"><b>Stunden</b></td>
          </tr>
          <tr v-for="day in values.week" :key="day.dayName">
            <td scoped="col">{{ day.dayName }}</td>
            <td scoped="col">
              <span v-if="day.value === 'work'">{{
                workReports[Math.floor(Math.random() * workReports.length)]
                  .value
              }}</span>
              <span v-else-if="day.value === 'school'">{{
                schoolReports[Math.floor(Math.random() * schoolReports.length)]
                  .value
              }}</span>
              <span v-else-if="day.value === 'free'"> Frei </span>
            </td>

            <td scoped="col">{{ day.hours }}</td>
          </tr>
        </thead>
      </table>
    </div>
    <div class="reportFooter">
      <div style="margin-top: 1rem">
        <span>
          Durch die nachfolgende Unterschrift wird die Richtigkeit und
          Vollständigkeit der obigen Angaben bestätigt.
        </span>
      </div>
      <div class="row d-flex justify-content-around" style="margin-top: 5rem">
        <span class="col-4" style="border-top: 1px solid black">
          Datum, Unterschrift Auszubildende/r
        </span>
        <span class="col-4" style="border-top: 1px solid black">
          Datum, Unteschrift Ausbildende/r oder Ausbilder/in
        </span>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { Option, Day, Report } from "@/types";
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
  methods: {
    async getOptions() {
      try {
        this.options = await API.getOption();
      } catch (e) {
        console.error(e, "API.getOption()");
      }
    },
    async getSchoolReports() {
      try {
        this.schoolReports = await API.getSchoolReport();
      } catch (e) {
        console.error(e, "API.getSchoolReport()");
      }
    },
    async getWorkReports() {
      try {
        this.workReports = await API.getWorkReport();
      } catch (e) {
        console.error(e, "API.getWorkReport()");
      }
    },
    getOption() {
      this.values = this.selected;
      this.counter = this.counter2;
    },
    resetOption() {
      this.values = { ...initialOption };
    },
  },
  mounted() {
    this.getOptions();
    this.getSchoolReports();
    this.getWorkReports();
  },
  data() {
    return {
      counter: "",
      counter2: "",
      options: [] as Option[],
      selected: {} as Option,
      values: { ...initialOption } as Option,
      schoolReports: [] as Report[],
      workReports: [] as Report[],
    };
  },
  setup() {
    return;
  },
});
</script>
<style scoped lang="scss">
table {
  border: 1px solid black;
}
tr {
  border: 1px solid black;
}
td {
  border: 1px solid black;
}
@media print {
  .report {
    page-break-after: always;
  }
}
.print-only {
  display: none;
}

@media print {
  .no-print {
    display: none;
  }

  .print-only {
    display: block;
  }
}
</style>
