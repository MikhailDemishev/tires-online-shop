import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export type ModalType = 'AuthGuard' | 'OrderCreated' | 'Auth';

type OpenModalPayload = {
  type: ModalType;
  routeId?: string;
};

interface ModalState {
  isOpen: boolean;
  type: ModalType | null;
  routeId?: string;
}

const initialState: ModalState = {
  isOpen: false,
  type: null,
  routeId: undefined,
};

export const modalOpenCloseSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal(state, action: PayloadAction<OpenModalPayload>) {
      state.isOpen = true;
      state.type = action.payload.type;
      state.routeId = action.payload.routeId;
    },
    closeModal(state) {
      state.isOpen = false;
      state.type = null;
    },

    resetRouteId(state) {
      state.routeId = undefined;
    },
  },

  selectors: {
    selectIsOpen: (state) => state.isOpen,
    selectModalType: (state) => state.type,
    selectRouteId: (state) => state.routeId,
  },
});

export const { openModal, closeModal, resetRouteId } =
  modalOpenCloseSlice.actions;
export const { selectIsOpen, selectModalType, selectRouteId } =
  modalOpenCloseSlice.selectors;

export const modalOpenCloseReducer = modalOpenCloseSlice.reducer;
