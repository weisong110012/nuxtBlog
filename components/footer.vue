<template>
  <footer id="footer">
    <span>2018 Design by</span>
    <a href>未松松</a>
  </footer>
</template>

<script>
export default {
  name: "myfooter"
};
</script>

<style lang="less" rel='stylesheet/less' scoped>
#footer {
  width: 100%;
  height: 6rem;
  line-height: 6rem;
  text-align: center;
  color: #fafafa;
  background: rgba(255, 255, 255, 0.2);
  font-size: 1.5rem;
  color: #999;
  box-shadow: 0px 0px 2px #dbc7a0;
}
@media screen and (max-width: 960px) {
  #footer {
    height: 3rem;
    line-height: 3rem;
  }
}
</style>