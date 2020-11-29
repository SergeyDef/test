<template>
  <nav class="menu">
  	<div class="menu__title pl-2 pr-2">
  		<span>меню</span>
  	</div>
  	<div class="menu__wrapper">
  		<ul class="menu__list">
  			<li class="menu__item pl-2 pr-2"><span>Панель</span></li>
  			<li class="menu__item pl-2 pr-2"><span>Расширения</span></li>
  			<li class="menu__item pl-2 pr-2"><span>Дизайн</span></li>
  			<li class="menu__item pl-2 pr-2"><span>Продажи</span></li>
  			<li class="menu__item pl-2 pr-2"><span>Покупатели</span></li>
  			<li class="menu__item pl-2 pr-2"><span>Маркетинг</span></li>
  			<li class="menu__item pl-2 pr-2"><span>Система</span></li>
  		</ul>
  	</div>
  </nav>
</template>

<script>
export default {
  name: 'Menu',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.menu{
		width: 100%;
		height: 75%;
		background-color: #1E2933;

		&__title{
			width: 90%;
			height: 18%;
			display: flex;
			margin: auto
		}
		&__title>span{
			margin: auto 0;
			color: #fff;
			text-transform: uppercase;
			font-size: 1.1rem;
		}
		&__wrapper{
			width: 100%;
			height: 80%;
		}
		&__list{
			width: 100%;
			height: 100%;
		}
		&__item{
			width: 90%;
			height: 50px;
			margin: auto;
			display: flex;
			border-radius: 5px;
			cursor: pointer;
		}
		&__item>span{
			color: #fff;
			margin: auto 0;
			font-size: 1.1rem;
		}
		&__item:hover{
			background-color: #576774;
		}
	}
	@media (max-width: 1678px){
		.menu{
			height: 85%;

			&__title{
				height: 13%;
			}
			&__title>span{
				font-size: 1.2rem;
			}
			&__wrapper{
			}
			&__list{
			}
			&__item{
				height: 60px;
			}
			&__item>span{
				font-size: 1.2rem;
			}
			&__item:hover{
			}
		}
	}
</style>
