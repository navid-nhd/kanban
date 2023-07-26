
<template>
  <div>
    <div class="input-wrapper">
      <input type="text" v-model="taskInput" class="taskInput" placeholder="Add your task here ...">
      <button @click="addTask()" class="inputButton">Add task</button>
    </div>

    <main class="element">
    <div class="col col1">
      <TitleItem>New</TitleItem>
      <div v-for="(item,index) in tasks[0].content" :key="index" class="wrapper">
        <CardItem :item="item" :index="index" @getChildData="getEmit" @removeCard="removeTask"/>
      </div>
    </div>
    <div class="col col2">
      <TitleItem>Active</TitleItem>
      <div v-for="(item,index) in tasks[1].content" :key="index" class="wrapper">
        <CardItem :item="item" :index="index" @getChildData="getEmit" @removeCard="removeTask"/>
      </div>
    </div>
    <div class="col col3">
      <TitleItem>Resolved</TitleItem>
      <div v-for="(item,index) in tasks[2].content" :key="index" class="wrapper">
        <CardItem :item="item" :index="index" @getChildData="getEmit" @removeCard="removeTask"/>
      </div>
    </div>
    <div class="col col4">
      <TitleItem>Closed</TitleItem>
      <div v-for="(item,index) in tasks[3].content" :key="index" class="wrapper">
        <CardItem :item="item" :index="index" :tag="item.tag" @getChildData="getEmit" @removeCard="removeTask"/>
      </div>
    </div>
  </main>
  </div>
</template>
<script setup>
import { ref , reactive } from 'vue';
import CardItem from '../components/CardItem.vue';
import TitleItem from '../components/TitleItem.vue';

const taskInput = ref('')

function addTask(){
  tasks[0].content.push({'tag' : 'new' , 'task' : taskInput.value})
  taskInput.value = ''
}
function removeTask(params){
  tasks.forEach((item) => {
    if(item.tag == params[0]){
       item.content.splice(params[1],1)
    }
  })
}
const tasks = reactive([
    {
      tag: 'new',
      content : [
        {
          tag: 'new',
          task : 'task A -- Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.1'
        }, 
        {
          tag: 'new',
          task : 'task B -- Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        }, 
        {
          tag: 'new',
          task : 'task C -- lorem ipsum dollar emmet'
        }, 
      ]
    },
    {
      tag: 'active',
      content : [
        {
          tag: 'active',
          task : 'task D -- Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        }        
      ]
    },
    {
      tag: 'resolved',
      content : [     
      ]
    },
    {
      tag: 'closed',
      content : [      
      ]
    }
  ])

function getEmit(params){

  tasks.forEach((item) => {
    if(item.tag == params[3]){
       item.content.push({'tag' : params[3] , 'task' : params[0]})
    }
  })
  tasks.forEach((item) => {
    if(item.tag == params[1]){
       item.content.splice(params[2],1)
    }
  })
  // console.log(tasks)
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
.col{
    flex-basis: 24.5%;
    width: 24.5%;
    padding: 12px;
    margin: 5px;
    border: 0.5px solid #d9c6d1;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
}
.wrapper{
  width: 100%;
}
.taskInput{
  padding: 5px 10px;
  width: 30%;
  background-color: rgb(201, 201, 201);
  border-radius: 20px;
}
.input-wrapper{
  margin: 15px 50px;
}
.inputButton{
    padding: 5px 10px;
    margin: 10px 20px; 
    background-color: rgb(253, 199, 199);
    border-radius: 15px;
}
.inputButton:hover{
    background-color: rgb(255, 181, 181);
}
input::placeholder{
  color: rgb(104, 104, 104);
}
.col1 .card{
  background-color: #aacdbe;
}
.col2 .card{
  background-color: #f4f7c5;
}
.col3 .card{
  background-color: #fbc687;
}
.col4 .card{
  background-color: #ea907a;
}
</style>