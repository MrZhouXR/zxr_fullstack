<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" />
  <h1>{{ state.count }} * 2 = {{ double }}</h1>
  <h2>{{ num }}</h2>
  <button @click="add">累加</button> -->

  <!-- <ul>
    <Fragment :data="[5, 3, 4, 1, 8, 9, 2]"></Fragment>
  </ul>

  <TeleportDemo></TeleportDemo> -->
  <!-- <Suspense>
    <template #default>
      <AsyncComponent :timeout="3000"></AsyncComponent>
    </template>
    <template #fallback>
      <Loading></Loading>
    </template>
  </Suspense> -->
  <TodoList/>
</template>

<script>
// composition  api
import { reactive, computed, ref, onMounted } from "vue"; // reactive响应式数据参数为对象
// import Fragment from './components/Fragment.vue'
// import TeleportDemo from './components/Teleport.vue'
// import AsyncComponent from "./components/AsyncComponent.vue";
// import Loading from './components/Loading.vue'
import TodoList from './components/TodoList'
export default {
  setup() {
    // 入口
    // const state = reactive({
    //   count: 1
    // })
    const { state, double } = useCounter(1);

    let num = ref(2); // ref 使基础类型变成响应式

    function add() {
      state.count++;
      num.value += 10;
    }

    // const double = computed(() => {
    //   return state.count * 2
    // })

    onMounted(() => {});

    return { state, add, double, num };
  },
  components: {
    // Fragment,
    // TeleportDemo
    // AsyncComponent,
    // Loading,
    TodoList
  },
};

function useCounter(count) {
  const state = reactive({
    count,
  });
  const double = computed(() => state.count * 2);
  return { state, double };
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
