import { Box, Card, Stack, Typography } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { ICheckout } from "types/ICheckout.type";
import { FC } from "react";
import { useTheme } from "@mui/material/styles"; // Importa el hook useTheme

type CardSuccessCheckoutProps = {
  data: ICheckout;
};

const CardSuccessCheckout: FC<CardSuccessCheckoutProps> = ({ data }) => {
  const theme = useTheme(); // Usa el hook useTheme para acceder al tema

  return (
    <Card
      variant="outlined"
      sx={{
        height: "min-content",
        width: "auto",
        justifyContent: "center",
        alignItems: "center",
        padding: { xs: "20px", sm: "50px 90px" },
        background: theme.palette.background.default, // Usa el color de fondo del tema
        boxShadow: theme.shadows[6], // Usa el sombreado del tema
        border: `2px solid ${theme.palette.primary.main}`, // Usa el color primario del tema para el borde
      }}
    >
      <CheckCircleOutlineIcon
        color="success"
        sx={{
          fontSize: 80,
          marginY: "20px",
        }}
      />

      <Typography
        variant="h4"
        sx={{
          paddingBottom: "10px",
          fontSize: theme.typography.h4.fontSize,
          fontWeight: theme.typography.h4.fontWeight,
          color: theme.typography.h4.color,
        }}
      >
        ¡Que disfrutes tu compra!
      </Typography>

      <Stack
        direction={{ sm: "column", md: "row" }}
        spacing={{ xs: 15, sm: 15, md: 8, xl: 10 }}
        alignItems={{ xs: "center", sm: "center", md: "center" }}
      >
        <Box>
          <Typography
            variant="h5"
            sx={{
              maxWidth: "400px",
              fontSize: theme.typography.h5.fontSize,
              fontWeight: theme.typography.h5.fontWeight,
              color: theme.typography.h5.color,
            }}
          >
            {data.order.name}
          </Typography>
          <Box
            component="img"
            alt={data.order.name}
            src={data.order.image}
            sx={{
              maxWidth: 500,
              width: "100%",
              border: `3px solid ${theme.palette.text.primary}`, // Usa el color del texto del tema para el borde
              borderRadius: "8px", // Añade radio de borde para mayor consistencia con el tema
              objectFit: "cover", // Asegura que la imagen se recorte adecuadamente
            }}
          />
        </Box>
        <Box
          sx={{
            maxWidth: "400px",
            width: "100%",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              paddingBottom: "16px",
              fontSize: theme.typography.h5.fontSize,
              fontWeight: theme.typography.h5.fontWeight,
              color: theme.typography.h5.color,
            }}
          >
            Datos de entrega:
          </Typography>
          <Typography
            sx={{
              paddingBottom: "8px",
              fontSize: theme.typography.body1.fontSize,
              fontWeight: theme.typography.body1.fontWeight,
              color: theme.typography.body1.color,
            }}
          >
            Comprador {data?.customer.name} {data?.customer.lastname}
          </Typography>
          <Typography
            sx={{
              paddingBottom: "8px",
              fontSize: theme.typography.body1.fontSize,
              fontWeight: theme.typography.body1.fontWeight,
              color: theme.typography.body1.color,
            }}
          >
            Dirección: {data?.customer.address.address1}
          </Typography>
          {data?.customer.address.address2 && (
            <Typography
              sx={{
                paddingBottom: "8px",
                fontSize: theme.typography.body1.fontSize,
                fontWeight: theme.typography.body1.fontWeight,
                color: theme.typography.body1.color,
              }}
            >
              Dirección alternativa: {data?.customer.address.address2}
            </Typography>
          )}
        </Box>
      </Stack>
    </Card>
  );
};

export default CardSuccessCheckout;