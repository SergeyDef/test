<template>
  <div class="sidebar">
  	<Logo />
  	<Menu />
  </div>
</template>

<script>
	import Logo from '@/components/sidebar/Logo.vue'
	import Menu from '@/components/sidebar/Menu.vue'

	export default {
	  name: 'Sidebar',
	  components: {
	  	Logo,
	  	Menu,
	  },
	  props: {
	    msg: String
	  }
	}
</script>  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.sidebar{
	width: 20%;
	height: 100%;
	display: flex;
	justify-content: space-between;
	flex-direction: column;
}
@media (max-width: 1678px){
	.sidebar{
		width: 23%;
	}
}
@media (max-width: 1140px){
	.sidebar{
		width: 30%;
	}
}
@media (max-width: 967px){}
@media (max-width: 667px){
	.sidebar{
		display: none;
	}
}
@media (max-width: 410px){}
@media (max-width: 360px){}
</style>
