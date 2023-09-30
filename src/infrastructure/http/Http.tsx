import React from 'react';
import axios from 'axios';
import { IResponse } from '../../domain/interfaces/response/IResponse';
import { Config } from '../../domain/config/Config';

export class Http {

    static baseUrl = Config.urlBase;

    static async get<T>(url: string, params = {}): Promise<T> {
        const response = await axios.get<T>(`${this.baseUrl}${url}`, 
        { 
            params,
            headers: {'Content-Type': 'application/json'}
        });
        return response.data;
    }

    static async post<T>(url: string, data: any = {}): Promise<T> {
        const response = await axios.post<T>(`${this.baseUrl}${url}`, data, {
            headers: {'Content-Type': 'application/json'}
        });
        return response.data;
    }

    static async put<T>(url: string, data: any = {}): Promise<T> {
        const response = await axios.put<T>(`${this.baseUrl}${url}`, data, 
        {
            headers: {'Content-Type': 'application/json'}
        });
        return response.data;
    }

    static async delete<T>(url: string): Promise<T> {
        const response = await axios.delete<T>(`${this.baseUrl}${url}`, {
            headers: {'Content-Type': 'application/json'}
        });
        return response.data;
    }
}
