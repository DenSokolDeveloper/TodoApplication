<template>
  <div>
    <h3>Редактирование</h3>
    <hr>
    <router-link to="/" class="link">Заметки</router-link>
    <h3>{{allCards[this.id-1].title}}</h3>
    <ul class="todo-list">
      <li class="todo-list__item" v-for="todo of allCards[this.id-1].todos">
        <span class="todo" v-bind:class="{done: todo.completed}">
      <input type="checkbox"
             class="todo__checkbox"
             v-bind:disabled="isDisabled"
             v-on:change="todo.completed = !todo.completed">
      <strong class="todo__number">{{todo.id}}</strong>
      {{todo.title}}
    </span>
        <button class="rm"
                @click="removeTodo(todo.id)"
        >&times;</button>
<!--        <ModalDelete-->
<!--                v-show="isModalVisible"-->
<!--                @close="closeModal"-->
<!--        />-->
      </li>
    </ul>
  </div>
</template>

<script>
import {mapGetters} from "vuex"
import ModalDelete from "@/components/ModalDelete";
export default {
  components: {
    ModalDelete
  },
  name: 'EditTodo',
  methods: {
    // removeCard(id) {
    //   this.$emit('remove-card', id)
    // },
    // showModal() {
    //   this.isModalVisible = true;
    // },
    // closeModal() {
    //   this.isModalVisible = false;
    // }
      removeTodo(index) {
          this.allCards[this.id-1].todos = this.allCards[this.id-1].todos.splice(index, 1)
          console.log(index);
          // this.allCards.todos = this.allCards.todos.splice(index,1)
      }
  },
  computed: {
    allCards() {
      return this.$store.getters.allCards
    }
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

<style scoped lang="scss">
.todo-list {
  margin-top: 1rem;
 &__item {
   margin-top: 1rem;
   &:first-child {
     margin-top: 0;
   }
   & .todo {
     width: 50%;
   }
   & .rm {
     background: transparent;
     border: none;
     cursor: pointer;
     font-size: 26px;
   }
 }
}
</style>
