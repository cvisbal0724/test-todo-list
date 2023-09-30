import React from 'react';
import axios from 'axios';
import { IResponse } from '../../domain/interfaces/response/IResponse';
import { Config } from '../../domain/config/Config';

export class Http {

    static baseUrl = Config.urlBase;

    static async get<T>(url: string, params = {}): Promise<IResponse<T>> {
        const response = await axios.get<IResponse<T>>(`${this.baseUrl}${url}`, 
        { 
            params,
            headers: {'Content-Type': 'application/json'}
        });
        return response.data;
    }

    static async post<T>(url: string, data: any = {}): Promise<IResponse<T>> {
        const response = await axios.post<IResponse<T>>(`${this.baseUrl}${url}`, data, {
            headers: {'Content-Type': 'application/json'}
        });
        return response.data;
    }

    static async put<T>(url: string, data: any = {}): Promise<IResponse<T>> {
        const response = await axios.put<IResponse<T>>(`${this.baseUrl}${url}`, data, 
        {
            headers: {'Content-Type': 'application/json'}
        });
        return response.data;
    }

    static async delete<T>(url: string): Promise<IResponse<T>> {
        const response = await axios.delete<IResponse<T>>(`${this.baseUrl}${url}`, {
            headers: {'Content-Type': 'application/json'}
        });
        return response.data;
    }
}
