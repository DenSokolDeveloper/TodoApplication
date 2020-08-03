<template>
  <div>
    <h4>Заметки</h4>
    <AddEllement />
    <ul class="list">
      <CardsItem
        v-for="(card, i) of allCards"
        v-bind:card="card"
        v-bind:index="i"
      />
    </ul>
  </div>
</template>

<script>
import AddEllement from "@/components/AddEllement"
import CardsItem from "@/components/CardsItem";
import {mapGetters} from "vuex"
export default {
  name: 'CardsList',
  components: {CardsItem,AddEllement},
  methods: {

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
