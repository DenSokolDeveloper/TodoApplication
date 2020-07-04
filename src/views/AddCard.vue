<template>
  <div class="addcard-wrapper">
    <h2>Добавить заметку</h2>
    <form @submit.prevent="onSubmit">
      <input type="text" v-model="title">
      <button type="submit">Create</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AddCard',
  data() {
    return {
      title: ''
    }
  },
  methods: {
    onSubmit() {
      if (this.title.trim()) {
        const newCard = {
          id: Date.now(),
          title: this.title,
        };
        this.$emit('add-card', newCard)
        this.title = ''
      }
    }
  }
}
</script>

<style scoped lang="scss">
.addcard-wrapper {
  width: 20%;
  & h2 {
    margin: 1rem 0
  }
  & form {
    & input {
      padding: 5px 10px;
      border: 1px solid black;
    }
    & button {
      padding: 5px 0;
      margin-left: 5px;
      border: 1px solid black;
      color: black;
      background-color: #fff;
      transition: all .4s linear;
      cursor: pointer;
      &:hover {
        color: #FFFFFF;
        background-color: #000;
        transition: all .4s linear;
      }
    }
  }
}
</style>
