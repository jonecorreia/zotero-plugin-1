function log(msg) {
	Zotero.debug("Z Plugin: " + msg);
}

async function init() {
	log("Initializing");
	await Zotero.initializationPromise;
	Zotero.ZPlugin.foo();

	// Use strings from zotero-z-plugin.properties -
	// Fluent is available in Zotero 6 but unreliable and difficult to configure
	let stringBundle = Services.strings.createBundle('chrome://zotero-z-plugin/locale/zotero-z-plugin.properties');
	Zotero.getMainWindow().document.getElementById('make-it-green-instead')
		.setAttribute('label', stringBundle.GetStringFromName('makeItGreenInstead.label'));
}

window.addEventListener('load', function (event) {
	init();
});
