import { Box, Skeleton, Typography } from "@mui/material";
import { FC } from "react";
import { IComic } from "types/IComic.type";

type CardCheckoutProductProps = {
  comic: IComic | undefined;
};

const CardCheckoutProduct: FC<CardCheckoutProductProps> = ({ comic }) => {
  return (
    <Box
      sx={{
        height: "100%",
        width: 400,
        display: "flex",
        flexDirection: "column",
        border: "2px solid #1e88e5", // Contorno azul
        borderRadius: "12px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "scale(1.02)",
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
        },
      }}
    >
      <Box
        display={"flex"}
        alignItems="center"
        justifyContent={"center"}
        maxWidth={"400px"}
        sx={{ borderRadius: "12px 12px 0 0", overflow: "hidden" }}
      >
        {!comic ? (
          <Skeleton
            sx={{ height: 400, width: "100%" }}
            animation="wave"
            variant="rectangular"
            data-testid="skeleton-image"
          />
        ) : (
          <Box
            sx={{ minHeight: 400, width: "100%" }}
            component="img"
            src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
            alt={comic.title}
            style={{ objectFit: "cover" }}
          />
        )}
      </Box>
      <Box sx={{ padding: "16px", flexGrow: 1 }}>
        {comic?.isbn && (
          <Typography variant="body2" sx={{ paddingTop: "20px" }}>
            ISBN: {comic.isbn}
          </Typography>
        )}

        <Box sx={{ paddingY: 3 }}>
          {!comic ? (
            <Skeleton
              sx={{ height: 25, width: "100%" }}
              animation="wave"
              variant="rectangular"
              data-testid="skeleton-title"
            />
          ) : (
            <Typography variant="h5">{comic.title}</Typography>
          )}
        </Box>
        <Box
          sx={{
            borderBottom: "1px solid rgba(0, 0, 0, .125)",
            borderTop: "1px solid rgba(0, 0, 0, .125)",
            display: "flex",
            justifyContent: "space-between",
            paddingY: { xs: 1.5, sm: 2.5 },
          }}
        >
          {!comic ? (
            <Skeleton
              sx={{ height: 25, width: "100%" }}
              animation="wave"
              variant="rectangular"
              data-testid="skeleton-price"
            />
          ) : (
            <>
              <Typography variant="h6">Pagás</Typography>
              <Typography variant="h6">$ {comic.price}</Typography>
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default CardCheckoutProduct;