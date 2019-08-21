<template>
  <div class="listMusic">
    <ul class="list">
      <li v-for="(item, index) in list" :class="{'invalide':item.etat=='invalide'}">
        <div class="div_li">
          <b>{{ item.artiste | cap }}</b>
          - {{ item.titre | cap }} [{{ item.genre | cap }}]
        </div>
        <div class="div_button">
          <b-button class="button" @click="validation(index)" type="is-success">Valider</b-button>
          <b-button class="button" @click="supprimer(index)" type="is-danger">Supprimer</b-button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Capitalize from "@/filters/capitalize";

export default {
  name: "Listmusic",
  props: {
    list: Array
  },
  methods: {
    validation(index) {
      this.$emit("validation", index);
    },
    supprimer(index) {
      this.$emit("supprimer", index);
    }
  },
  filters: {
    cap: Capitalize
  }
};
</script>

<style lang="scss">
li {
  color: green;
  width: 50%;
  margin: 0 auto 0.25rem;
  display: flex;
  justify-content: space-between;
  &.invalide {
    color: red;
  }
  div {
    &.div_button {
      text-align: right;
    }
  }
}
</style>
