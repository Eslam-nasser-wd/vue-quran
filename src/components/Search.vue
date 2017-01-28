<template>
  <div class="container">
    <img src="../assets/logo.png">
    <h1>أبحث في جزء عَم</h1>
    <div class="form-group">
      <input type="text" class="form-control" placeholder="مثال: النبأ" v-model="searchString">
    </div>

    <div class="quran-items">
      <div class="item" v-for="item in filteredQuran">
        <router-link :to="{path: '/single', query: { index: item.index } }">{{item.name}}</router-link>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Search',
  data () {
    return {
      quran : [],
      searchString: ''
    }
  },
  created: function(){
    this.$http.get('http://localhost:3000/quran')
      .then( (res) => {
        //console.log(res.data);
        this.quran = res.data
      })
  },
  computed: {
    filteredQuran: function () {
        var all_data      = this.quran,
            searchString  = this.searchString;

        if(!searchString){
            return all_data;
        }

        searchString = searchString.trim().toLowerCase();

        all_data = all_data.filter(function(item){
            if(item.name.toLowerCase().indexOf(searchString) !== -1){
                return item;
            }
        })

        return all_data;;
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
  .form-control{
    width: 50%;
    margin: 30px auto;
    background: rgb(255, 255, 255);
    direction: rtl;
    font-family: 'Cairo', sans-serif;
    font-size: 17px;
  }
  .quran-items{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .item{
    color: #FFF;
    padding: 5px 10px;
    background: #34495e;
    font-family: 'Cairo', sans-serif;
    margin: 5px;
    font-size: 20px;
    opacity: .7;
    transition: .14s
  }
  .item:hover{opacity: 1}
  a{
    color: #FFF;
    text-decoration: none;
  }
</style>
