<template>
  <div class="generator">
    <div class="settings">
      <div>
        <label for="from">von: </label>
        <input style="width: 10%" name="from" type="date" />
      </div>
      <div>
        <label for="to">bis: </label>
        <input style="width: 10%" name="to" type="date" />
      </div>
      <button class="btn btn-primary">erstellen</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    msg: String,
  },
})
export default class HelloWorld extends Vue {
  msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
