<template>
  <div>
    <input type="checkbox" id="Check"><label for="Check"></label>
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
      menu : ['Login', 'HOME', 'Security techniques', 'Attack technique', 'Use']
    }    
  }
}
</script>

<style>
    body {
      font-family: "Montserrat", sans-serif;
      background-color:#000;
    }

    input[type=checkbox] { display:none; }

    input[type=checkbox] + label { 
      display: block;
      padding: 20px;
      width: 40px;
      height: 40px;
      background-image : url("img/menu_close.png");
      background-repeat: no-repeat;
       background-size: contain;
    }

    input[type='checkbox']:checked+label {
      background-image : url("img/menu_open.png");
      background-repeat: no-repeat;
      background-size: contain;
    }

    .sidebar {
      height:100%; 
      width:25%; 
      background-color : #000; 
      position:fixed!important; 
      z-index:1;
      visibility: show;
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
