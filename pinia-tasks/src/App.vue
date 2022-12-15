<template>
  <main>
    <!-- heading-->
    <header>
      <img src="./assets/pinia-logo.svg" alt="Pinia Logo" />
      <h1>Pinia Tasks</h1>
    </header>
    <!-- task list-->
    <div class="task-list">
      <div v-for="task in taskStore.tasks">
        <TaskDetails :task="task" />
      </div>
    </div>
  </main>
</template>

<script>
import { TaskDetails } from "./components";
import { useTaskStore } from "./stores";
export default {
  components: { TaskDetails },
  setup() {
    const taskStore = useTaskStore();

    return { taskStore };
  },
};
</script>
