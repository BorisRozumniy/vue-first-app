<template>
	<div class="todo-item">
		<div class="content">
			<b>{{ todo.title }}</b>
			<span v-if="todo.isDone">+</span>
		</div>
		<div class="buttons">
			<button class="edit">edit</button>
			<button class="remove">remove</button>
		</div>
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
	flex-direction: column;
	justify-content: space-between;
	border: solid 2px;
	margin-top: 4px;
}

.content {
	padding: 15px;
}
.buttons {
	padding: 15px;
}

.buttons button {
	min-width: 135px;
	color: white;
}

.buttons :nth-child(1) {
	margin-right: 8px;
}

.remove {
	background-color: red;
}
.edit {
	background-color: green;
}

@media screen and (min-width: 580px) {
.todo-item{
	flex-direction: row;
}
}
</style>
