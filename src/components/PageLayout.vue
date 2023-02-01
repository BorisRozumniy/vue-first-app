<template>
	<slot name="header"></slot>
	<div class="main">
		<slot name="content"></slot>
	</div>
	<Footer>
		<slot name="footer"></slot>
	</Footer>
</template>

<script>
import Footer from './Footer.vue';

export default {
	components: {
		Footer
	}
}
</script>

<style scoped>
.main {
	margin: 40px 0 60px;
}
</style>
