<template>
    <section class="main exhibition mb-40" >
        <img :src="exhibitionData.img" alt="show">
        <h2>{{exhibitionData.title}}</h2>
        <table class="exhibition_area">
            <tr>
            <th valign="top"><span>기간</span></th>
            <td valign="top">{{exhibitionData.date}}</td>
            </tr>
            <tr>
            <td colspan="2" height="10"></td>
            </tr>
            <tr>
            <th valign="top"><span>주제</span></th>
            <td valign="top">{{exhibitionData.subject}}</td>
            </tr>
        </table>
        <button @click="$emit('e_open',exhibitionData.id)" type="button" class="btn btn-primary btn-mobility">서울모빌리티쇼 자세히 보기 <img src="../assets/arrow.png" alt="show" class="arrow"></button>
    </section>
</template>

<script>

export default {
    name:"_Exhibition",
    props:{
        exhibitionData:Object,
    }
}
</script>

<style>

</style>