<template>
  <div class="hello2">
    <ol>
      <li v-for="todo in todos" :key="todo">
        {{ todo.text }}
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld2',
  data () {
    return {
      todos: [
        { text: 'nodejs는' },
        { text: '어렵지만' },
        { text: '재미있다' }
      ]
    }
  }
}
</script>
