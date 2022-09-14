import {css} from "styled-components";

export const tablet = (data) => (
    css`
    @media only screen and (min-width: 640px) {
        ${data}
    }`
)
