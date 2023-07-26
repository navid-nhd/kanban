<template>
  <div class="card">
    <div class="title">{{ item.task }}{{ index }}</div>
    <select v-model="cardTag" @change="sendEmit" class="select-option">
      <option v-for="option in options">{{ option }}</option>
    </select>
    {{ cardTag }} - {{ index }}
    <button class="remove" @click="cardOmit">Remove</button>
  </div>
</template>
<script setup>
import { ref, watch } from "vue";
const options = ["new", "active", "resolved", "closed"];

const cardTag = ref(props.item.tag);
const props = defineProps({
  item: {
    type: Object,
  },
  index: {
    type: Number,
  },
});
const emit = defineEmits(["getChildData", "removeCard"]);
function sendEmit() {
  emit(
    "getChildData",
    props.item.task,
    props.item.tag,
    props.index,
    cardTag.value
  );
  // console.log('herer')
}
function cardOmit() {
  emit("removeCard", props.item.tag, props.index);
}
</script>
<style scoped>
.card {
  width: 100%;
  min-height: 200px;
  height: auto;
  margin-top: 10px;
  padding: 25px 20px;
  background-color: white;
  border-radius: 15px;
  transition: all 300ms;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
.card:hover {
  box-shadow: 17px 18px 18px -14px rgba(0, 0, 0, 0.41);
  -webkit-box-shadow: 17px 18px 18px -14px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 17px 18px 18px -14px rgba(0, 0, 0, 0.41);
}
.select-option {
  background-color: rgb(228, 228, 228);
  padding: 3px 6px;
  border-radius: 5px;
}
.remove {
  background-color: rgb(252, 77, 77);
  color: white;
  font-weight: bold;
  padding: 5px 10px;
  border-radius: 15px;
  transition: all 200ms;
}
.remove:hover {
  background-color: rgb(255, 50, 50);
}
</style>
