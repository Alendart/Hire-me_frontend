export type ToastContextType = {
    toast: ToastInfoWithID;
    updateToast: (obj: ToastInfo) => void;
}

export interface ToastInfoWithID {
    id: string;
    class: toastClasses;
    title: string;
    description: string;
}

export type ToastInfo = Omit<ToastInfoWithID, "id">


export type toastClasses = "check" | "error" | "info" | "warning" | null