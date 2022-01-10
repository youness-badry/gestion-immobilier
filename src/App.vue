<template>

  <div id="app">

    <Nav />
    <main class="form-signin">
      <router-view />
    </main>


  </div>
</template>

<script>

import Nav from "@/components/Nav";

export default {
  name: 'App',
  components: { Nav }
}

</script>

<style>

</style>
