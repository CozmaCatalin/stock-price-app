import React, { ReactElement } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Page } from "../../components/general";

const useStyles = makeStyles({
  welcomeMessage: {
    fontWeight: "bold",
    fontSize: "25px",
  },
});

const App: React.FC = (): ReactElement => {
  const classes = useStyles();
  return (
    <Page>
      <div>
        <p className={classes.welcomeMessage}>Welcome to Stock Price App</p>
        <p>Good morning, Cozma Catalin!</p>
      </div>
    </Page>
  );
};

export default App;
