<template>
  <header>
    <h1>this is app-header</h1>
    <h1>propsData : {{ propsData }}</h1>
    <button v-on:click="sendEvent">Send</button>
  </header>
</template>

<script>
export default {
  props: ['propsData'],
  methods: {
    sendEvent: function () {
      this.$emit('renew')
    }
  }
}
</script>

<style scoped>

</style>