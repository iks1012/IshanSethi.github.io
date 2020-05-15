
tabs = ['education', 'skills', 'projects', 'workExperience']

window.addEventListener('load', function () {
	openTab('education');
});


function openTab(tabName) {
	for(var i = 0; i < tabs.length; i++){
		$('#'+tabs[i])[0].style.display = (tabName == tabs[i]) ?  "block" : "none";
	}
}
