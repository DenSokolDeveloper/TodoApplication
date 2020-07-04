<template>
  <div>
    <AddCard
            @add-card="addCard"
    />
    <h4>Заметки</h4>
    <ul class="list">
      <CardsItem
        v-for="(card, i) of allCards"
        v-bind:card="card"
        v-bind:index="i"
        v-on:remove-card="removeCard"
      />
    </ul>
  </div>
</template>

<script>
import AddCard from "../views/AddCard"
import CardsItem from "@/components/CardsItem";
import {mapGetters} from "vuex"
export default {
  name: 'CardsList',
  components: {CardsItem,AddCard},
  methods: {
    removeCard(id) {
      this.allCards = this.allCards.splice(id, 1)
    },
    addCard(card) {
      this.allCards.push(card)
    }
  },
  computed: mapGetters(["allCards"]),
  // computed: {
  //   allCards() {
  //     return this.$store.getters.allCards
  //   }
  // },
}
</script>

<style scoped lang="scss">
h4 {
  margin: 2rem 0;
}
.list {
  list-style: none;
  display: flex;
  justify-content: normal;
  flex-wrap: wrap;
  width: 100%;
}
</style>
