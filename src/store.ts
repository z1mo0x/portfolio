import { configureStore, createSelector, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { documentsDefault } from "./assets/scripts/documentsItems";

export interface DocumentItem {
    id: number;
    name: string;
    text: string;
    baseActive?: boolean | undefined;
    inMenu: boolean;
}

export interface DocumentState {
    documents: DocumentItem[];
    loading: boolean;
    error: null | string;
}

const initialState: DocumentState = {
    documents: documentsDefault,
    loading: false,
    error: null,
};

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
        },
        setDocumentMenu(state, action: PayloadAction<number>) {
            const document = state.documents.find(doc => doc.id === action.payload);
            if (document) {
                document.inMenu = true;
            }
        },
        unsetDocumentMenu(state, action: PayloadAction<number>) {
            const document = state.documents.find(doc => doc.id === action.payload);
            if (document) {
                document.inMenu = false;
            }
        }
    }
});

export const inMenuItems = createSelector(
    (state: DocumentState) => state.documents,
    docs => docs.filter(doc => doc.inMenu === true)
)

export const { fetchDocuments, fetchDocumentsSuccess, fetchDocumentsError, setDocumentMenu, unsetDocumentMenu } = documentsSlice.actions;

const store = configureStore({
    reducer: documentsSlice.reducer,
});

export default store;
