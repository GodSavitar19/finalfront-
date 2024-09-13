import * as React from "react";
import { FC, PropsWithChildren } from "react";
import { Stack, Box } from "@mui/material";
import GeneralHeader from "dh-marvel/components/layouts/header/general-header.component";
import GeneralFooter from "dh-marvel/components/layouts/footer/general-footer.component";

const LayoutCheckout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Stack
      direction="column"
      minHeight="100vh"
      spacing={2}
    >
      <GeneralHeader variant="simple" />
      <Box
        component="main"
        flexGrow={1}
        display="flex"
        justifyContent="center"
        alignItems="center"
        px={2}
      >
        {children}
      </Box>
      <GeneralFooter />
    </Stack>
  );
};

export default LayoutCheckout;