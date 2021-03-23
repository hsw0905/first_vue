<template>
  <div>
    <h1>str : {{ str }}</h1>
    <app-header
        v-bind:propsData="str"
        v-on:renew="renewStr"></app-header>
  </div>
</template>

<script>

import AppHeader from "@/components/AppHeader";

export default {
  data: function () {
    return {
      str: 'Header',
    }
  },
  components: {
    'app-header': AppHeader,
  },
  methods: {
    renewStr: function () {
      this.str = '변경됨';
    }
  }
}
</script>

<style scoped>

</style>