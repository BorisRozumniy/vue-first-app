<template>
	<div class="wrapper">
		<Header>
			<slot name="header"></slot>
		</Header>
		<main>
			<slot name="content"></slot>
		</main>
		<Footer>
			<slot name="footer"></slot>
		</Footer>
	</div>
</template>

<script>
import Footer from '../Footer.vue';
import Header from '../Header.vue';

export default {
	name: 'PageLayout',
	components: {
		Footer,
		Header
	}
}
</script>

<style scoped>
.wrapper {
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}

main {
	margin: 40px 0 60px;
}
</style>
