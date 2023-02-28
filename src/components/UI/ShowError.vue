<template>
	<ul v-if="validation.$error" :class="classWrapper">
		<li
			v-for="er in validation.$errors"
			class="error-message"
			:class="classItem"
		>
			{{ er.$message }}
		</li>
	</ul>
</template>

<script>
export default {
	name: "ShowError",
	props: {
		validation: {
			type: Object,
			require: true
		},
		classWrapper: {
			type: String,
		},
		classItem: {
			type: String,
		}
	}
}
</script>

<style scoped>
.error-message {
	color: red;
	margin-top: 8px;
}

ul li {
	list-style-position: inside;
}
</style>
