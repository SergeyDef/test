<template>
  <div class="container-fluid wrapper">
  	<Sidebar />
  	<BlockСontent />
  	<MessageToUser v-if="message" />
  </div>
</template>

<script>
 import Sidebar from '@/components/Sidebar.vue'
 import BlockСontent from '@/components/BlockСontent.vue'
 import MessageToUser from '@/components/MessageToUser.vue'

export default {
  name: 'Home',
  components: {
  	Sidebar,
  	BlockСontent,
  	MessageToUser,
  },
  computed: {
  	message(){
  		return this.$store.getters.showingMessage;
  	}
  }
}
</script>
<style lang="scss">
	@import '@/scss/style.scss';

	.wrapper{
		width: 100%;
		height: 100%;
		display: flex;
		background-color: #F9F9FA;
	}
</style>
