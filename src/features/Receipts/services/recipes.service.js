import api from "../../../api-common";

const recipeApi = api.create({
  baseURL: api.defaults.baseURL + "/api",
})

class RecipeDataService {

    async create(data) {
      return await recipeApi.post("/Recipe/Create", data);
    }

    async get(id) {
      return await recipeApi.get(`/Recipe/Get?id=${id}`);
    }

    async delete(id) {
        return await recipeApi.delete("/Recipe/Delete", id);
    }

    async getAll(user) {      
      return await recipeApi.get("/Recipe/GetAll");
    }
}

export default new RecipeDataService();
