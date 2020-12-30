class StoredPokemon {
	constructor() {
		this.storedData = [];
	}

	rearrangeStoredData() {
		let newStoredData = []
		for (let i = 1; i < this.storedData.length; i++) {
			newStoredData[i - 1] = this.storedData[i];
		}
		return newStoredData;
	}

	addPokemon(pokemon) {
		if (!this.storedData.includes(pokemon)) {
			if (this.storedData.length > 2) {
				this.storedData = this.rearrangeStoredData();
			}

			this.storedData.push(pokemon);
		}
	}
}

export default StoredPokemon