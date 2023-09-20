import { Container } from "@mui/material"
import React from "react"

export const Layout: React.FC<{ children: JSX.Element }> = ({ children}) => {
    return (
        <Container maxWidth="sm">
          { children }
        </Container>
    )
}