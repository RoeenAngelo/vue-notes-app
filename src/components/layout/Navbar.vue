<script setup>
import { ref } from 'vue';
import { onClickOutside } from '@vueuse/core'

/*
	Mobile Nav
*/
	const showMobileNav = ref(false)

/*
	Click Outside to close
*/
	const navbarMenuRef = ref(null)
	const navbarBurgerRef = ref(null)

	onClickOutside(navbarMenuRef, () => {
			showMobileNav.value = false
		}, {
			ignore: [navbarBurgerRef]
		})

	
</script>

<template>
    <nav
      class="navbar is-success"
      aria-label="main navigation"
      role="navigation"
    >
			<div class="container is-max-desktop px-2">
				<div class="navbar-brand">
						<div class="navbar-item is-size-4 is-family-monospace">
							Notebook
						</div>
						<a
							@click.prevent="showMobileNav = !showMobileNav"
							:class="{ 'is-active' : showMobileNav}"
						  class="navbar-burger"
						  aria-expanded="false"
						  aria-label="menu"
						  data-target="navbarBasicExample"
						  role="button"
							ref="navbarBurgerRef"
						>
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
						</a>
				</div>
				<div
				  id="navbarBasicExample"
				  class="navbar-menu"
					:class="{ 'is-active' : showMobileNav}"
					ref="navbarMenuRef"
				>
						<div class="navbar-end">
								<RouterLink
									@click="showMobileNav = false"
									class="navbar-item"
									active-class="is-active"
									to="/"
								>
										Notes
								</RouterLink >
								<RouterLink
									@click="showMobileNav = false"
									class="navbar-item"
									active-class="is-active"
									to="/stats"
								>
										Stats
								</RouterLink >
						</div>
				</div>
			</div>
</nav>
</template>



<style lang="scss" scoped>
@media (max-width: 1023px) {
	.navbar-menu {
	position: absolute;
	left: 0;
	width: 100%;
}
}
</style>