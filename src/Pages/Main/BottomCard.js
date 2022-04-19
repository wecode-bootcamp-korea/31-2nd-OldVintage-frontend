import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';
import { CardActionArea } from '@mui/material';

const BottomCard = ({ title, content, image }) => {
  return (
    <StyledCard sx={{ maxWidth: 345, maxHeight: 500 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="120"
          image={`/images/main/${image}`}
          alt="bottom image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {content}
          </Typography>
        </CardContent>
      </CardActionArea>
    </StyledCard>
  );
};

export default BottomCard;

const StyledCard = styled(Card)`
  margin: 0 20px;
`;
