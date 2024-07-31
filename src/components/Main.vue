<template>
    <div class="section">     
        <section>
            <article>
                <div class="main">
                    <h1>Photo.</h1>
                    <p>2023서울모빌리티쇼의 생생한 현장을 만나보세요</p>
                    <div class="box" v-for="(a,i) in photoData" :key="i">
                    <div class="img">
                        <img :src="photoData[i].img" alt="show">
                    </div>
                    <h4 style="margin-bottom: 60px;">{{ photoData[i].title }}</h4>
                    </div>
                </div>
            </article>
            <article>
                <div class="main">
                    <h1>History.</h1>
                    <p>30주년을 맞이한 서울모빌리티쇼가 그동안 어떻게 변화했는지 확인해보세요.</p>
                    <div class="boxs">
                    <div class="box" v-for="(a,i) in historyData" :key="i">
                        <img :src="historyData[i].img" alt="show">
                        <h4>{{historyData[i].title}}</h4>
                    </div>
                    </div>
                </div>
            </article>
        </section>
        <aside>
            <div class="main">
                <h1 class="mb-20">Partner.</h1>
                <div class="box">
                    <ul class="clear">
                        <li class="left"><a href="#"><img src="../assets/banner18.jpg" alt="banner"></a></li>
                        <li class="left"><a href="#"><img src="../assets/banner11.jpg" alt="banner"></a></li>
                        <li class="left"><a href="#"><img src="../assets/banner15.jpg" alt="banner"></a></li>
                        <li class="left"><a href="#"><img src="../assets/banner01.jpg" alt="banner"></a></li>
                        <li class="left"><a href="#"><img src="../assets/banner02.jpg" alt="banner"></a></li>
                        <li class="left"><a href="#"><img src="../assets/banner03.jpg" alt="banner"></a></li>
                        <li class="left"><a href="#"><img src="../assets/banner06.jpg" alt="banner"></a></li>
                        <li class="left"><a href="#"><img src="../assets/banner16.jpg" alt="banner"></a></li>
                        <li class="left"><a href="#"><img src="../assets/banner19.jpg" alt="banner"></a></li>
                    </ul>
                </div>
            </div>
        </aside>
    </div>
</template>

<script>
export default {
    name:"_Main",
    props:{
        photoData:Object,
        historyData:Object,
    }
}
</script>

<style>

</style>