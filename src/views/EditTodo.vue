<template>
  <div>
    <h3>Редактирование</h3>
    <hr>
    <router-link to="/" class="link">Заметки</router-link>
    <h3>{{allCards[currentCardId].title}}</h3>
      <AddTodo v-bind:idCard="currentCardId"/>
      <TodoList
              v-bind:todo="allCards[currentCardId].todos"
              v-bind:idCard="currentCardId"
              v-bind:isDisabled="isDisabled"
      />
  </div>
</template>

<script>
import {mapGetters,mapActions} from "vuex"
import ModalDelete from "@/components/ModalDelete";
import TodoList from "@/components/TodoList";
import AddTodo from "@/components/AddTodo";
export default {
  components: {
    ModalDelete, TodoList, AddTodo
  },
  name: 'EditTodo',
  methods: {
    ...mapActions(['SET_CURRENT_CARD_ID']),
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    }
  },
  async mounted() {
    await this.SET_CURRENT_CARD_ID(this.id-1);
  },
  computed: {
    ...mapGetters(['currentCardId']),
    allCards() {
      return this.$store.getters.allCards
    },
  },
  data() {
    return {
        isDisabled: false,
        isModalVisible: false,
    }
  },
  props: ['id'],
}
</script>

<style lang="scss">
.todo-list {
}
</style>
