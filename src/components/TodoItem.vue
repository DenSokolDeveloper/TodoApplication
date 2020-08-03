<template>
  <li class="todo-list__item">
    <span class="todo" v-bind:class="{done: todo.completed}">
      <span>
      <input type="checkbox"
             class="todo__checkbox"
             v-bind:disabled="isDisabled"
             v-on:change="todo.completed = !todo.completed">

          <strong class="todo__number">{{number+1}}</strong>
        </span>
          {{todo.title}}
    </span>
    <button class="rm" v-bind:disabled="isDisabled" @click="showModal">&times;</button>
    <ModalDelete
            v-show="isModalVisible"
            @close="closeModal"
            v-bind:todo="todo"
            v-bind:idCard="idCard"
            v-bind:number="number"
    />
  </li>
</template>

<script>
  import ModalDelete from "@/components/ModalDelete";
export default {
  name: 'TodoItem',
  components: {ModalDelete},
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    }
  },
  props: {
    todo: {
      type: Object,
      required: true,
    },
    idCard: Number,
    number: Number,
    isDisabled: {
      type: Boolean
    }
  },
  data() {
    return{
      isModalVisible: false
    }
  }
}
</script>

<style lang="scss">
.todo-list__item {
  margin-top: 1rem;
  display: flex;
  &:first-child {
    margin-top: 0;
  }
  & .todo {
      display: flex;
      align-items: center;
   & span {
     margin: 0 1rem;
     & .todo__checkbox {
       margin-right: 1rem;
       cursor: pointer;
     }
   }
  }
  & .rm {
    background: transparent;
    color: black;
    border: none;
    cursor: pointer;
    font-size: 26px;
    align-self: flex-end;
  }
}

.done {
  text-decoration: line-through;
}
</style>
