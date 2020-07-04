<template>
  <div>
    <h1>Todo application</h1>
    <hr>

    <CardsList />
  </div>
</template>

<script>
  import CardsList from '@/components/CardsList'

  export default {
    name: 'Home',
    components: {
      CardsList
    },
    methods: {
      addCard(card) {
        this.cards.push(card)
      }
    }
  }
</script>

<style lang="scss">
  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }
  .message {
    margin: 1rem 0;
    font-size: 20px;
  }
  h1 {
    margin: 1rem 0;
  }
  .link {
    width: 30%;
    align-self: flex-start;
    background-color: #000;
    color: #FFFFFF;
    text-decoration: none;
    padding: 10px;
    border: 1px solid #000000;
    transition: all .4s linear;
    margin-top: 20px;
    &:hover {
      background-color: #fff;
      border-color: #000;
      color: black;
      transition: all .4s linear;
    }
  }
</style>
