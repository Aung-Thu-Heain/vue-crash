<script setup>
import { onMounted, ref } from 'vue';

let name = ref('John')
let status = ref('pending')
let tasks = ref(['task1','task2','task3','task4'])
let newTask = ref('')

let togglestatus = ()=>{
  if(status.value === 'pending'){
        status.value = 'done'
      }else if(status.value === 'done'){
        status.value = 'cancel'
      }else{
        status.value = 'pending'
      }
}

let addNewTask = ()=>{
    if(newTask.value.trim() !== ''){
      tasks.value.push(newTask.value)
      newTask.value = ''
    }
}

let deleteTask = (index)=>{
    tasks.value.splice(index,1);
}

onMounted(async()=>{
  try{
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();
    tasks.value = data.map(task => task.title)
  }catch(error){
    console.log(error)
  }
})

</script>

<template>
 <h1>{{ name }}</h1>
 <p v-if="status === 'pending'">User is pending</p>
 <p v-if="status === 'done'">User is done</p>
 <p v-if="status === 'cancel'">User is cancel</p>
 <h1>task</h1>
 <ul>
  <li v-for="(task,index) in tasks" :key="task">
    <span>{{ task }} </span><button @click="deleteTask(index)">X</button>
  </li>
 </ul>
 <button @click="togglestatus">Change staus</button>
 <form @submit.prevent="addNewTask">
  <input type="text" v-model="newTask">
  <button type="button">Add new</button>
 </form>
</template>

<style scoped>
h1{
  color: red;
}
</style>
