import { create } from "zustand";

export type ModalType = "registerModal" | "loginModal" | "rentModal" | "searchModal";

interface ModalStoreInterface {
  isOpen: boolean;
  type: ModalType | null;
  onOpen: (type: ModalType) => void;
  onClose: () => void;
}

const useModalStore = create<ModalStoreInterface>((set) => ({
  isOpen: false,
  type: null,
  onOpen: (type) => set({ isOpen: true, type }),
  onClose: () => set({ isOpen: false, type: null }),
}));

export default useModalStore;