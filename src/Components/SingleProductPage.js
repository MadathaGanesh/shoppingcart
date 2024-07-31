import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import BookmarkAdd from "@mui/icons-material/BookmarkAddOutlined";
import "../Data.json";
import { cartcontext } from "../State Management/ContextProvider";

export default function SingleProductPage({ productProp }) {
  const { dispatch } = React.useContext(cartcontext);
  return (
    <Card
      sx={{
        width: 320,
        margin: 1,
        transition: "transform 0.3s, box-shadow 0.3s",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: 3,
        },
        "&:focus": {
          transform: "scale(1.05)",
          boxShadow: 3,
        },
      }}
      tabIndex={0} // Make the card focusable
    >
      <div>
        <Typography level="title-md">{productProp.title}</Typography>
        <h3>Category : {productProp.category}</h3>
        <IconButton
          aria-label="bookmark Bahamas Islands"
          variant="plain"
          color="neutral"
          size="sm"
          sx={{ position: "absolute", top: "0.875rem", right: "0.5rem" }}
        >
          <BookmarkAdd />
        </IconButton>
      </div>
      <AspectRatio minHeight="120px" maxHeight="200px">
        <img
          className="rounded-md border-gray-200 border-2 mr-20"
          src={productProp.thumbnail}
          srcSet={productProp.thumbnail}
          loading="lazy"
          alt=""
        />
      </AspectRatio>
      <CardContent orientation="horizontal">
        <div>
          <Typography level="body-md">
            Total price: ${productProp.price}
          </Typography>
          <Typography level="body-md">
            Discount percentage : {productProp.discountPercentage}%
          </Typography>
          <Typography level="body-md">Rating :{productProp.rating}</Typography>
        </div>
      </CardContent>

      <CardContent orientation="horizontal">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "2px",
            marginLeft: "70px",
          }}
        >
          <Button
            variant="solid"
            size="md"
            color="primary"
            aria-label="Add to cart"
            sx={{ alignSelf: "center", fontWeight: 600 }}
            style={{ margin: "5px" }}
            onClick={() => {
              dispatch({ type: "Add", productProp });
            }}
          >
            Add to cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
