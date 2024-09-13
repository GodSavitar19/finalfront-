import { createTheme } from "@mui/material";

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    buyCard: true;
    buyCardDisabled: true;
    link: true;
    seeMore: true;
    nextStepBuy: true;
    finalStepBuy: true;
  }
}

declare module "@mui/material/Card" {
  interface CardPropsVariantOverrides {
    cardProduct: true;
  }
}

export const theme = createTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
    subtitle1: {
      fontSize: 14,
      fontWeight: 600,
      color: "#666",
    },
    body1: {
      fontSize: 16,
      fontWeight: 400,
      color: "#333",
    },
    button: {
      fontSize: 16,
      fontWeight: 700,
      textTransform: "uppercase",
    },
    h5: {
      fontSize: 24,
      fontWeight: 700,
      color: "#1a1a1a",
    },
  },

  components: {
    /* ---- CARD ---- */
    MuiCard: {
      variants: [
        {
          props: { variant: "outlined" },
          style: {
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            border: "2px solid #1e88e5", // Contorno azul
            borderRadius: "12px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            "&:hover": {
              transform: "scale(1.02)",
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
            },
          },
        },
      ],
    },
    
    /* ---- CARD MEDIA ---- */
    MuiCardMedia: {
      styleOverrides: {
        root: {
          objectFit: "cover",
          borderRadius: "12px 12px 0 0",
        },
      },
    },
    
    /* ---- CARD CONTENT ---- */
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: "16px",
          borderTop: "2px solid #1e88e5", // Borde superior azul para el contenido de la tarjeta
        },
      },
    },
    
    /* ---- CARD ACTIONS ---- */
    MuiCardActions: {
      styleOverrides: {
        root: {
          padding: "16px",
          justifyContent: "space-between",
        },
      },
    },

    /* ---- BUTTON ---- */
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          fontWeight: 700,
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          transition: "background-color 0.3s, color 0.3s, transform 0.3s",
          "&:hover": {
            transform: "scale(1.05)",
          },
        },
      },
      variants: [
        {
          props: { variant: "buyCard" },
          style: {
            textTransform: "none",
            border: `3px solid #1e88e5`, // Borde azul para el botón buyCard
            backgroundColor: "#e3f2fd",
            borderRadius: "12px",
            fontSize: 18,
            fontWeight: 800,
            padding: "12px 24px",
            color: "#1e88e5",
            boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
            "&:hover": {
              backgroundColor: "#1e88e5",
              color: "#fff",
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
            },
          },
        },
        {
          props: { variant: "nextStepBuy" },
          style: {
            textTransform: "none",
            border: `3px solid #1e88e5`,
            backgroundColor: "#e3f2fd",
            borderRadius: "12px",
            fontSize: 18,
            fontWeight: 800,
            padding: "12px 24px",
            color: "#1e88e5",
            boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
            "&:hover": {
              backgroundColor: "#1e88e5",
              color: "#fff",
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
            },
          },
        },
        {
          props: { variant: "finalStepBuy" },
          style: {
            textTransform: "capitalize",
            border: `2px solid #1e88e5`,
            backgroundColor: "#ff8c00",
            borderRadius: "8px",
            fontSize: 16,
            padding: "12px 24px",
            color: "#fff",
          },
        },
        {
          props: { variant: "buyCardDisabled" },
          style: {
            textTransform: "none",
            border: `2px solid #dcdcdc`,
            backgroundColor: "#e0e0e0",
            borderRadius: "8px",
            fontSize: 16,
            padding: "10px 20px",
            color: "#a0a0a0",
          },
        },
        {
          props: { variant: "seeMore" },
          style: {
            borderBottom: `2px solid #1e88e5`,
            borderRadius: 0,
            fontSize: 14,
            color: "#1e88e5",
            padding: "8px 0",
          },
        },
        {
          props: { variant: "link" },
          style: {
            display: "block",
            textTransform: "none",
            fontWeight: "normal",
            textAlign: "left",
            fontSize: "14px",
            padding: "6px 8px",
            color: "#1e88e5",
            "&:hover": {
              backgroundColor: "#e3f2fd",
              color: "#0d47a1",
            },
          },
        },
      ],
    },
  },
});