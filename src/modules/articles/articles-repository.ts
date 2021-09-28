import { AxiosResponse } from 'axios';
import { HttpClient } from '../../utils/http-client';
import { ArticleAPiModel } from './models/articles';


export class ArticlesRepository {

    /**
     * Get all articles -> it will fetch all the records from the backend. -> returns multiple records
     */
    public static async getAllArticles(): Promise<ArticleAPiModel[]> {
        const url: string = "https://60d824306f13520017a68179.mockapi.io/api/v1/articles";
        let apiResponse: Promise<AxiosResponse<ArticleAPiModel[]>> = HttpClient.get<ArticleAPiModel[]>(url);
        return (await apiResponse).data;
    }

    /**
     * it will fire a post request to API -> to create a entry
     * @param data holds the data to post to backend
     */
    public static async addArticle(data: ArticleAPiModel) {
        const url: string = "https://60d824306f13520017a68179.mockapi.io/api/v1/articles";
        await HttpClient.post(url, data);
    }

    /**
     * get the article by ID -> returns single record.
     * @param id holds the id of an entity to fetch
     */
    public static async getArticle(id: number): Promise<ArticleAPiModel> {
        const url: string = "https://60d824306f13520017a68179.mockapi.io/api/v1/articles/" + id;
        let apiResponse: Promise<AxiosResponse<ArticleAPiModel>> = HttpClient.get<ArticleAPiModel>(url);
        return (await apiResponse).data;
    }

    /**
     * fires a delete request - to delete entity
     * @param id holds the ID of an entity to delete from backend
     */
    public static async deleteArticle(id: number ): Promise<ArticleAPiModel> {
        const url: string = "https://60d824306f13520017a68179.mockapi.io/api/v1/articles/" + id;
        let apiResponse: Promise<AxiosResponse<ArticleAPiModel>> = HttpClient.delete<ArticleAPiModel>(url);
        return (await apiResponse).data;
    }

    /**
     * fires PUT req -> and updates the details with the ID.
     * @param id holds the id of the entity to update in the backend.
     * @param data holds the data to update.
     */
    public static async updateArticle(id: number, data: ArticleAPiModel): Promise<ArticleAPiModel> {
        const url: string = "https://60d824306f13520017a68179.mockapi.io/api/v1/articles/" + id;
        let apiResponse: Promise<AxiosResponse<ArticleAPiModel>> = HttpClient.put<ArticleAPiModel>(url, data);
        return (await apiResponse).data;
    }
}