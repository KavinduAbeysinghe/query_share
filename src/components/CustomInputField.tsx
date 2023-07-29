import { Box, FormLabel, TextField } from "@mui/material";

interface CustomInputFieldProps {
  register: any;
  disabled: boolean;
  errors: boolean;
  helperText: any;
  label: string;
  id: string;
  type: string;
  placeholder?: string;
}

const CustomInputField = ({
  register,
  disabled,
  errors,
  helperText,
  label,
  id,
  placeholder,
  type,
  ...rest
}: CustomInputFieldProps | any) => {
  return (
    <Box display={"flex"} flexDirection={"column"}>
      <FormLabel htmlFor={id} sx={{ ml: 3, fontWeight: "600" }}>
        {label}
      </FormLabel>
      <TextField
        type={type}
        placeholder={placeholder ?? ""}
        id={id}
        {...register}
        {...rest}
        disabled={disabled}
        error={errors}
        helperText={helperText}
        InputLabelProps={{ shrink: false }}
      />
    </Box>
  );
};

export default CustomInputField;
