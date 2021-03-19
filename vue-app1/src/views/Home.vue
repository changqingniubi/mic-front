<template>
  <div class="home">
    <h1> vue home app1</h1>
    <div>
      <button @click="changeValue">改变值</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {

  },
  methods: {
    changeValue () {
      this.$appEmit({ a: 555, b: 666 })
    }
  }
}
</script>
