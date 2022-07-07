
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface IQuery {
    getAllUser(): Nullable<Nullable<User>[]> | Promise<Nullable<Nullable<User>[]>>;
}

export interface User {
    id: number;
    name: string;
    email: string;
}

export interface SuccessType {
    success: boolean;
    message: string;
}

export interface IMutation {
    userAdd(name: string, email: string): Nullable<SuccessType> | Promise<Nullable<SuccessType>>;
    userUpdate(id: number, name: string, email: string): Nullable<SuccessType> | Promise<Nullable<SuccessType>>;
    userDelete(id: number): Nullable<SuccessType> | Promise<Nullable<SuccessType>>;
}

type Nullable<T> = T | null;
