import { Stack, Box } from "@mui/material";
import { FC, useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ControlledTextInput from "dh-marvel/components/controlled-text-input/ControlledTextInput.component";
import { personalDataSchema } from "./schema";
import StepperNavigation from "../stepper-navigation.component";
import { ICustomer } from "types/ICheckout.type";

export type CustomerDataProps = {
  data: ICustomer;
  activeStep: number;
  handleNext: (data: ICustomer) => void;
};

const CustomerDataForm: FC<CustomerDataProps> = ({
  data,
  activeStep,
  handleNext,
}: CustomerDataProps) => {
  const methods = useForm<ICustomer>({
    resolver: yupResolver(personalDataSchema),
    defaultValues: { ...data },
  });
  const { setFocus, handleSubmit } = methods;

  const onSubmit = (data: ICustomer) => {
    handleNext(data);
  };

  useEffect(() => {
    setFocus("name");
  }, [setFocus]);

  return (
    <Box
      component="section"
      sx={{
        p: 3,
        backgroundColor: '#f5f5f5',
        borderRadius: 1,
        boxShadow: 1,
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormProvider {...methods}>
          <Stack spacing={3}>
            <ControlledTextInput name="name" label="Nombre" />
            <ControlledTextInput name="lastname" label="Apellido" />
            <ControlledTextInput name="email" label="Email" />
          </Stack>
        </FormProvider>

        <Stack direction="row" spacing={2} mt={4} justifyContent="center">
          <StepperNavigation
            activeStep={activeStep}
            handleNext={handleSubmit(onSubmit)}
            handleBack={() => {}}
          />
        </Stack>
      </form>
    </Box>
  );
};

export default CustomerDataForm;
