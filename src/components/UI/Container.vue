<template>
	<div class="container">
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'Container'
}
</script>

<style>
.container {
	padding: 0 16px;
	max-width: 300px;
	margin: 0 auto;
}

@media screen and (min-width: 380px) {
	.container {
		max-width: 340px;
	}
}

@media screen and (min-width: 580px) {
	.container {
		max-width: 550px;
	}
}

@media screen and (min-width: 920px) {
	.container {
		max-width: 820px;
	}
}

@media screen and (min-width: 1200px) {
	.container {
		max-width: 1120px;
	}
}
</style>
