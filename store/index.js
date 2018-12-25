import Vue from 'vue'
import Vuex from 'vuex'
const store = () => new Vuex.Store({
    state: {
        name: ''
    },
    mutations: {
        changeName(state, name) {
            state.name = name;
        }
    }
})

export default store


