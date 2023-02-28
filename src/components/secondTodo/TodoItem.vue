<template>
	<div class="todo-item">
		<b>{{ todo.title }}</b>
		<span v-if="todo.isDone">+</span>
	</div>
</template>

<script>

export default {
	props: {
		todo: { type: Object, requered: true }
	},
}
</script>
<style scoped>
.todo-item {
	display: flex;
	border: solid 2px;
	padding: 15px;
	margin-top: 4px;
}
</style>
