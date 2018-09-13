<template>
  <div class="hello">
    <div class="container">
      <h1>{{ msg }}</h1>
      <div class="line"></div>
      <articulo
       v-for="articulo in articulos"
       v-bind:articulo="articulo"
       v-bind:key="articulo.id" />
    </div>
  <footer></footer>
  </div>
</template>

<script>
import Articulo from '@/components/Articulo';
import axios from 'axios';

export default {
  name: 'HelloWorld',
  components: {
    articulo: Articulo,
  },
  data() {
    return {
      msg: 'Articles',
      articulos: [],
    };
  },
  mounted() {
    axios.get('https://thewirecutter.com/wp-json/wp/v2/posts')
      .then((response) => {
        this.articulos = response.data;
      });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1, h2 {
  font-weight: bold;
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
.line{
  border-top: 5px solid #3a38b7;
  width: 50px;
  height: 5px;
  margin-top: 40px;
  padding-bottom: 40px;
}
footer{
  width: 100%;
  height: 5px;
  margin-top: 40px;
  border-bottom: 5px solid #3a38b7;
}
</style>
