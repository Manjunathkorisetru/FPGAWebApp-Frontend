import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";

import { FilterContainer } from "./XilinxFilter.styled";
import XilinxTable from "../XilinxTable";

const useStyles = makeStyles((theme) => ({
  button: {
    display: "flex-box",
    marginTop: theme.spacing(3),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function XilinxFilter() {
  const classes = useStyles();
  const [fam, setFam] = React.useState("");
  const [openfamily, setOpenfamily] = React.useState(false);

  // Family
  const handleFamChange = (event) => {
    setFam(event.target.value);
  };

  const handleFamClose = () => {
    setOpenfamily(false);
  };

  const handleFamOpen = () => {
    setOpenfamily(true);
  };

  return (
    <>
      <FilterContainer>
        <div>
          <Button className={classes.button} onClick={handleFamOpen}>
            Select a Family
          </Button>

          <FormControl className={classes.formControl}>
            <InputLabel id="demo-controlled-open-select-label">
              Family
            </InputLabel>

            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={openfamily}
              onClose={handleFamClose}
              onOpen={handleFamOpen}
              value={fam}
              onChange={handleFamChange}
            >
              <MenuItem value={"kintex7"}>Kintex 7</MenuItem>
              <MenuItem value={"virtex7"}>Virtex 7</MenuItem>
              <MenuItem value={"kintexultrascale"}>Kintex Ultrascale</MenuItem>
              <MenuItem value={"virtexultrascale"}>Virtex Ultrascale</MenuItem>
              <MenuItem value={"kintexultrascaleplus"}>
                Kintex Ultrascale Plus
              </MenuItem>
              <MenuItem value={"virtexultrascaleplus"}>
                Virtex Ultrascale Plus
              </MenuItem>
            </Select>
          </FormControl>
        </div>
      </FilterContainer>
      <XilinxTable family={fam} />
    </>
  );
}
