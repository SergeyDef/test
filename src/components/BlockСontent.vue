<template>
  <div class="block">
  	<Header />
    <Content />
  </div>
</template>

<script>
import Header from '@/components/componentsContent/Header.vue'
import Content from '@/components/componentsContent/Content.vue'

export default {
  name: 'BlockСontent',
  components: {
  	Header,
    Content,
  },
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">
.block{
  width: 80%;
	display: flex;
	flex-direction: column;
}
@media (max-width: 1678px){
  .block{
    width: 77%;
  }
}
@media (max-width: 1140px){
  .block{
    width: 70%;
  }
}
@media (max-width: 667px){
  .block{
    width: 100%;
  }
}
</style>
