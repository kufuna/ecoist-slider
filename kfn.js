window.onload = function(){

	function ecoistSlider(){
		var elems = document.querySelectorAll('#ecoist-slider .slider-container .item');
			active = 0;
		elems.forEach(function(el){
			el.style.opacity = '0'
			el.style.transform = 'translate(0,0) scale(0)';
			el.addEventListener('click',function(e){
				if (!this.classList.contains('active')) {
					if (this.getBoundingClientRect().left > window.innerWidth / 2) {
						document.querySelector('#ecoist-slider .slider-container .item.active').style.transform = 'translate(-100%,0) scale(0.5)';
						document.querySelector('#ecoist-slider .slider-container .item.active').style.transformOrigin = 'right';
						document.querySelector('#ecoist-slider .slider-container .item.active').style.opacity = '0.5';
						this.style.transform = 'translate(0,0) scale(1)';
						this.style.transformOrigin = 'left';
						this.style.opacity = '1';
						if (active === 0 ) {
							elems[elems.length - 1].style.transform = 'translate(0,0) scale(0.3)';
							elems[elems.length - 1].style.transformOrigin = 'center';
							elems[elems.length - 1].style.opacity = '0';
							elems[active + 2].style.transform = 'translate(100%,0) scale(0.5)';
							elems[active + 2].style.transformOrigin = 'left';
							elems[active + 2].style.opacity = '0.5';
							elems[active].classList.remove('active')
							this.classList.add('active')
							active++;
						}else {
							elems[active - 1].style.transform = 'translate(0,0) scale(0.3)';
							elems[active - 1].style.transformOrigin = 'center';
							elems[active - 1].style.opacity = '0';
							if (active + 2 === elems.length) {
								elems[0].style.transform = 'translate(100%,0) scale(0.5)';
								elems[0].style.transformOrigin = 'left';
								elems[0].style.opacity = '0.5';
							}
							if (active + 2 != elems.length && elems[active + 2] != undefined) {
								elems[active + 2].style.transform = 'translate(100%,0) scale(0.5)';
								elems[active + 2].style.transformOrigin = 'left';
								elems[active + 2].style.opacity = '0.5';
							}
							if (active + 1 === elems.length) {
								elems[1].style.transform = 'translate(100%,0) scale(0.5)';
								elems[1].style.transformOrigin = 'left';
								elems[1].style.opacity = '0.5';
							}
							elems[active].classList.remove('active')
							this.classList.add('active')
							active++;
							if (active === elems.length) {
								active = 0;
							}
						}
					}else {

					}
				}
			})
		})
		elems[active].classList.add('active')
		elems[active].style.opacity = '1';
		elems[active].style.transform = 'translate(0,0) scale(1)';
		elems[active + 1].style.transform = 'translate(100%,0) scale(0.5)';
		elems[active + 1].style.transformOrigin = 'left';
		elems[active + 1].style.opacity = '0.5'
		elems[elems.length - 1].style.transform = 'translate(-100%,0) scale(0.5)';
		elems[elems.length - 1].style.transformOrigin = 'right';
		elems[elems.length - 1].style.opacity = '0.5'
	}
	ecoistSlider();

}
