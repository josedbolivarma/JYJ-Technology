import axios from 'axios'
const baseUrl = 'http://localhost:3000/data/'

// get all data
export const getData = async () => {
	const response = await axios.get(baseUrl)
	return response.data
}

// create new item
export const createItem = async (data) => {
	const response = await axios.post(baseUrl, data)
	return response.data
}

// update item
export const updateItem = async (id, data) => {
	const response = await axios.put(`${baseUrl}${id}`, data)
	return response.data
}

// delete item
export const deleteItem = async (id) => {
	const response = await axios.delete(`${baseUrl}${id}`)
	return response.data
}
