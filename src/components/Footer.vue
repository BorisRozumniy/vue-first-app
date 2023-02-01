<template>
	<footer>
		<Container>
			<h2>footer</h2>
			<slot></slot>
		</Container>
	</footer>
</template>

<script>
import Container from './UI/Container.vue';

export default {
	components: {
		Container
	}
}
</script>

<style>
footer {
	background-color: #3e2ed3;
	color: #fff;
	padding: 20px 0 40px;
}
</style>
