<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal"
           role="dialog"
           aria-labelledby="modalTitle"
           aria-describedby="modalDescription"
      >
        <header
                class="modal-header"
                id="modalTitle"
        >
          <slot name="header" v-if="card">
            Вы уверены что хотите удалить эту заметку?
            <button
                    type="button"
                    class="btn-close"
                    @click="close"
                    aria-label="Close modal"
            >
              x
            </button>
          </slot>
          <slot name="header" v-else-if="todo">
            Вы уверены что хотите удалить эту задачу?
            <button
                    type="button"
                    class="btn-close"
                    @click="close"
                    aria-label="Close modal"
            >
              x
            </button>
          </slot>
        </header>
        <footer class="modal-footer">
          <slot name="footer">
            <button
                    v-if="card"
                    type="button"
                    class="btn-green"
                    @click="deleteCard(index)"
                    v-on:click="close"
            >
              Да, уверен
            </button>
            <button
                    v-else-if="todo"
                    type="button"
                    class="btn-green"
                    @click="deleteTodo(number)"
                    v-on:click="close"
            >
              Да, уверен
            </button>
          </slot>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
  import {mapMutations} from "vuex"
export default {
  name: 'ModalDelete',
  props: {
    card: {
      type: Object,
        // required: true
    },
    todo: {
      type: Object,
      // required: true
    },
    index: Number,
    idCard: Number,
    number: Number
  },
  methods: {
    ...mapMutations(['deleteCard','deleteTodo']),
    close() {
      this.$emit('close');
    },
  },
}
</script>

<style scoped lang="scss">
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
  }

  .modal-header,
  .modal-footer {
    padding: 15px;
    display: flex;
  }

  .modal-header {
    border-bottom: 1px solid #eeeeee;
    color: #4AAE9B;
    justify-content: space-between;
    align-items: center;
  }

  .modal-footer {
    border-top: 1px solid #eeeeee;
    justify-content: flex-end;
  }

  .btn-close {
    border: none;
    font-size: 20px;
    margin-left: 20px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
  }

  .btn-green {
    color: white;
    background: #4AAE9B;
    border: 1px solid #4AAE9B;
    border-radius: 2px;
    cursor: pointer;
    padding: 10px 20px;
    &:hover {
      background: #62e6cf;
      border: 1px solid #62e6cf;
    }
  }
</style>
