<template>
  <ul class="todo-list">
    <TodoItem
            v-for="todo in todo.slice(0,4)" :key="todo.id"
            v-bind:todo="todo"
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
    }
  },
}
</script>

<style scoped>

</style>
