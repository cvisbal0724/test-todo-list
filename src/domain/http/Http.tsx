import React from 'react';
import axios from 'axios';
import { IResponse } from '../interfaces/IResponse';

export class Http {

    baseUrl = 'https://demodesarrolloafinia.sinin.co';

    async get<T>(url: string, params = {}): Promise<IResponse<T>> {
        const response = await axios.get<IResponse<T>>(`${this.baseUrl}${url}`, 
        { 
            params,
            headers: {'Content-Type': 'application/json'}
        });
        return response.data;
    }

    async post<T>(url: string, data = {}): Promise<IResponse<T>> {
        const response = await axios.post<IResponse<T>>(`${this.baseUrl}${url}`, data, {
            headers: {'Content-Type': 'application/json'}
        });
        return response.data;
    }

    async put<T>(url: string, data = {}): Promise<IResponse<T>> {
        const response = await axios.put<IResponse<T>>(`${this.baseUrl}${url}`, data, 
        {
            headers: {'Content-Type': 'application/json'}
        });
        return response.data;
    }

    async delete<T>(url: string): Promise<IResponse<T>> {
        const response = await axios.delete<IResponse<T>>(`${this.baseUrl}${url}`, {
            headers: {'Content-Type': 'application/json'}
        });
        return response.data;
    }
}
