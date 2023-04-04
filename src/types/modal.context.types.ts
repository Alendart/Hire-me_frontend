export type ModalShowContextType = {
    modal: ModalData
    updateModalData: (id?: string) => void;
}

export interface ModalData {
    show: boolean;
    id: string,
}