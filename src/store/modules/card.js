export default {
    actions: {
        SET_CURRENT_CARD_ID({commit}, id){
            commit('setCurrentId', id);
        }
    },
    mutations: {
        createCard(state, newCard) {
            state.cards.push(newCard)
        },
        createTodo(state, newTodo) {
            state.cards[state.currentCardId].todos.push(newTodo)
        },
        deleteCard(state, id) {
            state.cards.splice(id ,1)
        },
        deleteTodo(state,  number) { //удаляет только перывый элемент еще нужно id
            state.cards[state.currentCardId].todos.splice(number,1)
        },
        setCurrentId(state, prop){
            return state.currentCardId = prop
        }
    },
    state: {
        currentCardId: null,
        cards: [
            {
                id: 1,
                title: 'Сегодня',
                todos: [
                    {
                        "userId": 1,
                        "id": 1,
                        "title": "delectus aut autem",
                        "completed": false
                    },
                    {
                        "userId": 1,
                        "id": 2,
                        "title": "quis ut nam facilis et officia qui",
                        "completed": false
                    },
                    {
                        "userId": 1,
                        "id": 3,
                        "title": "fugiat veniam minus",
                        "completed": false
                    },
                    {
                        "userId": 1,
                        "id": 4,
                        "title": "et porro tempora",
                        "completed": false
                    },
                    {
                        "userId": 1,
                        "id": 5,
                        "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
                        "completed": false
                    },
                    {
                        "userId": 1,
                        "id": 6,
                        "title": "qui ullam ratione quibusdam voluptatem quia omnis",
                        "completed": false
                    },
                    {
                        "userId": 1,
                        "id": 7,
                        "title": "illo expedita consequatur quia in",
                        "completed": false
                    },
                    {
                        "userId": 1,
                        "id": 8,
                        "title": "quo adipisci enim quam ut ab",
                        "completed": false
                    },
                    {
                        "userId": 1,
                        "id": 9,
                        "title": "molestiae perspiciatis ipsa",
                        "completed": false
                    }
                ]
            },
            {
                id: 2,
                title: 'Завтра',
                todos: [
                    {
                        "userId": 1,
                        "id": 1,
                        "title": "delectus aut autem",
                        "completed": false
                    },
                    {
                        "userId": 1,
                        "id": 2,
                        "title": "quis ut nam facilis et officia qui",
                        "completed": false
                    },
                    {
                        "userId": 1,
                        "id": 3,
                        "title": "fugiat veniam minus",
                        "completed": false
                    },
                    {
                        "userId": 1,
                        "id": 4,
                        "title": "et porro tempora",
                        "completed": false
                    },
                    {
                        "userId": 1,
                        "id": 5,
                        "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
                        "completed": false
                    },
                    {
                        "userId": 1,
                        "id": 6,
                        "title": "qui ullam ratione quibusdam voluptatem quia omnis",
                        "completed": false
                    },
                    {
                        "userId": 1,
                        "id": 7,
                        "title": "illo expedita consequatur quia in",
                        "completed": false
                    },
                    {
                        "userId": 1,
                        "id": 8,
                        "title": "quo adipisci enim quam ut ab",
                        "completed": false
                    }
                ]
            },
            {
                id: 3,
                title: 'Послезавтра',
                todos: [
                    {
                        "userId": 1,
                        "id": 1,
                        "title": "delectus aut autem",
                        "completed": false
                    },
                    {
                        "userId": 1,
                        "id": 2,
                        "title": "quis ut nam facilis et officia qui",
                        "completed": false
                    },
                    {
                        "userId": 1,
                        "id": 3,
                        "title": "fugiat veniam minus",
                        "completed": false
                    },
                    {
                        "userId": 1,
                        "id": 4,
                        "title": "et porro tempora",
                        "completed": false
                    },
                    {
                        "userId": 1,
                        "id": 5,
                        "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
                        "completed": false
                    },
                    {
                        "userId": 1,
                        "id": 6,
                        "title": "qui ullam ratione quibusdam voluptatem quia omnis",
                        "completed": false
                    },
                    {
                        "userId": 1,
                        "id": 7,
                        "title": "illo expedita consequatur quia in",
                        "completed": false
                    }
                ]
            }
        ],

    },
    getters: {
        allCards(state) {
            return state.cards;
        },
        currentCardId(state){
            return state.currentCardId;
        }
    },
}
