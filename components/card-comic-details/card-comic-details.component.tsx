import type { NextPage } from "next";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { IComic } from "types/IComic.type";
import { percentageOff } from "../../utils/calcPercentageOff";
import { useTheme } from "@mui/material/styles"; // Importa el hook useTheme

interface Props {
  comic: IComic;
}

const CardComicDetails: NextPage<Props> = ({ comic }) => {
  const theme = useTheme(); // Usa el hook useTheme para acceder al tema
  const offert = percentageOff(comic?.oldPrice, comic?.price);

  return (
    <Box
      sx={{
        paddingBottom: "30px",
        fontFamily: theme.typography.fontFamily,
      }}
    >
      <Typography
        gutterBottom
        variant="subtitle1"
        component="div"
        sx={{
          fontSize: theme.typography.subtitle1.fontSize,
          fontWeight: theme.typography.subtitle1.fontWeight,
          color: theme.typography.subtitle1.color,
        }}
      >
        Serie: {comic.series.name}
      </Typography>
      <Typography
        gutterBottom
        variant="h5"
        sx={{
          fontSize: theme.typography.h5.fontSize,
          fontWeight: theme.typography.h5.fontWeight,
          color: theme.typography.h5.color,
        }}
      >
        {comic.title}
      </Typography>
      {comic.isbn !== "" && (
        <Typography
          gutterBottom
          variant="subtitle1"
          component="div"
          sx={{
            fontSize: theme.typography.subtitle1.fontSize,
            fontWeight: theme.typography.subtitle1.fontWeight,
            color: theme.typography.subtitle1.color,
          }}
        >
          ISBN: {comic.isbn}
        </Typography>
      )}
      <Box
        sx={{
          padding: "30px 0px",
        }}
      >
        {comic.oldPrice && comic.stock > 0 && (
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{
              textDecoration: "line-through",
              marginBottom: "5px",
              paddingRight: "15px",
              fontSize: theme.typography.body1.fontSize,
              fontWeight: 400,
              color: "#666", // Color opcional si no se usa el color del tema
            }}
          >
            ${comic.oldPrice}
          </Typography>
        )}

        {offert > 0 && (
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{
              fontSize: theme.typography.body1.fontSize,
              fontWeight: 400,
              color: "#666", // Color opcional si no se usa el color del tema
            }}
          >
            {offert}% OFF!
          </Typography>
        )}
      </Box>
      <Typography
        variant="h4"
        sx={{
          fontSize: "24px", // Puedes definir aquí el tamaño específico si lo prefieres
          fontWeight: 700,
          color: "#1a1a1a", // Color opcional si no se usa el color del tema
        }}
      >
        ${comic.price}
      </Typography>
    </Box>
  );
};

export default CardComicDetails;