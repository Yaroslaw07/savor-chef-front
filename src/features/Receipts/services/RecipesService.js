import api from "../../../api-common";
import jwtInterceptor from "../../Auth/shared/jwtInterceptor";

class RecipeDataService {

    async create(data) {
      return await jwtInterceptor.post("/api/Recipe/Create", data);
    }

    async get(id) {
      return await api.get(`/api/Recipe/Get?id=${id}`);
    }

    async delete(id) {
        return await jwtInterceptor.delete("/api/Recipe/Delete", id);
    }

    async getAll(user) {      
      return await api.get("/api/Recipe/GetAll");
    }
}

export default new RecipeDataService();
