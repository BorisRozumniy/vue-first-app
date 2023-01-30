<template>
	<div v-if="error" v-for="er in errors" class="error-wrapper">
		{{ er.$message }}
	</div>
</template>

<script>
export default {
	name: "ShowError",
	props: {
		error: {
			type: Boolean,
			default: false
		},
		errors: {
			type: Object,
			require: true,
		},
		validation: {
			type: Object,
			require: true
		}
	}
}
</script>

<style scoped>
.error-wrapper {
	color: red;
}

.field-error {
	border-bottom: 3px solid red;
}

.field-error::after {
	content: '*';
	position: absolute;
	right: 0;
	top: 0;
	color: red;
}

.error-message {
	color: red;
}
</style>
