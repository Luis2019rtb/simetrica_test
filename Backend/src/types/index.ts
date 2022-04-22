
export type Nullable<T> = T | null;

// User Interface
export interface user {
    _id: string
    createdDate: Date
    email: string
    firstName: string
    password: string
    role?: string
}

