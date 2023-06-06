import api from "../../../api-common";
import jwtInterceptor from "../../Auth/shared/jwtInterceptor";

class ProductDataService {
  async create(data) {
    return await jwtInterceptor.post("/api/Product/Create", data);
  }

  async get(id) {
    return await api.get(`/api/Product/Get?id=${id}`);
  }

  async delete(id) {
    return await jwtInterceptor.delete(`/api/Product/Delete?id=${id}`);
  }

  async getAll(user) {
    return await api.get("/api/Product/GetAll");
  }
}

export default new ProductDataService();
