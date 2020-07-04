import Vue from 'vue'
import Router from 'vue-router'
import Home from "./views/Home";
import AddCard from "./views/AddCard";
import EditTodo from "./views/EditTodo";

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            name: 'home',
            path: '/',
            component: Home
        },
        {
            name: 'add',
            path: '/addcard',
            component: AddCard
        },
        {
            name: 'edit',
            path: '/:id',
            component: EditTodo,
            props: true
        }
    ]
})
