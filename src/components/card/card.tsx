import { Card as MuiCard } from "@mui/material";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { FC, memo } from "react";

export interface CardProps {
  /**
   * 圖片網址
   */
  img: string;
  /**
   * 標題
   */
  label: string;
}

export const Card: FC<CardProps> = ({ img, label }: CardProps) => {
  return (
    <MuiCard>
      <CardActionArea>
        <CardMedia component="img" height="140" image={img} alt={label} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {label}
          </Typography>
        </CardContent>
      </CardActionArea>
    </MuiCard>
  );
};
export default memo(Card);
