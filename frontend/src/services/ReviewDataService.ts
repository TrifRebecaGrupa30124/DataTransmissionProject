import http from "@/http-common";

/* eslint-disable */
class ReviewDataService {
    getAll(): Promise<any> {
        return http.get("/reviews");
    }

    get(id: any): Promise<any> {
        return http.get(`/reviews/${id}`);
    }

    create(data: any): Promise<any> {
        return http.post("/reviews", data);
    }

    update(id: any, data: any): Promise<any> {
        return http.put(`/reviews/${id}`, data);
    }

    delete(id: any): Promise<any> {
        return http.delete(`/reviews/${id}`);
    }

    deleteAll(): Promise<any> {
        return http.delete(`/reviews`);
    }

    findByTitle(title: string): Promise<any> {
        return http.get(`/reviews?name=${name}`);
    }
}

export default new ReviewDataService();
