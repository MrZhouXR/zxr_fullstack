<template>
  <section class="todoapp">
    <header class="header">
      <h1>vue3 todos</h1>
      <input
        type="text"
        class="new-todo"
        placeholder="想干的事"
        @keyup.enter="submit"
        v-model="content"
      />
    </header>
    <section class="main">
      <ul class="todo-list">
        <li
          class="todo"
          v-for="(todo, index) in arr"
          :key="todo.id"
          :class="{ completed: todo.completed }"
        >
          <div class="view">
            <input class="toggle" type="checkbox" v-model="todo.completed" />
            <label>{{ todo.title }}</label>
            <button class="destroy" @click="remove(index)"></button>
          </div>
        </li>
      </ul>
    </section>
    <div class="footer">
      <span class="todo-count">
        <strong>{{ remaining }}</strong> items left
      </span>
      <button class="clear-completed" @click="removeCompleted">clear completed</button>
    </div>
  </section>
</template>

<script>
import { reactive, toRefs, computed } from "vue";
export default {
  setup() {
    const state = reactive({
      content: "",
      arr: []
    });

    let remaining = computed(() => {
       return state.arr.filter(item => !item.completed).length
    })
    // console.log(remaining);

    function submit() {
      if(state.content.trim() === '') return
      let value = state.content && state.content.trim();
      state.arr.push({
        id: state.arr.length,
        title: value,
        completed: false,
      });
      state.content = "";
    }

    function remove(index) {
      state.arr.splice(index, 1);
    }

    function removeCompleted() {
      state.arr = state.arr.filter(item => !item.completed)
    }

    return {
      ...toRefs(state),
      submit,
      remove,
      remaining,
      removeCompleted
    }
  }
};
</script>

<style>
.header.fixed {
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 100;
}
</style>