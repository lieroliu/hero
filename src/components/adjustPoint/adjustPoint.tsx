import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { FC } from "react";
import { AdjustPointContainerStyled, LabelStyled, ValueStyled } from "./styles";

export interface AdjustPointProps {
  label: string;
  value: number;
  addDisabled?: boolean;
  minusDisabled?: boolean;
  onChange: (value: number) => void;
}

export const AdjustPoint: FC<AdjustPointProps> = ({
  label,
  value,
  addDisabled,
  minusDisabled,
  onChange,
}: AdjustPointProps) => {
  const handleAdd = () => {
    onChange(value + 1);
  };

  const handleMinus = () => {
    onChange(value - 1);
  };

  return (
    <AdjustPointContainerStyled>
      <LabelStyled>
        <Typography variant="h5">{label}</Typography>
      </LabelStyled>
      <Button variant="outlined" onClick={handleAdd} disabled={addDisabled}>
        <Typography variant="h5">+</Typography>
      </Button>
      <ValueStyled>
        <Typography variant="h5">{value}</Typography>
      </ValueStyled>
      <Button variant="outlined" onClick={handleMinus} disabled={minusDisabled}>
        <Typography variant="h5">-</Typography>
      </Button>
    </AdjustPointContainerStyled>
  );
};
export default AdjustPoint;