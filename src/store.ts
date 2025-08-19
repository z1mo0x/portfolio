import { configureStore, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { documentsDefault } from "./assets/scripts/documentsItems";

export interface DocumentItem {
    id: number;
    name: string;
    text: string;
    baseActive?: boolean | undefined;
}

export interface DocumentState {
    documents: DocumentItem[];
    loading: boolean;
    error: null | string;
}

const initialState: DocumentState = {
    documents: documentsDefault,
    loading: false,
    error: null
};

// Создаем срез с помощью createSlice
const documentsSlice = createSlice({
    name: 'documents',
    initialState,
    reducers: {
        fetchDocuments(state) {
            state.loading = true;
            state.error = null;
            state.documents = [];
        },
        fetchDocumentsSuccess(state, action: PayloadAction<DocumentItem[]>) {
            state.loading = false;
            state.documents = action.payload;
            state.error = null;
        },
        fetchDocumentsError(state, action: PayloadAction<string>) {
            state.loading = false;
            state.documents = [];
            state.error = action.payload;
        }
    }
});

export const { fetchDocuments, fetchDocumentsSuccess, fetchDocumentsError } = documentsSlice.actions;

const store = configureStore({
    reducer: documentsSlice.reducer,
});

export default store;
