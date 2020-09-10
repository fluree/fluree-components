import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import FavoriteIcon from "@material-ui/icons/Favorite";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import IconButton from "@material-ui/core/IconButton";
import ShareIcon from "@material-ui/icons/Share";
import { FlureeBasic } from "../../../themes";

export default {
  title: "Surfaces/Cards",
  component: Card,
};

const Template = (args) => (
  <FlureeBasic>
    <Card {...args.card} maxWidth="400px">
      {args.cardHeader && <CardHeader {...args.cardHeader.props} />}
      {args.cardContent && (
        <CardContent {...args.cardContent.props}>{args.cardContent.content}</CardContent>
      )}
      {args.cardActions && (
        <CardActions {...args.cardActions.props}>
          {args.cardActions.children}
        </CardActions>
      )}
    </Card>
  </FlureeBasic>
);

export const EmptyCard = Template.bind({});
EmptyCard.args = {
  card: {
    style: { width: "300px", height: "200px" },
  },
};

export const BlueCard = Template.bind({});
BlueCard.args = {
  cardHeader: {
    props: {
      title: "Pre-fab Homes",
    },
  },
  cardActions: {
    children: (
      <>
        <IconButton>
          <FavoriteIcon />
        </IconButton>
        <IconButton>
          <BookmarkIcon color="primary" />
        </IconButton>
        <IconButton>
          <ShareIcon />
        </IconButton>
      </>
    ),
  },
};
