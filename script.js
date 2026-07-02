//création de la structure.
function createModal(text){
	const overlay = document.createElement('div');
	overlay.classList.add('overlay','hidden');
	const modal = document.createElement('div');
	modal.classList.add('modal');
	const closeBtn = document.createElement('button');
	closeBtn.textContent = "Fermer le Modal";
	const content = document.createElement('p');
	content.textContent = text;
	modal.appendChild(closeBtn);
	modal.appendChild(content);
	overlay.appendChild(modal);
	return {overlay,closeBtn,modal};
}

//création bouton ouvrir, écouteurs d'événements
function setModal(text){
	const {overlay,closeBtn,modal} = createModal(text);
	const openBtn = document.createElement('button');
	openBtn.textContent = "Ouvrir le Modal";
	document.body.appendChild(openBtn);
	document.body.appendChild(overlay);
	let isOpen = false;
	function update(){
		overlay.classList.toggle('hidden',!isOpen);
	}
	openBtn.addEventListener('click', ()=> {
		isOpen = true;
		update();
	});
	
	closeBtn.addEventListener('click', (e) => {
		e.stopPropagation();
		isOpen = false;
		update();
	});
	
	overlay.addEventListener('click', ()=>{
		isOpen = false;
		update();
	});
	modal.addEventListener('click',(e)=>{
		e.stopPropagation();
	});
	return overlay;
}

setModal('bonjour à tous');
setModal('bonjour Nomena');