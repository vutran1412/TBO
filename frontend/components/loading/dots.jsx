import styled, { keyframes } from 'styled-components'

const blink = keyframes`
    50% { color: transparent }
`

export const Dot = styled.span`
    animation: 1s ${blink} infinite;
    &:nth-child(1) {
        animation-delay: 0ms;
    }
    &:nth-child(2) {
        animation-delay: 250ms;
    }
    &:nth-child(3) {
        animation-delay: 500ms;
    }
`