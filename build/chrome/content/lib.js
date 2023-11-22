(() => {
  // chrome/content/lib.ts
  Zotero.ZPlugin = new class {
    log(msg) {
      Zotero.debug(`Z Plugin: ${msg}`);
    }
    foo() {
      const host = new URL("https://foo.com/path").host;
      this.log(`Host is ${host}`);
      this.log(`Intensity is ${Zotero.Prefs.get("extensions.zotero-z-plugin.intensity", true)}`);
    }
    toggleGreen(enabled) {
      const docElem = Zotero.getMainWindow().document.documentElement;
      if (enabled) {
        docElem.setAttribute("data-green-instead", "true");
      } else {
        docElem.removeAttribute("data-green-instead");
      }
    }
  }();
})();
