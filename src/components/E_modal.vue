<template>
    <div class="black-bg">
        <div class="white-bg">
            <div class="exhibition">
                <img :src="exhibitionData[idx].img" alt="show">
                <h2>{{exhibitionData[idx].title}}</h2>
                <table class="exhibition_area">
                <tr>
                    <th valign="top"><span>기간</span></th>
                    <td valign="top">{{exhibitionData[idx].date}}</td>
                </tr>
                <tr>
                    <td colspan="2" height="10"></td>
                </tr>
                <tr>
                    <th valign="top"><span>주제</span></th>
                    <td valign="top">{{exhibitionData[idx].subject}}</td>
                </tr>
                <tr>
                    <td colspan="2" height="10"></td>
                </tr>
                <tr>
                    <th valign="top"><span>장소</span></th>
                    <td valign="top">{{exhibitionData[idx].place}}</td>
                </tr>
                <tr>
                    <td colspan="2" height="10"></td>
                </tr>
                <tr>
                    <th valign="top"><span>전시품목</span></th>
                    <td valign="top">{{exhibitionData[idx].host}}</td>
                </tr>
                <tr>
                    <td colspan="2" height="10"></td>
                </tr>
                <tr>
                    <th valign="top"><span>주최</span></th>
                    <td valign="top">{{exhibitionData[idx].person}}</td>
                </tr>
                <tr>
                    <td colspan="2" height="10"></td>
                </tr>
                <tr>
                    <th valign="top"><span>관람인원</span></th>
                    <td valign="top">{{exhibitionData[idx].title}}</td>
                </tr>
                <tr>
                    <td colspan="2" height="10"></td>
                </tr>
                </table>
                <button @click="$emit('e_close')" type="button" class="btn btn-primary btn-mobility">닫기</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"_E_modal",
    props:{
        e_modal:Boolean,
        exhibitionData:Object,
        idx:Number,
    }
}
</script>

<style>

</style>