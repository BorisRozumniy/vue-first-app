<template>
	<PageLayout>
		<template v-slot:header>
			<h1>Todos Coockbook</h1>
		</template>
		<template v-slot:content>
			<Container>
				<CoockbookApp />
			</Container>
		</template>
		<template v-slot:footer>
			footer content
		</template>
	</PageLayout>
</template>

<script>
import CoockbookApp from '../components/CoockbookApp.vue';

export default {
	components: {
		CoockbookApp,
	}
}
</script>
