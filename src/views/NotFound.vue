<template>
	<PageLayout><template v-slot:content>
			<Container>
				<h2 class="mt40">Page Not Found</h2>
				<Button @click="$router.back()">Go back</Button>
			</Container>
		</template></PageLayout>
</template>

<style scoped>
h2 {
	text-align: center;
    margin-bottom: 40px;
}
button {
	display: block;
	margin: 0 auto;
}
</style>
