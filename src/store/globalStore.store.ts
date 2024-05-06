import { create } from 'zustand';

export interface GlobalStore {
    positionMenu: number;
    setPositionMenu: (position: number) => void;
    contactModal: boolean;
    setContactModal: (open: boolean) => void;
    isCopy: boolean;
    setCopyToClipboard: (copy: boolean) => void;
}

const INITIAL_STATE = {
    positionMenu: 0,
    contactModal: false,
    isCopy: false,
}

export const globalStore = create<GlobalStore>((set) => ({
    ...INITIAL_STATE,
    setPositionMenu: (position: number) => set({ positionMenu: position }),
    setContactModal: (open: boolean) => set({ contactModal: open }),
    setCopyToClipboard: (copy: boolean) => set({ isCopy: copy}),
}));