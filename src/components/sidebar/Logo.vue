<template>
  <div class="logo">
  	<div class="logo__block">
  		<img src="@/assets/logo/logo.png">
  	</div>
  </div>
</template>

<script>
export default {
  name: 'Logo',
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">
	.logo{
		width: 100%;
		height: 24.8%;
		display: flex;
		background-color: #1E2933;

		&__block{
			width: 180px;
			height: 180px;
			margin: auto;
		}
		&__block>img{
			cursor: pointer;
			width: 100%;
			height: 100%;
		}
	}
	@media (max-width: 1678px){
	.logo{
		height: 19.8%;
		
		&__block{
			width: 160px;
			height: 160px;
		}
		&__block>img{
		}
	}
	}
</style>
