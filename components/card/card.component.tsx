import React, { FC } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { IComic } from "types/IComic.type";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { getComicsById } from "dh-marvel/services/comic/comic.service";
import { useTheme } from "@mui/material/styles"; // Importa el hook useTheme

interface Props {
  comic: IComic;
}

const CardComponent: FC<Props> = ({ comic }) => {
  const router = useRouter();
  const theme = useTheme(); // Usa el hook useTheme para acceder al tema

  const handleBuy = async (id: number) => {
    const response: IComic = await getComicsById(id);

    if (response.stock > 0) {
      router.push({
        pathname: "/checkout",
        query: { comic: comic.id },
      });
    } else {
      router.push(`/comics/${id}`);
    }
  };

  return (
    <Card
      variant="outlined"
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        border: `2px solid ${theme.palette.primary.main}`, // Usa el color primario del tema para el borde
        borderRadius: "12px",
        boxShadow: theme.shadows[4], // Usa el sombreado del tema
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "scale(1.02)",
          boxShadow: theme.shadows[6], // Aumenta la sombra al hacer hover
        },
      }}
    >
      <CardMedia
        component="img"
        height="350"
        image={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
        alt={comic.title}
        sx={{
          borderTopLeftRadius: "12px",
          borderTopRightRadius: "12px",
          objectFit: "cover", // Asegura que la imagen se recorte adecuadamente
        }}
      />
      <CardContent
        sx={{
          padding: "16px",
          borderTop: `2px solid ${theme.palette.primary.main}`, // Borde superior azul para el contenido de la tarjeta
        }}
      >
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            fontSize: theme.typography.h5.fontSize,
            fontWeight: theme.typography.h5.fontWeight,
            color: theme.typography.h5.color,
          }}
        >
          {comic.title}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          padding: "16px",
          justifyContent: "space-between",
        }}
      >
        <NextLink href={`/comics/${comic.id}`} passHref>
          <Button variant="seeMore">Ver detalles</Button>
        </NextLink>
        <Button variant="buyCard" onClick={() => handleBuy(comic.id)}>
          COMPRAR
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardComponent;