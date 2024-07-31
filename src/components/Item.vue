<template>
    <section class="main item">
        <div class="item_area">
            <div class="item_content" v-for="(a,i) in itemData" :key="i">
            <img :src="itemData[i].img" alt="show">
            <h4>{{itemData[i].title}}</h4>
            <p>{{itemData[i].note}}
            </p>
            </div>
        </div>
    </section> 
</template>

<script>
export default {
    name:"_Item",
    props:{
        itemData:Object
    }
}
</script>

<style>

</style>