/// <reference types="react-scripts" />
import { AriaAttributes, DOMAttributes } from "react";
declare module 'react' {
    interface HTMLAttributes<T> extends DOMAttributes<T> {
        width?: string,
        colSpan?: number | string
    }
}