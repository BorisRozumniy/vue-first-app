<template>
	<PageLayout>
		<template v-slot:header>
			<h1>Second Todo List</h1>
		</template>
		<template v-slot:content>
			<Container>
				<SecondTodoList />
			</Container>
		</template>
		<template v-slot:footer>
			footer content
		</template>
	</PageLayout>
</template>

<script>
import SecondTodoList from '../components/secondTodo/SecondTodoApp.vue';

export default {
	components: {
		SecondTodoList
	}
}
</script>
