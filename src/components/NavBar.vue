<template>
	<div>
		<ul>
			<li><router-link to="/">Home</router-link></li>
			<li><router-link to="/todos-coockbook">Todos Coockbook</router-link></li>
			<li><router-link to="/time-calculator">time calculator</router-link></li>
			<li><router-link to="/layout">Test Layout</router-link></li>
		</ul>
	</div>
</template>

<script>
export default {}
</script>

<style scoped>
ul {
	list-style: none;
	display: flex;
	flex-direction: column;
}

@media screen and (min-width: 580px) {
	ul {
		flex-direction: row;
	}
}

li {
	margin-right: 24px;
	text-transform: capitalize;
}

a {
	color: #fff;
	transition: 5s all;
}

a:hover,
a:focus {
	transition: 5s all;
	border-bottom: 2px solid #fff;
	outline: none;
}
</style>
