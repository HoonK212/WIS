<template>
  <div>
    <div class="sidebar">
      <a v-for="key in menu" :key="key" class="button black">
        {{key}} 
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      menu : ['Home', 'Security techniques', 'Attack technique', 'Use']
    }    
  }
}
</script>

<style>
    body {
      font-family: "Montserrat", sans-serif;
      }

    .sidebar {
      height:100%; 
      width:25%; 
      background-color:#fff; 
      position:fixed!important; 
      z-index:1;
    }

    .button {
      border:none; 
      display:inline-block; 
      vertical-align:middle; 
      cursor:pointer; 
      width:100%; 
      text-align:left; 
      padding:12px 24px!important; 
      color:#fff!important; 
      background-color:#000!important;
    }

    .button:hover {
      color:#000!important; 
      background-color:#ccc!important;
    }
    
</style>
