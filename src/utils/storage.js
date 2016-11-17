export default class Storage {
    constructor(type, storageItemName) {
        this.type = type || 'localStorage';
        this.itemName = storageItemName || 'document';
        this.available = Storage.storageAvailable(this.type);
    }

    static storageAvailable(type) {
    	try {
    		let storage = window[type];
    		let x = '__storage_test__';
    		storage.setItem(x, x);
    		storage.removeItem(x);
    		return true;
    	}
    	catch(e) {
            console.warn(`${type} is not available`);
    		return false;
    	}
    }

    saveDoc(document) {
        if (!this.available) return;

        let storage = window[this.type];
        storage.setItem(this.itemName, document);
    }

    loadDoc() {
        if (!this.available) return {};

        let storage = window[this.type];
        return storage.getItem(this.itemName);
    }
}
