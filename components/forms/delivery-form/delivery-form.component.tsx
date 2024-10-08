import { Stack, Box } from "@mui/material";
import { FC, useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ControlledTextInput from "dh-marvel/components/controlled-text-input/ControlledTextInput.component";
import deliverySchema from "./schema";
import StepperNavigation from "../stepper-navigation.component";
import { IAddress } from "types/ICheckout.type";

export type DeliveryFormProps = {
  data: IAddress;
  activeStep: number;
  handleNext: (data: IAddress) => void;
  handleBack: () => void;
};

const DeliveryForm: FC<DeliveryFormProps> = ({
  data,
  activeStep,
  handleNext,
  handleBack,
}) => {
  const methods = useForm<IAddress>({
    resolver: yupResolver(deliverySchema),
    defaultValues: { ...data },
  });
  const { setFocus, handleSubmit } = methods;

  const onSubmit = (data: IAddress) => {
    handleNext(data);
  };

  useEffect(() => {
    setFocus("address1");
  }, [setFocus]);

  return (
    <Box
      component="section"
      sx={{
        p: 3,
        backgroundColor: '#f9f9f9',
        borderRadius: 1,
        boxShadow: 1,
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormProvider {...methods}>
          <Stack spacing={3}>
            <ControlledTextInput name="address1" label="Dirección" />
            <ControlledTextInput name="address2" label="Dirección alternativa"/>
            <ControlledTextInput name="city" label="Ciudad" />
            <ControlledTextInput name="state" label="Provincia" />
            <ControlledTextInput name="zipCode" label="Código postal"/>
          </Stack>
        </FormProvider>
        
        <Stack direction="row" spacing={2} mt={4} justifyContent="center">
          <StepperNavigation
            activeStep={activeStep}
            handleNext={handleSubmit(onSubmit)}
            handleBack={handleBack}
          />
        </Stack>
      </form>
    </Box>
  );
};

export default DeliveryForm;