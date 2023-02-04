<template>
	<div class="wrapper">
		<PageLayout>
			<template v-slot:header>
				<Header>
					<h1>HomePage</h1>
				</Header>
			</template>
			<template v-slot:content>
				<Container>
					<TimeCalculator class="mt40" />
				</Container>
			</template>
			<template v-slot:footer>
				footer content
			</template>
		</PageLayout>
	</div>
</template>

<script>
import TimeCalculator from '../components/TimeCalculator.vue';
import Header from '../components/Header.vue'

export default {
	components: {
		Header,
		TimeCalculator,
	}
}
</script>

<style scoped>
.content {
	background-color: aquamarine;
}
</style>
