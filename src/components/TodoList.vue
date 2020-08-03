<template>
  <ul class="todo-list">
    <TodoItem
            v-for="(todo, i) in todo" :key="todo.id"
            v-bind:todo="todo"
            v-bind:idCard="idCard"
            v-bind:number="i"
            v-bind:isDisabled="isDisabled"
    />

  </ul>
</template>

<script>
  import TodoItem from "@/components/TodoItem";
export default {
  name: 'TodoList',
  components: {TodoItem},
  props: {
    todo: {
      type: Array,
      required: true
    },
    idCard: Number,
    isDisabled: {
      type: Boolean
    }
  },
}
</script>

<style lang="scss">
  .todo-list {
    margin-top: 1rem;
    list-style: none;
    display: flex;
    flex-direction: column;
  }

</style>
