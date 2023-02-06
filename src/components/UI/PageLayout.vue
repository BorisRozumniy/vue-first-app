<template>
	<Header>
		<slot name="header"></slot>
	</Header>
	<div class="main">
		<slot name="content"></slot>
	</div>
	<Footer>
		<slot name="footer"></slot>
	</Footer>
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
.main {
	margin: 40px 0 60px;
}
</style>
