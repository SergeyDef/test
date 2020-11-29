<template>
  <div class="content">
  	<BlockListItems />
  	<BlockRightPanel />
  </div>
</template>

<script>
	import BlockListItems from '@/components/componentsContent/content/BlockListItems.vue'
	import BlockRightPanel from '@/components/componentsContent/content/BlockRightPanel.vue'

export default {
  name: 'Content',
  components: {
  	BlockListItems,
  	BlockRightPanel,
  },
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">
.content{
	display: flex;
	width: 100%;
	height: 90%;
}
@media (max-width: 1300px){
  .content{
    flex-direction: column;
  }
}
</style>
