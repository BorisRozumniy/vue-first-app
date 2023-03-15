<template>
	<PageLayout>
		<template v-slot:header>
			<h1>Work Time Calculator</h1>
		</template>
		<template v-slot:content>
			<Container>
				<TimeCalculator />
			</Container>
		</template>
		<template v-slot:footer>
			footer content
		</template>
	</PageLayout>
</template>

<script>
import TimeCalculator from '../components/TimeCalculator.vue';

export default {
	components: {
		TimeCalculator,
	}
}
</script>

<style scoped>
.content {
	background-color: aquamarine;
}
</style>
