<template>
  <div class="hello">
    11111111
    {{btn}}https://www.jianshu.com/p/94b0a9dac860
    <input type="button" value="button" @click="change">
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      btn:"xxx"
    }
  },
  beforeMount(){
     debugger;
  },
  mounted(){
    debugger;
  },
  updated(){
    debugger;
    alert(1)
  },
  methods:{
    change(){
      this.btn="yyy"
    }
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
