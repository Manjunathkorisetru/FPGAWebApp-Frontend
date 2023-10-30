import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import IntelTable from "../IntelTable";
//import { Link } from "react-router-dom";
import { FilterContainer } from "./IntelFilter.styled";
import XilinxFilter from "../XilinxFilter";

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

export default function Dropdown() {
  const classes = useStyles();
  const [fam, setFam] = React.useState("");
  const [variant, setVariant] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [openfamily, setOpenfamily] = React.useState(false);
  const [manufacturer, setManufacturer] = React.useState("");
  const [openmanufacturer, setOpenManufacturer] = React.useState(false);

  //Varaint
  const handleChange = (event) => {
    setVariant(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

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

  //Manufacturer

  const handleManufacturer = (event) => {
    setManufacturer(event.target.value);
  };

  const handleOpenManufacturer = () => {
    setOpenManufacturer(true);
  };

  const handleCloseManufacturer = () => {
    setOpenManufacturer(false);
  };

  return (
    <>
      <FilterContainer>
        <div>
          <Button className={classes.button} onClick={handleOpen}>
            Select a Manufacturer
          </Button>

          <FormControl className={classes.formControl}>
            <InputLabel id="demo-controlled-open-select-label">
              Manufacturer
            </InputLabel>

            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={openmanufacturer}
              onClose={handleCloseManufacturer}
              onOpen={handleOpenManufacturer}
              value={manufacturer}
              onChange={handleManufacturer}
            >
              <MenuItem value={"intel"}>Intel</MenuItem>
              <MenuItem value={"xilinx"}>Xilinx</MenuItem>
            </Select>
          </FormControl>
        </div>
      </FilterContainer>
      {manufacturer === "intel" && (
        <>
          <FilterContainer>
            <div>
              <Button className={classes.button} onClick={handleOpen}>
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
                  <MenuItem value={"stratix4"}>Stratix 4</MenuItem>
                  <MenuItem value={"stratix5"}>Stratix 5</MenuItem>
                  <MenuItem value={"stratix10"}>Stratix 10</MenuItem>
                  <MenuItem value={"arria10"}>Arria 10</MenuItem>
                  <MenuItem value={"arria5"}>Arria 5</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div>
              {fam === "arria5" ? (
                <>
                  <Button className={classes.button} onClick={handleOpen}>
                    Select a Variant
                  </Button>

                  <FormControl className={classes.formControl}>
                    <InputLabel id="demo-controlled-open-select-label">
                      Variants
                    </InputLabel>

                    <Select
                      labelId="demo-controlled-open-select-label"
                      id="demo-controlled-open-select"
                      open={open}
                      onClose={handleClose}
                      onOpen={handleOpen}
                      value={variant}
                      onChange={handleChange}
                    >
                      <MenuItem value={"GX"}>GX</MenuItem>
                      <MenuItem value={"SX"}>SX</MenuItem>
                      <MenuItem value={"GT"}>GT</MenuItem>
                      <MenuItem value={"GZ"}>GZ</MenuItem>
                      <MenuItem value={"ST"}>ST</MenuItem>
                    </Select>
                  </FormControl>
                </>
              ) : fam === "arria10" ? (
                <>
                  <Button className={classes.button} onClick={handleOpen}>
                    Select a Variant
                  </Button>

                  <FormControl className={classes.formControl}>
                    <InputLabel id="demo-controlled-open-select-label">
                      Variants
                    </InputLabel>

                    <Select
                      labelId="demo-controlled-open-select-label"
                      id="demo-controlled-open-select"
                      open={open}
                      onClose={handleClose}
                      onOpen={handleOpen}
                      value={variant}
                      onChange={handleChange}
                    >
                      <MenuItem value={"GX"}>GX</MenuItem>
                      <MenuItem value={"SX"}>SX</MenuItem>
                      <MenuItem value={"GT"}>GT</MenuItem>
                    </Select>
                  </FormControl>
                </>
              ) : fam === "stratix10" ? (
                <>
                  <Button className={classes.button} onClick={handleOpen}>
                    Select a Variant
                  </Button>

                  <FormControl className={classes.formControl}>
                    <InputLabel id="demo-controlled-open-select-label">
                      Variants
                    </InputLabel>

                    <Select
                      labelId="demo-controlled-open-select-label"
                      id="demo-controlled-open-select"
                      open={open}
                      onClose={handleClose}
                      onOpen={handleOpen}
                      value={variant}
                      onChange={handleChange}
                    >
                      <MenuItem value={"GX"}>GX</MenuItem>
                      <MenuItem value={"SX"}>SX</MenuItem>
                      <MenuItem value={"TX"}>TX</MenuItem>
                      <MenuItem value={"MX"}>MX</MenuItem>
                      <MenuItem value={"DX"}>DX</MenuItem>
                      <MenuItem value={"NX"}>NX</MenuItem>
                    </Select>
                  </FormControl>
                </>
              ) : fam === "stratix4" ? (
                <>
                  <Button className={classes.button} onClick={handleOpen}>
                    Select a Variant
                  </Button>

                  <FormControl className={classes.formControl}>
                    <InputLabel id="demo-controlled-open-select-label">
                      Variants
                    </InputLabel>

                    <Select
                      labelId="demo-controlled-open-select-label"
                      id="demo-controlled-open-select"
                      open={open}
                      onClose={handleClose}
                      onOpen={handleOpen}
                      value={variant}
                      onChange={handleChange}
                    >
                      <MenuItem value={"GT"}>GT</MenuItem>
                      <MenuItem value={"GX"}>GX</MenuItem>
                      <MenuItem value={"E"}>E</MenuItem>
                    </Select>
                  </FormControl>
                </>
              ) : (
                <>
                  <Button className={classes.button} onClick={handleOpen}>
                    Select a Variant
                  </Button>

                  <FormControl className={classes.formControl}>
                    <InputLabel id="demo-controlled-open-select-label">
                      Variants
                    </InputLabel>

                    <Select
                      labelId="demo-controlled-open-select-label"
                      id="demo-controlled-open-select"
                      open={open}
                      onClose={handleClose}
                      onOpen={handleOpen}
                      value={variant}
                      onChange={handleChange}
                    >
                      <MenuItem value={"GX"}>GX</MenuItem>
                      <MenuItem value={"GS"}>GS</MenuItem>
                      <MenuItem value={"E"}>E</MenuItem>
                    </Select>
                  </FormControl>
                </>
              )}
            </div>
          </FilterContainer>
          <IntelTable
            varia={variant}
            family={fam}
            manufacturer={manufacturer}
          />
        </>
      )}
      {manufacturer === "xilinx" && <XilinxFilter />}
    </>
  );
}
