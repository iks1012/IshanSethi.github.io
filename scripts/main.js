
tabs = ['education', 'skills', 'projects', 'workExperience'];
subTabs = ['technicalWorkExperience', 'nonTechnicalWorkExperience'];

window.addEventListener('load', function () {
	openSubTab('technicalWorkExperience');
	openTab('education');
});

function openTab(tabName) {
	for(var i = 0; i < tabs.length; i++){
		$('#'+tabs[i])[0].style.display = (tabName == tabs[i]) ?  "block" : "none";
	}
}

function openSubTab(tabName) {
	for(var i = 0; i < subTabs.length; i++){
		$('#'+subTabs[i])[0].style.display = (tabName == subTabs[i]) ?  "block" : "none";
	}
}