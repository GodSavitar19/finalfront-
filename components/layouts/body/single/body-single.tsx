import * as React from 'react';
import { FC, PropsWithChildren } from "react";
import Container, { ContainerProps } from "@mui/material/Container";
import { Stack, Typography } from "@mui/material";

interface BodySingleProps extends PropsWithChildren {
    title?: string;
    containerProps?: ContainerProps;
}

const BodySingle: FC<BodySingleProps> = ({ title, containerProps, children }: BodySingleProps) => {
    return (
        <Container 
            maxWidth="xl" 
            sx={{ 
                py: 4, // Espaciado vertical
                px: { xs: 2, sm: 4 }, // Espaciado horizontal adaptable
                ...containerProps?.sx // Mantener los estilos personalizados del contenedor
            }} 
            {...containerProps}
        >
            <Stack 
                direction={"column"} 
                spacing={4} // Espaciado entre los elementos
                justifyContent={'center'}
                alignItems={'center'} // Centrar horizontalmente
            >
                {title && (
                    <Typography 
                        variant="h2" 
                        textAlign={'center'} 
                        fontSize={{ xs: '2rem', md: '3rem' }} // Tamaño de fuente adaptable
                        fontWeight={700} // Peso de fuente más fuerte
                        color={'#333'} // Color de texto más oscuro
                        sx={{ mb: 2 }} // Margen inferior para separar del contenido
                    >
                        {title}
                    </Typography>
                )}
                {children}
            </Stack>
        </Container>
    );
};

export default BodySingle;