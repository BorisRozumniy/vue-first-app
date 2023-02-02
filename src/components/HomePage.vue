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
import AccountForm from './AccountForm.vue';
import PageLayout from './PageLayout.vue';
import Header from './Header.vue'
import AuthForm from './Coockbook/AuthForm.vue';

export default {
	components: {
		Header,
		PageLayout,
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
