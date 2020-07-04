<template>
  <li class="todo-list__item">
    <span class="todo" v-bind:class="{done: todo.completed}">
      <input type="checkbox"
             class="todo__checkbox"
             v-bind:disabled="isDisabled"
             v-on:change="todo.completed = !todo.completed">
      <strong class="todo__number">{{todo.id}}</strong>
      {{todo.title}}
    </span>
  </li>
</template>

<script>
export default {
  name: 'TodoItem',
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  data() {
    return{
      isDisabled: true
    }
  }
}
</script>

<style lang="scss">
.todo-list__item {
  display: flex;
  padding: 0 1rem;
  align-items: center;
  margin-bottom: 1rem;
  &:last-child{
    margin-bottom: 0;
  }
  & .todo {
    width: 100%;
    text-align: initial;
    &__checkbox {
      margin-right: 1rem;
    }
    &__number {
      margin-right: 1rem;
    }
  }
}
.done {
  text-decoration: line-through;
}
</style>
