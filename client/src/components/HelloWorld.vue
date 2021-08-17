<template>
  <div class="hello">
    <ol>
      <li v-for="todo in todos" :key="todo">
        {{ todo.text }}
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      todos: [
        { text: 'vue는' },
        { text: '어렵지만' },
        { text: '재미있다' }
      ]
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
