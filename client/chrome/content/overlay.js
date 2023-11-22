function log(msg) {
	Zotero.debug("Plugin para o zotero. Auxílio para realizar revisão terciária: " + msg);
}

async function init() {
	log("Initializing");
	await Zotero.initializationPromise;
	Zotero.zoterojoneplugin.foo();

	// Use strings from zotero-plugin-1.properties -
	// Fluent is available in Zotero 6 but unreliable and difficult to configure
	let stringBundle = Services.strings.createBundle('chrome://zotero-plugin-1/locale/zotero-plugin-1.properties');
	Zotero.getMainWindow().document.getElementById('make-it-green-instead')
		.setAttribute('label', stringBundle.GetStringFromName('makeItGreenInstead.label'));
}

window.addEventListener('load', function (event) {
	init();
});
