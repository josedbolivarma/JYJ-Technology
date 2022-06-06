export const getLocalStorage = (keyName) => {
	const response = localStorage.getItem(keyName)

	if (!response) return undefined
	const data = JSON.parse(response)

	return data
}

export const createLocalStorage = (data, keyName) =>
	localStorage.setItem(keyName, JSON.stringify(data))
