import Vue from 'vue'
import Router from 'vue-router'
import Home from "./views/Home";
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
            name: 'edit',
            path: '/:id',
            component: EditTodo,
            props: true
        }
    ]
})
