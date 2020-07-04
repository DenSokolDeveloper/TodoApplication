<template>
  <div id="app">
    <router-view class="container" />
  </div>
</template>

<script>
import CardsList from '@/components/CardsList'

export default {
  name: 'App',
  data() {
    return {
      cards: [
        {id: 1, title: 'Сегодня'},
        {id: 2, title: 'Завтра'},
        {id: 3, title: 'Вчера'},
      ]
    }
  },
  components: {
    CardsList
  },
  methods: {
    removeCard(id) {
      this.cards = this.cards.filter(t => t.id !== id)
    },
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container {
  width: 1200px;
  margin: 0 auto;
}
h1 {
  margin: 1rem 0;
}
</style>
