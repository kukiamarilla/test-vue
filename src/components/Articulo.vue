<template>
  <div class="card">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <a v-bind:href="articulo.guid.rendered">
            <img v-bind:src="imagen" alt="" class="rounded">
          </a>
        </div>
        <div class="col-md-8">
          <a v-bind:href="articulo.guid.rendered">
            <h3>
              {{articulo.title.rendered}}
            </h3>
          </a>
          <p>
            {{(new Date(articulo.date)).getDay()}}
            /
            {{(new Date(articulo.date)).getMonth()}}
            /
            {{(new Date(articulo.date)).getFullYear()}}
          </p>
          <p v-html="descripcion"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Articulo',
  props: ['articulo'],
  data() {
    return {
      descripcion: '',
      imagen: '',
    };
  },
  mounted() {
    // eslint-disable-next-line
    const imgSource = this.articulo._links['wp:featuredmedia'][0].href;
    const elem = document.createElement('div');
    elem.innerHTML = this.articulo.content.rendered;
    this.descripcion = elem.getElementsByTagName('p')[0].innerHTML;
    axios.get(imgSource)
      .then((response) => {
        this.imagen = response.data.guid.rendered;
      });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1, h2 {
  font-weight: normal;
}
.card{
  margin-top: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  box-shadow: 5px 3px 10px rgba(200,200,200,0.5);
  border-left: #3a38b7 solid 5px;
}
img{
  width: 100%;
}
a{
  color: #3a38b7;
  &:hover{
    text-decoration: none;
  }
}
</style>
