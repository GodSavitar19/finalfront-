import { Box } from "@mui/system";
import { Button, Typography } from "@mui/material";
import { IComic } from "types/IComic.type";
import NextLink from "next/link";
import AccordionCollapsible from "../accordion-collapsible/accordion-collapsible.component";
import { getIdfromURI } from "../../utils/getIdFromURI";
import { FC } from "react";

interface Props {
  comic: IComic;
}

const AccordionComic: FC<Props> = ({ comic }) => {
  return (
    <Box>
      <AccordionCollapsible title="Descripción">
        <Typography variant="body1" gutterBottom>
          {comic.description ? comic.description : "Sin descripción disponible."}
        </Typography>
      </AccordionCollapsible>
      <AccordionCollapsible title="Personajes">
        <Box>
          {comic.characters.items.length ? (
            comic.characters.items.map((character) => (
              <NextLink
                href={`/characters/${getIdfromURI(character.resourceURI)}`}
                key={character.name}
              >
                <Button variant="link" size="small" sx={{ mb: 1 }}>
                  {character.name}
                </Button>
              </NextLink>
            ))
          ) : (
            <Typography variant="body1">
              Sin listado de personajes disponible.
            </Typography>
          )}
        </Box>
      </AccordionCollapsible>
      <AccordionCollapsible title="Creadores">
        <Box>
          {comic.creators.items.length ? (
            comic.creators.items.map((creator) => (
              <Typography
                key={creator.name}
                variant="body1"
                sx={{
                  fontSize: "13px",
                  padding: "4px 5px",
                  color: "#333",
                }}
              >
                {creator.name} - {creator.role}
              </Typography>
            ))
          ) : (
            <Typography variant="body1">
              Sin listado de creadores disponible.
            </Typography>
          )}
        </Box>
      </AccordionCollapsible>
    </Box>
  );
};

export default AccordionComic;