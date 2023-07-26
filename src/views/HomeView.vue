<template>
  <div>
    <h2 class="input-wrapper">
      <input
        type="text"
        v-model="taskInput"
        class="taskInput"
        placeholder="Add your task here ..."
      />
      <button @click="addTask()" class="inputButton">Add task</button>
    </h2>
    <main class="element">
      <div class="col" v-for="(item, colIndex) in cols" :class="item.class">
        <TitleItem>{{ item.title }}</TitleItem>
        <div
          v-for="(item, index) in tasks[colIndex].content"
          :key="item.id"
          class="wrapper"
        >
          <CardItem
            :item="item"
            :index="index"
            @getChildData="getEmit"
            @removeCard="removeTask"
          />
        </div>
      </div>
    </main>
  </div>
</template>
<script setup>
import { ref, reactive } from "vue";
import { nanoid } from "nanoid";
import CardItem from "@/components/CardItem.vue";
import TitleItem from "@/components/TitleItem.vue";

const taskInput = ref("");
const cols = reactive([
  {
    title: "New",
    class: "col1",
  },
  {
    title: "Active",
    class: "col2",
  },
  {
    title: "Resolved",
    class: "col3",
  },
  {
    title: "Closed",
    class: "col4",
  },
]);
const tasks = reactive([
  {
    tag: "new",
    content: [
      {
        tag: "new",
        id: nanoid(),
        task: "task A -- Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.1",
      },
      {
        tag: "new",
        id: nanoid(),
        task: "task B -- Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        tag: "new",
        id: nanoid(),
        task: "task C -- lorem ipsum dollar emmet",
      },
    ],
  },
  {
    tag: "active",
    content: [
      {
        tag: "active",
        id: nanoid(),
        task: "task D -- Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      },
    ],
  },
  {
    tag: "resolved",
    content: [],
  },
  {
    tag: "closed",
    content: [],
  },
]);

const addTask = () => {
  tasks[0].content.push({ tag: "new", id: nanoid(), task: taskInput.value });
  taskInput.value = "";
};
const removeTask = (tag, index) => {
  tasks.every((item) => {
    if (item.tag == tag) {
      item.content.splice(index, 1);
      return false;
    }
    return true;
  });
};

function getEmit(task, prevTag, index, tag) {
  tasks.every((item) => {
    console.log("here");
    if (item.tag == tag) {
      item.content.push({ tag, task });
      return false;
    }
    return true;
  });
  tasks.every((item) => {
    if (item.tag == prevTag) {
      item.content.splice(index, 1);
      return false;
    }
    return true;
  });
  // console.log(tasks);
}
</script>
<style scoped>
.element {
  width: 100vw;
  min-height: 100vh;
  background-color: #e8eae6;
  display: flex;
  justify-content: center;
}
.col {
  flex-basis: 24.5%;
  width: 24.5%;
  padding: 12px;
  margin: 5px;
  border: 0.5px solid #d9c6d1;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  border-radius: 15px;
}
.wrapper {
  width: 100%;
}
.taskInput {
  padding: 5px 10px;
  width: 30%;
  background-color: rgb(201, 201, 201);
  border-radius: 20px;
}
.input-wrapper {
  margin: 15px 50px;
}
.inputButton {
  padding: 5px 10px;
  margin: 10px 20px;
  background-color: rgb(253, 199, 199);
  border-radius: 15px;
}
.inputButton:hover {
  background-color: rgb(255, 181, 181);
}
input::placeholder {
  color: rgb(104, 104, 104);
}
.col1 .card {
  background-color: #aacdbe;
}
.col2 .card {
  background-color: #f4f7c5;
}
.col3 .card {
  background-color: #fbc687;
}
.col4 .card {
  background-color: #ea907a;
}
</style>
