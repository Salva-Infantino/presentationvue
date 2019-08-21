<template>
  <div class="AddMusic">
    <h2 class="title">Ajouter une musique</h2>
    <form action method>
      <b-field label="Artiste">
        <b-input v-model="newMusic.artiste"></b-input>
      </b-field>
      <b-field label="Titre">
        <b-input v-model="newMusic.titre"></b-input>
      </b-field>
      <b-field label="Genre">
        <b-input v-model="newMusic.genre"></b-input>
      </b-field>
      <button @click="envoyer">Envoyer</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Formulaire",
  data() {
    return {
      newMusic: {
        artiste: "",
        titre: "",
        genre: "",
        etat: "invalide"
      }
    };
  },
  methods: {
    envoyer() {
      let value = this.newMusic;
      this.$emit("addMusic", value);
      this.newMusic = {
        artiste: "",
        titre: "",
        genre: "",
        etat: "invalide"
      };
    }
  }
};
</script>

<style lang="scss">
form {
  width: 25%;
  margin: 0 auto;
  button {
    font-size: 1.5rem;
    width: 100%;
  }
}
</style>
