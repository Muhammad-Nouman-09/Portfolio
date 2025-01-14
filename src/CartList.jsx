import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import { Typography, List, ListItem, ListItemText, Avatar, ListItemAvatar } from '@mui/material';
import { useSelector } from 'react-redux';

export default function CartList(props) {
  const { open, toggleDrawer } = props;

  // Accessing cart items from Redux
  const { cartItems } = useSelector((state) => state.counter);
  console.log(cartItems ); // Debugging cart items

  const DrawerList = (
    <Box
      sx={{ width: 250, padding: 2 }}
      role="presentation"
      onClick={(e) => e.stopPropagation()} // Prevent closing the drawer on content click
    >
      <Typography variant="h5" gutterBottom>
        Cart Items
      </Typography>
      <Divider />

      <List>
        {/* Render cart items */}
        {cartItems && cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <ListItem key={index} alignItems="flex-start">
              {/* Show item image */}
              {item.image && (
                <ListItemAvatar>
                  <Avatar alt={item.name} src={item.image} />
                </ListItemAvatar>
              )}
              {/* Show item details */}
              <ListItemText
                primary={item.name}
                secondary={
                  <>
                    <Typography variant="body2" color="textPrimary">
                      Price: ${item.price}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Category: {item.category}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Quantity: {item.quantity || 1}
                    </Typography>
                  </>
                }
              />
            </ListItem>
          ))
        ) : (
          <Typography variant="body2" color="textSecondary" sx={{ mt: 2 }}>
            No items in the cart.
          </Typography>
        )}
      </List>
    </Box>
  );

  return (
    <div>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
