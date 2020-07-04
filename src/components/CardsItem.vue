<template>
  <li class="list__item">
    <span class="close" @click="showModal">&times;</span>
    <h3 class="list__item__title">{{card.title}}</h3>
    <TodoList
      v-bind:todo="card.todos"
    />
    <router-link
            :to="{name: 'edit', params: {id: index+1}}"
            class="btn">Редактировать</router-link>
    <ModalDelete
        v-show="isModalVisible"
        @close="closeModal"
        v-bind:card="card"
        v-bind:index="index"
        v-on:remove-card="removeCard"
    />
  </li>
</template>

<script>
  import EditTodo from "../views/EditTodo";
  import ModalDelete from '@/components/ModalDelete';
  import TodoList from "@/components/TodoList";
export default {
  name: 'CardsItem',
  props: {
    card: {
      type: Object,
      required: true
    },
    index: Number
  },
  data () {
    return {
      isModalVisible: false,
    };
  },
  methods: {
    removeCard(id) {
      this.$emit('remove-card', id)
    },
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
  },
  components: {TodoList, ModalDelete, EditTodo}
}
</script>

<style scoped lang="scss">
.list__item {
  background: #000;
  color: #fff;
  width: 30%;
  height: 300px;
  margin-right: 2rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &:last-child {
    margin-right: 0;
  }
  & .close {
    align-self: flex-end;
    margin: .5rem .5rem 0 0;
    font-size: 20px;
    cursor: pointer;
  }
  &__title {
    font-size: 26px;
  }
  & .btn {
    width: 50%;
    text-decoration: none;
    align-self: flex-end;
    border: 1px solid #fff;
    background-color: #000;
    color: white;
    margin: 0 .5rem .5rem 0;
    cursor: pointer;
    transition: all .4s linear;
    &:hover {
      background-color: #ffffff;
      border-color: black;
      color: black;
      transition: all .4s linear;
    }
  }
}
</style>
