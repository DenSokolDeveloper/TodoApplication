<template>
  <form class="add-form" @submit.prevent="submit">
    <input required type="text" class="add-form__title" placeholder="Title" v-model="title">
    <button type="submit" class="btn">Создать</button>
  </form>
</template>

<script>
  import {mapMutations} from 'vuex'
export default {
  name: 'AddEllement',
  data () {
    return {
      title: ''
    }
  },
  methods: {
    ...mapMutations(['createCard']),
    submit() {
      this.createCard({
        title: this.title,
        id: Date.now(),
        todos:[]
      })
      this.title = ''
    }
  }
}
</script>

<style scoped lang="scss">
.add-form {
  width: 33%;
  margin: 1rem 0;
  display: flex;
  justify-content: space-between;
  &__title {
    padding: .5rem 0 .5rem 1rem;
    width: 75%;
    border: 1px solid black;
  }
  & .btn {
    border: 1px solid black;
    background-color: #000000;
    color: #FFFFFF;
    padding: .5rem .3rem;
    cursor: pointer;
    transition: all .4s linear;
    &:hover {
      transition: all .4s linear;
      background-color: #fff;
      color: black;
    }
  }
}
</style>
