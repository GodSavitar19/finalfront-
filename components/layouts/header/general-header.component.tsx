import * as React from "react";
import { FC } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import NextLink from "next/link";
import { Link as MUILink, styled } from "@mui/material";

type Props = {
  variant?: "simple" | "general";
};

const HeaderLink = styled(MUILink)(({ theme }) => ({
  color: theme.palette.common.white,
  textDecoration: "none",
  "&:hover": {
    color: theme.palette.secondary.light,
  },
}));

const Header: FC<Props> = ({ variant }: Props) => {
  return (
    <Toolbar disableGutters>
      <NextLink href="/" passHref>
        <HeaderLink
          variant="h6"
          sx={{
            mr: 2,
            flexGrow: 1,
            fontWeight: 700,
            fontSize: 24,
          }}
        >
          DH-Marvel
        </HeaderLink>
      </NextLink>
      {variant === "general" && (
        <Box>
          <NextLink href="/faqs" passHref>
            <HeaderLink
              variant="body2"
              sx={{
                mr: 2,
                fontSize: 18,
                fontWeight: 600,
              }}
            >
              FAQ
            </HeaderLink>
          </NextLink>
        </Box>
      )}
    </Toolbar>
  );
};

const GeneralHeader: FC<Props> = ({ variant }: Props) => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#1976d2", // Azul principal del tema
        color: "#fff",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Sombra para profundidad
      }}
    >
      <Container maxWidth="xl">
        <Header variant={variant} />
      </Container>
    </AppBar>
  );
};

GeneralHeader.defaultProps = {
  variant: "general",
};

export default GeneralHeader;