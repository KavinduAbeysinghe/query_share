import { Button, ButtonProps } from "@mui/material";

interface PrimaryButtonProps extends ButtonProps {
  buttonText: string;
}

const PrimaryButton = ({
  buttonText,
  variant,
  ...rest
}: PrimaryButtonProps) => {
  return (
    <Button
      variant={variant}
      {...rest}
      sx={{ fontWeight: 600, fontSize: "17px" }}
      fullWidth
      className={variant === "contained" ? "primary-btn" : "secondary-btn"}
    >
      {buttonText}
    </Button>
  );
};

export default PrimaryButton;
