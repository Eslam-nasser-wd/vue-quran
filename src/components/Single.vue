<template>
  <div class="container">

    <span class="back">
      <router-link :to="{path: '/'}">الرئيسية</router-link>
    </span>

    <h1>سورة {{single_data.name}}</h1>
    <div class="text">
      <span class="first-line" v-for="item in single_data.aya">{{item.bismillah}}</span>
      <span class="aya-text" v-for="item in single_data.aya">{{item.text}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Single',
  
  data () {
    return {
      single_data: ''
    }
  },
  
  created () {
    this.fetchData()
  },
  
  watch: {
    '$route': 'fetchData'
  },
  
  methods: {
    fetchData () {
      this.$http.get('http://localhost:3000/quran?index='+this.$route.query.index)
        .then( (res) => {
          console.log(res.data[0]);
          this.single_data = res.data[0]
        })
    }
  }

}
</script>

<style scoped>
  h1{
    font-weight: 100;
    font-family: 'Cairo', sans-serif;
    color: #FFF
  }
  .text{
    padding: 20px;
    background: #EEE;
    font-size: 20px;
    font-family: 'Cairo', sans-serif;
    margin-top: 20px;
  }
  .first-line{
    display: block;
    font-size: 22px;
    margin-bottom: 10px;
  }
  .aya-text{
    display: inline-block;
    margin-left: 15px;
    line-height: 2;
  }
  span.back{
    position: absolute;
    left: 20px;
    top: 20px;
  }
  span.back a{
    color: #FFF;
    text-decoration: none;
    font-size: 20px;
    font-family: 'Cairo', sans-serif;
  }
  
</style>
