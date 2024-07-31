<template>
  <body id="mb_show">
    <!-- E_modal -->
    <E_modal @e_close="e_modal=false" :e_modal="e_modal" :exhibitionData="exhibitionData" :idx="idx" v-if="e_modal==true"/>

    <!-- NavMenu -->
    <transition name="tr_menu">
      <div class="n_menu" v-if="menu==true" @mouseleave="menu=false">
        <div class="fix">
          <ul>
            <li class="page_btn"><router-link to="/Overview">전시개요</router-link></li>
            <li class="page_btn"><router-link to="/Item">전시품목</router-link></li>
            <li class="page_btn"><router-link to="/Exhibition">역대 서울모빌리티쇼</router-link></li>
            <li class="page_btn"><router-link to="/Inquire">참가문의</router-link></li>
            <li class="page_btn"><router-link to="/Notice">공지사항</router-link></li>
          </ul>
          <i @click="menu=false" class="fa-solid fa-xmark"></i>
        </div>
      </div>
    </transition>

    <!-- Nav -->
    <div class="nav">
      <nav>
        <div class="left">
          <router-link to="/"><img class="page_btn" src="./assets/logo.png" alt="logo"></router-link>
        </div>
        <div class="right">
          <div class="search left">
            <i class="fa-solid fa-magnifying-glass"></i>
            <div class="tool form-floating mb-3">
              <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com">
              <label for="floatingInput">검색</label>
            </div>
          </div>
          <div class="menu left" @click="menu=true">
            <i class="fa-solid fa-bars"></i>
          </div>
        </div>
      </nav>
    </div>
    
    <!-- <Notice :noticeData="noticeData"/> -->


    <!-- Router-view -->
    <router-view name="Head"/>
    <transition name="slide">
      <router-view :photoData="photoData"
      :historyData="historyData"
      :itemData="itemData"
      :noticeData="noticeData"
      />
    </transition>
    <transition-group name="slide">
      <router-view name="Exhibition" @e_open="e_modal=true; idx=$event"
      :exhibitionData="exhibitionData[i]" v-for="(a,i) in exhibitionData" :key="i"/>
    </transition-group>

    <!-- Footer -->
    <Footer/>
  </body>
</template>

<script>
import exhibitionData from './data/exhibitionData';
import historyData from './data/historyData';
import itemData from './data/itemData';
import noticeData from './data/noticeData';
import photoData from './data/photoData';
import Footer from './components/Footer.vue'

// import M_head from './components/M_head.vue';
// import Main from './components/Main.vue'

// import O_head from './components/O_head.vue';
// import Overview from './components/Overview.vue'

// import I_head from './components/I_head.vue';
// import Item from './components/Item.vue'

// import E_head from './components/E_head.vue'
// import Exhibition from './components/Exhibition.vue'
import E_modal from './components/E_modal.vue'

// import In_head from './components/In_head.vue';
// import Inquire from './components/Inquire.vue';

// import N_head from './components/N_head.vue';
// import Notice from './components/Notice.vue';



export default {
  name: 'App',
  components: {
    Footer,
    // M_head,
    // Main,
    // O_head,
    // Overview,
    // I_head,
    // Item,
    // E_head,
    // Exhibition,
    E_modal,
    // In_head,
    // Inquire,
    // N_head,
    // Notice,
  },
  data(){
    return{
      photoData,
      historyData,
      itemData,
      noticeData,
      exhibitionData,
      menu:false,
      e_modal:false,
      idx:0,
    }
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
}

</style>
