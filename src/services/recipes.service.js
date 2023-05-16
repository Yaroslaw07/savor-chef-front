import api from "../api-common";

class RecipeDataService {

    create(data) {
      return api.post("Recipe/Create", data);
    }

    get(id) {
      return api.get("/Recipe/Get", id);
    }

    delete(id) {
        return api.delete("/Recipe/Delete",id)
    }

    getAll() {
      return api.get("/Product/GetAll");
    }
}

export default RecipeDataService;
