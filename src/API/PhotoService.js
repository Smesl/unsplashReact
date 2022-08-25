import axios from "axios"


export default class PostService {
    static async getById(id) {
        const response = await axios.get('https://images.unsplash.com/photo-' + id)
            return response
    }
}
