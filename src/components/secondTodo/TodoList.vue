<template>
	<div v-for="todo in todos" :key="todo.id">
		<b>{{ todo.title }}</b>
		<span v-if="todo.isDone">+</span>
	</div>
</template>

<script>

export default {
	props: {
		todos: { type: Array, requered: true }
	},
}
</script>
