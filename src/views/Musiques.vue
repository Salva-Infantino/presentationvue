<template>
  <div class="Musiques">
    <section>
      <h1 class="title">Mes Musiques</h1>
      <Listmusic
        :list="playlist"
        v-if="playlist.length > 0"
        @validation="validation"
        @supprimer="supprimer"
      ></Listmusic>
      <p v-else>La liste est vide...</p>
    </section>

    <section>
      <AddMusic @addMusic="updateList"></AddMusic>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import Listmusic from "@/components/Listmusic.vue";
import AddMusic from "@/components/AddMusic.vue";

export default {
  name: "musiques",
  components: {
    Listmusic,
    AddMusic
  },
  data() {
    return {
      playlist: [
        /*{
          artiste: "Queen",
          titre: "Show must go on",
          genre: "Rock",
          etat: "invalide"
        },
        {
          artiste: "Europe",
          titre: "Final countdown",
          genre: "Rock",
          etat: "invalide"
        },
        {
          artiste: "Vivaldi",
          titre: "4 saisons",
          genre: "Classique",
          etat: "invalide"
        }*/
      ]
    };
  },
  methods: {
    updateList(newMusic) {
      this.playlist.push(newMusic);
      localStorage.setItem("playlist", JSON.stringify(this.playlist));
      synch();
    },
    validation(index) {
      this.playlist[index].etat = "valide";
      this.synch();
    },
    supprimer(index) {
      this.playlist.splice(index, 1);
      this.synch();
    },
    synch() {
      localStorage.setItem("playlist", JSON.stringify(this.playlist));
      this.$buefy.snackbar.open(`Opération bien effectuée`);
    }
  },
  created() {
    if (localStorage.liste) {
      this.playlist = JSON.parse(localStorage.getItem("liste"));
    }
  }
};
</script>