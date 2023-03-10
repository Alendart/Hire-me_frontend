export interface ToastInfo {
    class: toastClasses;
    title: string;
    description: string;
}


export type toastClasses = "check" | "error" | "info" | "warning"