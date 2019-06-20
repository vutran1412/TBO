export const MODAL_OPEN = 'MODAL_OPEN'
export const MODAL_CLOSE = 'MODAL_CLOSE'

export const modalOpen = modal => (
    {
        type: MODAL_OPEN,
        modal
    }
)

export const modalClose = () => (
    {
        type: MODAL_CLOSE
    }
)