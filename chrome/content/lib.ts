Zotero.zoterojoneplugin = new class {
  log(msg) {
    Zotero.debug(`Plugin para o zotero. Auxílio para realizar revisão terciária: ${  msg}`)
  }

  foo() {
    // `window` is the global object in Zotero 6 overlay scope, and global properties
    // are included automatically in Zotero 7
    const host = new URL('https://foo.com/path').host
    this.log(`Host is ${host}`)

    this.log(`Intensity is ${Zotero.Prefs.get('extensions.zotero-plugin-1.intensity', true)}`)
  }

  toggleGreen(enabled) {
    const docElem = Zotero.getMainWindow().document.documentElement
    // Element#toggleAttribute() is not supported in Zotero 6
    if (enabled) {
      docElem.setAttribute('data-green-instead', 'true')
    }
    else {
      docElem.removeAttribute('data-green-instead')
    }
  }
}
