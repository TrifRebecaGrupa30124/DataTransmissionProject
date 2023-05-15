import http from "@/http-common";

/* eslint-disable */
class CustomerDataService {
    getAll(): Promise<any> {
        return http.get("/customers");
    }

    get(id: any): Promise<any> {
        return http.get(`/customers/${id}`);
    }

    create(data: any): Promise<any> {
        return http.post("/customers", data);
    }

    update(id: any, data: any): Promise<any> {
        return http.put(`/customers/${id}`, data);
    }

    delete(id: any): Promise<any> {
        return http.delete(`/customers/${id}`);
    }

    deleteAll(): Promise<any> {
        return http.delete(`/customers`);
    }

    findByTitle(title: string): Promise<any> {
        return http.get(`/customers?name=${name}`);
    }
}

export default new CustomerDataService();
