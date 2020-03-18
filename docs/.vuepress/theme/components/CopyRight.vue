<template>
  <div>
    <div class="think_copyright nomobile">
      Copyright © 2020&nbsp;&nbsp;{{domain}} | <a href="http://www.beian.miit.gov.cn" target="_blank">{{beian}}</a>
    </div>
    <div class="think_copyright mobile">
      <div>Copyright © 2020&nbsp;&nbsp;{{domain}}</div>
      <div><a href="http://www.beian.miit.gov.cn" target="_blank">{{beian}}</a></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'copyRight',
  computed: {
    domain: function() {
      return this.$themeConfig.website.domain
    },
    beian: function() {
      return this.$themeConfig.website.beian
    }
  }
}
</script>

<style lang="scss" scoped>
.think_copyright{
  font-size: 13px;
  position: fixed;
  top: auto;
  bottom: 0;
  padding-bottom: 3px;
  width: 100%;
  border-top: 1px solid #eaecef;
  text-align: center;
  background-color: #fff;
  a {
    font-size: 13px;
    font-weight: 400;
    color: #2c3e50;
  }
}
    
</style>