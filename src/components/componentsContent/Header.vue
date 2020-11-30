<template>
  <div class="header">
  	<div class="header__adaptive_menu">
  		<span></span>
  		<span></span>
  		<span></span>
  	</div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">

.header{
	width: 100%;
	height: 9%;
	background-color: #fff;

	&__adaptive_menu{
		display: none;
	}
}
@media (max-width: 1300px){
	.header{
		height: 7%;
	}
}
@media (max-width: 967px){
	.header{
		height: 80px;
	}
}
@media (max-width: 667px){
	.header{
		position: relative;

		&__adaptive_menu{
			display: flex;
			justify-content: space-evenly;
			flex-direction: column;
			position: absolute;
			background-color: #1E2933;
			width: 50px;
			height: 50px;
			padding: 2px;
			border-radius: 10px;
			left: 7%;
			top: 20%;
		}
		&__adaptive_menu>span{
			width: 70%;
			height: 5px;
			margin: 0 auto; 
			background-color: #fff;
		}
	}
} 
@media (max-width: 560px){
	.header{
		height: 80px;
	}
}
@media (max-width: 460px){
	.header{
		height: 80px;

		&__adaptive_menu{
			
		}
		&__adaptive_menu>span{

		}
	}
}
</style>
