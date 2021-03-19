<template>
    <div>
        <div class="header">
        react子应用头部
        </div>
        <div class="body">
            <div class="menu">
            react子应用按钮
            </div>
            <!--重点：一定要写子应用挂载的容器，对应子应用的配置都在配置文件config.js中的container，否则主应用不知挂载到哪里-->
            <div id="react-viewport"></div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'ReactMain',
  components: {

  }
}
</script>
