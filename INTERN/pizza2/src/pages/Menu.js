import React, { useState } from 'react';
import Layout from '../components/Layout/Layout';
import { MenuList } from "../data/data";
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import Button from '@mui/material/Button';

const Menu = () => {
  const [itemCount, setItemCount] = useState({});

  const handleAddItem = (name) => {
    setItemCount(prevState => ({
      ...prevState,
      [name]: (prevState[name] || 0) + 1
    }));
  };

  const handleRemoveItem = (name) => {
    setItemCount(prevState => ({
      ...prevState,
      [name]: (prevState[name] || 0) - 1
    }));
  };

  return (
    <Layout>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {MenuList.map((menu) => (
          <Card sx={{ maxWidth: "190px", display: "flex", m: 2 }} key={menu.name}>
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: "200px" }}
                component={"img"}
                src={menu.image}
                alt={menu.name}
              />
              <CardContent>
                <Typography variant="h6" component="div" sx={{ fontWeight: "bold" }}>
                  {menu.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  ₹{menu.price}
                </Typography>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <StarIcon sx={{ color: "gold" }} />
                  <Typography variant="body2" color="text.secondary" sx={{ ml: 0.5 }}>
                    {menu.rating}
                  </Typography>
                </div>
              </CardContent>
              {itemCount[menu.name] ? (
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Button variant="outlined" onClick={() => handleRemoveItem(menu.name)}>-</Button>
                  <Typography variant="body2" sx={{ mx: 1 }}>{itemCount[menu.name]}</Typography>
                  <Button variant="outlined" onClick={() => handleAddItem(menu.name)}>+</Button>
                </Box>
              ) : (
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Button variant="outlined" onClick={() => handleAddItem(menu.name)}>ADD</Button>
                </Box>
              )}
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Layout>
  );
};

export default Menu;
