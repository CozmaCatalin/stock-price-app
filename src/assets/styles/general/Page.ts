import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../../theme";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: Colors.container,
  },
  content: {
    width: "100%",
  },
});

export default useStyles;
