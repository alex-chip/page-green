const toggleMenu = (navId, menuId, toggleB) => {
	let nav = navId,
		menu = menuId,
		toggleButton = toggleB;

	function showNav() {
		nav.classList.toggle('is-active');
	}

	if(nav) {
		if(toggleButton) {
			toggleButton.addEventListener('click', showNav)
		}
	}
}

const toggleB = document.getElementById('navId-toggle'),
	menuId =  document.getElementById('menuId'),
	navId = document.getElementById('navId');

toggleMenu(navId,menuId,toggleB);
