import React, { FC, useEffect, useState } from "react";
import "react-credit-cards/es/styles-compiled.css";
import Cards from "react-credit-cards";
import ControlledTextInput from "dh-marvel/components/controlled-text-input/ControlledTextInput.component";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import paymentSchema from "./schema";
import { Box, Stack } from "@mui/material";
import StepperNavigation from "../stepper-navigation.component";
import { ICard } from "types/ICheckout.type";

export type PaymentFormProps = {
  activeStep: number;
  handleNext: (data: ICard) => void;
  handleBack: () => void;
};

const PaymentForm: FC<PaymentFormProps> = ({
  activeStep,
  handleNext,
  handleBack,
}) => {
  const regexNumber = /^[0-9]*$/gm;

  const defaultValues = {
    cvc: "",
    expDate: "",
    nameOnCard: "",
    number: "",
  };

  const [payment, setPayment] = useState(defaultValues);

  const methods = useForm<ICard>({
    resolver: yupResolver(paymentSchema),
    defaultValues: {
      ...defaultValues,
    },
  });
  const { setFocus, handleSubmit, watch } = methods;

  const { number, nameOnCard, expDate, cvc } = watch();
  useEffect(() => {
    setPayment({
      number,
      nameOnCard,
      expDate,
      cvc,
    });
  }, [number, nameOnCard, expDate, cvc]);

  useEffect(() => {
    setFocus("number");
  }, [setFocus]);

  const onSubmit = (data: ICard) => {
    handleNext(data);
  };

  return (
    <Box
      id="PaymentForm"
      sx={{
        p: 3,
        backgroundColor: '#f5f5f5',
        borderRadius: 1,
        boxShadow: 1,
        maxWidth: 600,
        margin: '0 auto',
      }}
    >
      <Box mb={4} textAlign="center">
        <Cards
          cvc={payment.cvc}
          expiry={payment.expDate}
          name={payment.nameOnCard}
          number={payment.number}
        />
      </Box>

      <form onSubmit={handleSubmit(onSubmit)}>
        <FormProvider {...methods}>
          <Stack spacing={3}>
            <ControlledTextInput
              name="number"
              regex={regexNumber}
              label="Número de la tarjeta"
              maxLength={16}
              
            />
            <ControlledTextInput
              name="nameOnCard"
              label="Nombre como figura en la tarjeta"
              
            />
            <Stack direction="row" spacing={3}>
              <ControlledTextInput
                name="expDate"
                label="Fecha expiración"
                regex={regexNumber}
                maxLength={4}
                
              />
              <ControlledTextInput
                type="password"
                name="cvc"
                label="CVC"
                regex={regexNumber}
                maxLength={3}
              
              />
            </Stack>
          </Stack>
        </FormProvider>
        
        <Box mt={4}>
          <StepperNavigation
            activeStep={activeStep}
            handleNext={handleSubmit(onSubmit)}
            handleBack={handleBack}
          />
        </Box>
      </form>
    </Box>
  );
};

export default PaymentForm;