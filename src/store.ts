import { configureStore } from "@reduxjs/toolkit";
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

// interface DocumentAction {
//     type: string;
//     payload?: any;
// }


enum documentActions {
    FETCH_DOCUMENTS = "FETCH_DOCUMENTS",
    FETCH_DOCUMENTS_SUCCESS = "FETCH_DOCUMENTS_SUCCESS",
    FETCH_DOCUMENTS_ERROR = "FETCH_DOCUMENTS_ERROR"
}

interface FetchDocumentsAction {
    type: documentActions.FETCH_DOCUMENTS;
}

interface FetchDocumentsSuccessAction {
    type: documentActions.FETCH_DOCUMENTS_SUCCESS;
    payload: DocumentItem[];
}

interface FetchDocumentsErrorAction {
    type: documentActions.FETCH_DOCUMENTS_ERROR;
    payload: string;
}

type DocumentAction = FetchDocumentsAction | FetchDocumentsSuccessAction | FetchDocumentsErrorAction;

const initialState: DocumentState = {
    documents: documentsDefault,
    loading: false,
    error: null
}

export function documentsReducer(state = initialState, action: DocumentAction): DocumentState {
    switch (action.type) {
        case documentActions.FETCH_DOCUMENTS:
            return { documents: [], loading: true, error: null };
        case documentActions.FETCH_DOCUMENTS_SUCCESS:
            return { documents: action.payload, loading: false, error: null };
        case documentActions.FETCH_DOCUMENTS_ERROR:
            return { documents: [], loading: false, error: action.payload };
        default:
            return state;
    }
}

const store = configureStore({
    reducer: documentsReducer,
});


export default store