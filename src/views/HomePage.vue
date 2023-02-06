<template>
	<div class="wrapper">
		<PageLayout>
			<template v-slot:header>
				<h1>HomePage</h1>
			</template>
			<template v-slot:content>
				<Container>
					<AccountForm />
					<AuthForm class="mt40" />
				</Container>
			</template>
			<template v-slot:footer>
				footer content
			</template>
		</PageLayout>
	</div>
</template>

<script>
import AccountForm from '../components/AccountForm.vue';
import AuthForm from '../components/Coockbook/AuthForm.vue';

export default {
	components: {
		AccountForm,
		AuthForm
	}
}
</script>

<style scoped>
.content {
	background-color: aquamarine;
}
</style>
