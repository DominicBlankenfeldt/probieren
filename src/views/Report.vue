<template>
  <div class="no-print">
    <div>DailyReport</div>
    <div class="selection d-flex justify-content-center">
      <select
        class="form-select"
        aria-label="Default select example"
        style="width: 25%"
      >
        <option selected disabled>Einstellung auswählen:</option>
        <option v-for="option in options" :key="option.optionName">
          {{ option.optionName }}
        </option>
      </select>
    </div>
    <div class="buttonGroup">
      <button class="btn btn-success" style="margin: 1rem">generieren</button>
      <button class="btn btn-success" style="margin: 1rem">zurücksetzen</button>
    </div>
  </div>
  <div class="report">
    <div class="reportHeader" style="margin: 2rem; width: 100%">
      <span><b>Ausbildungsnachweis (täglich)</b></span>

      <div class="d-flex justify-content-around">
        <table>
          <tbody>
            <tr>
              <th scope="row">Name des/der Auszubildenden:</th>
              <td colspan="3"></td>
            </tr>
            <tr>
              <th scope="row">Ausbildungjahr:</th>
              <td colspan="3">fill year</td>
            </tr>
            <tr>
              <th scope="row">Ggf. ausbildende Abteilung</th>
              <td colspan="3">fill</td>
            </tr>
            <tr>
              <th scope="row">Ausbildungswoche von:</th>
              <td>fill date</td>
              <td><b>bis:</b></td>
              <td>fill date</td>
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
          <tr>
            <td scope="col">Montag</td>
            <td scope="col"></td>
            <td scope="col"></td>
          </tr>
          <tr>
            <td scope="col">Dienstag</td>
            <td scope="col"></td>
            <td scope="col"></td>
          </tr>
          <tr>
            <td scope="col">Mittwoch</td>
            <td scope="col"></td>
            <td scope="col"></td>
          </tr>
          <tr>
            <td scope="col">Donnerstag</td>
            <td scope="col"></td>
            <td scope="col"></td>
          </tr>
          <tr>
            <td scope="col">Freitag</td>
            <td scope="col"></td>
            <td scope="col"></td>
          </tr>
          <tr>
            <td scope="col">Samstag</td>
            <td scope="col"></td>
            <td scope="col"></td>
          </tr>
          <tr>
            <td scope="col">Sonntag</td>
            <td scope="col"></td>
            <td scope="col"></td>
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
      <div class="row d-flex justify-content-around" style="margin-top: 2rem">
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
import { Option } from "@/types";
import * as API from "@/API";
export default defineComponent({
  methods: {
    async getOptions() {
      this.options = await API.getOption();
    },
  },
  mounted() {
    this.getOptions();
  },
  data() {
    return { options: [] as Option[] };
  },
  setup() {
    return {};
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
