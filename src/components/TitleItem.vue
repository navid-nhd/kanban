<template>
    <div class="wrapper">
        <h1>
            <slot />
        </h1>
    </div>
</template>
<script setup>
</script>
<style scoped>
h1 {
    font-size: 1.3rem ;
}
.wrapper{
    width: 100%;
    text-align: center;
    background-color: rgb(80, 80, 80);
    border-radius: 15px;
    color: rgb(240, 240, 240);
    font-weight: bold;
}
</style>