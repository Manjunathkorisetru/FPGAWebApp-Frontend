import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import axios from "axios";

import DeleteIcon from "@material-ui/icons/Delete";

import {
  FilterContainer,
  Container,
  FamilyContainer,
  ButtonContainer,
} from "./ComparisonFilter.styled";
import ComparisonLogic from "../ComparisonLogic";

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

export default function ComparisonFilter() {
  const classes = useStyles();

  const [fam1del, setFam1Del] = useState(false);
  const [fam2del, setFam2Del] = useState(false);
  const [fam, setFam] = React.useState("");
  const [openfamily, setOpenfamily] = React.useState(false);
  const [fam2, setFam2] = React.useState("");
  const [openfamily2, setOpenfamily2] = React.useState(false);
  const [fam3, setFam3] = React.useState("");
  const [openfamily3, setOpenfamily3] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [variant, setVariant] = React.useState("");
  const [open2, setOpen2] = React.useState(false);
  const [variant2, setVariant2] = React.useState("");
  const [open3, setOpen3] = React.useState(false);
  const [variant3, setVariant3] = React.useState("");
  const [device, setDevice] = React.useState("");
  const [openDevice, setOpenDevice] = React.useState(false);
  const [device2, setDevice2] = React.useState("");
  const [openDevice2, setOpenDevice2] = React.useState(false);
  const [device3, setDevice3] = React.useState("");
  const [openDevice3, setOpenDevice3] = React.useState(false);
  const [devicelist, setDeviceList] = useState([]);
  const [devicelist2, setDeviceList2] = useState([]);
  const [devicelist3, setDeviceList3] = useState([]);

  const fetchIntelDeviceList = async (variant, fam) => {
    if (
      fam === "kintex7" ||
      fam === "virtex7" ||
      fam === "kintexultrascale" ||
      fam === "virtexultrascale" ||
      fam === "kintexultrascaleplus" ||
      fam === "virtexultrascaleplus"
    ) {
      setVariant(null);
    }

    const { data } = await axios.get(
      "https://mysterious-galoshes-moth.cyclic.app/fpga",
      {
        params: {
          variant: variant,
          family: fam,
        },
      }
    );
    setDeviceList(data);
  };

  const fetchIntelDeviceList2 = async (variant2, fam2) => {
    if (
      fam2 === "kintex7" ||
      fam2 === "virtex7" ||
      fam2 === "kintexultrascale" ||
      fam2 === "virtexultrascale" ||
      fam2 === "kintexultrascaleplus" ||
      fam2 === "virtexultrascaleplus"
    ) {
      setVariant2(null);
    }
    const { data } = await axios.get(
      "https://mysterious-galoshes-moth.cyclic.app/fpga",
      {
        params: {
          variant: variant2,
          family: fam2,
        },
      }
    );

    setDeviceList2(data);
  };

  const fetchIntelDeviceList3 = async (variant3, fam3) => {
    if (
      fam3 === "kintex7" ||
      fam3 === "virtex7" ||
      fam3 === "kintexultrascale" ||
      fam3 === "virtexultrascale" ||
      fam3 === "kintexultrascaleplus" ||
      fam3 === "virtexultrascaleplus"
    ) {
      setVariant3(null);
    }
    const { data } = await axios.get(
      "https://mysterious-galoshes-moth.cyclic.app/fpga",
      {
        params: {
          variant: variant3,
          family: fam3,
        },
      }
    );

    setDeviceList3(data);
  };

  //Variant
  const handleChange = (event) => {
    setVariant(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  //Variant 2
  const handleChange2 = (event) => {
    setVariant2(event.target.value);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  const handleOpen2 = () => {
    setOpen2(true);
  };

  //Variant 3
  const handleChange3 = (event) => {
    setVariant3(event.target.value);
  };

  const handleClose3 = () => {
    setOpen3(false);
  };

  const handleOpen3 = () => {
    setOpen3(true);
  };
  //Families
  const handleFamChange = (event) => {
    setFam(event.target.value);
  };

  const handleFamClose = () => {
    setOpenfamily(false);
  };

  const handleFamOpen = () => {
    setOpenfamily(true);
  };
  //Families 2
  const handleFam2Change = (event) => {
    setFam2(event.target.value);
  };

  const handleFam2Close = () => {
    setOpenfamily2(false);
  };

  const handleFam2Open = () => {
    setOpenfamily2(true);
  };
  //Families 3
  const handleFam3Change = (event) => {
    setFam3(event.target.value);
  };

  const handleFam3Close = () => {
    setOpenfamily3(false);
  };

  const handleFam3Open = () => {
    setOpenfamily3(true);
  };
  //Devices
  const handleDeviceChange = (event) => {
    setDevice(event.target.value);
  };

  const handleDeviceClose = () => {
    setOpenDevice(false);
  };

  const handleDeviceOpen = () => {
    setOpenDevice(true);
  };
  //Devices 2
  const handleDevice2Change = (event) => {
    setDevice2(event.target.value);
  };

  const handleDevice2Close = () => {
    setOpenDevice2(false);
  };

  const handleDevice2Open = () => {
    setOpenDevice2(true);
  };
  //Devices 3
  const handleDevice3Change = (event) => {
    setDevice3(event.target.value);
  };

  const handleDevice3Close = () => {
    setOpenDevice3(false);
  };

  const handleDevice3Open = () => {
    setOpenDevice3(true);
  };

  useEffect(() => {
    if (fam !== "" && variant !== "") {
      fetchIntelDeviceList(variant, fam);
    }
    if (fam2 !== "" && variant2 !== "") {
      fetchIntelDeviceList2(variant2, fam2);
    }
    if (fam3 !== "" && variant3 !== "") {
      fetchIntelDeviceList3(variant3, fam3);
    }
  }, [variant, variant2, variant3, fam, fam2, fam3]);

  return (
    <>
      <FilterContainer>
        <Container>
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
              <MenuItem value={"stratix4"}>Stratix 4 - Intel</MenuItem>
              <MenuItem value={"stratix5"}>Stratix 5 - Intel</MenuItem>
              <MenuItem value={"stratix10"}>Stratix 10 - Intel</MenuItem>
              <MenuItem value={"arria10"}>Arria 10 - Intel</MenuItem>
              <MenuItem value={"arria5"}>Arria 5 - Intel</MenuItem>
              <MenuItem value={"kintex7"}>Kintex 7 - Xilinx </MenuItem>
              <MenuItem value={"virtex7"}>Virtex 7 - Xilinx</MenuItem>
              <MenuItem value={"kintexultrascale"}>
                Kintex Ultrascale - Xilinx
              </MenuItem>
              <MenuItem value={"virtexultrascale"}>
                Virtex Ultrascale - Xilinx
              </MenuItem>
              <MenuItem value={"kintexultrascaleplus"}>
                kintexultrascaleplus - Xilinx
              </MenuItem>
              <MenuItem value={"virtexultrascaleplus"}>
                virtexultrascaleplus - Xilinx
              </MenuItem>
            </Select>
          </FormControl>
        </Container>
        {(fam === "kintex7" ||
          fam === "virtex7" ||
          fam === "kintexultrascale" ||
          fam === "virtexultrascale" ||
          fam === "kintexultrascaleplus" ||
          fam === "virtexultrascaleplus") && (
          <div>
            <Button className={classes.button} onClick={handleOpen}>
              Select a Device
            </Button>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-controlled-open-select-label">
                Devices
              </InputLabel>
              <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                open={openDevice}
                onClose={handleDeviceClose}
                onOpen={handleDeviceOpen}
                value={device}
                onChange={handleDeviceChange}
              >
                {devicelist.map((item) => (
                  <MenuItem key={item.device} value={item.device}>
                    {item.device}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        )}
        {fam === "arria5" ? (
          <FamilyContainer>
            <div>
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
            </div>
            <div>
              <Button className={classes.button} onClick={handleOpen}>
                Select a Device
              </Button>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-controlled-open-select-label">
                  Devices
                </InputLabel>
                <Select
                  labelId="demo-controlled-open-select-label"
                  id="demo-controlled-open-select"
                  open={openDevice}
                  onClose={handleDeviceClose}
                  onOpen={handleDeviceOpen}
                  value={device}
                  onChange={handleDeviceChange}
                >
                  {devicelist.map((item) => (
                    <MenuItem key={item.device} value={item.device}>
                      {item.device}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          </FamilyContainer>
        ) : fam === "arria10" ? (
          <FamilyContainer>
            <div>
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
            </div>
            <div>
              <Button className={classes.button} onClick={handleOpen}>
                Select a Device
              </Button>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-controlled-open-select-label">
                  Devices
                </InputLabel>
                <Select
                  labelId="demo-controlled-open-select-label"
                  id="demo-controlled-open-select"
                  open={openDevice}
                  onClose={handleDeviceClose}
                  onOpen={handleDeviceOpen}
                  value={device}
                  onChange={handleDeviceChange}
                >
                  {devicelist.map((item) => (
                    <MenuItem key={item.device} value={item.device}>
                      {item.device}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          </FamilyContainer>
        ) : fam === "stratix10" ? (
          <FamilyContainer>
            <div>
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
            </div>
            <div>
              <Button className={classes.button} onClick={handleOpen}>
                Select a Device
              </Button>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-controlled-open-select-label">
                  Devices
                </InputLabel>
                <Select
                  labelId="demo-controlled-open-select-label"
                  id="demo-controlled-open-select"
                  open={openDevice}
                  onClose={handleDeviceClose}
                  onOpen={handleDeviceOpen}
                  value={device}
                  onChange={handleDeviceChange}
                >
                  {devicelist.map((item) => (
                    <MenuItem key={item.device} value={item.device}>
                      {item.device}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          </FamilyContainer>
        ) : fam === "stratix4" ? (
          <FamilyContainer>
            <div>
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
            </div>
            <div>
              <Button className={classes.button} onClick={handleOpen}>
                Select a Device
              </Button>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-controlled-open-select-label">
                  Devices
                </InputLabel>
                <Select
                  labelId="demo-controlled-open-select-label"
                  id="demo-controlled-open-select"
                  open={openDevice}
                  onClose={handleDeviceClose}
                  onOpen={handleDeviceOpen}
                  value={device}
                  onChange={handleDeviceChange}
                >
                  {devicelist.map((item) => (
                    <MenuItem key={item.device} value={item.device}>
                      {item.device}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          </FamilyContainer>
        ) : (
          fam === "stratix5" && (
            <FamilyContainer>
              <div>
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
              </div>
              <div>
                <Button className={classes.button} onClick={handleOpen}>
                  Select a Device
                </Button>
                <FormControl className={classes.formControl}>
                  <InputLabel id="demo-controlled-open-select-label">
                    Devices
                  </InputLabel>
                  <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    open={openDevice}
                    onClose={handleDeviceClose}
                    onOpen={handleDeviceOpen}
                    value={device}
                    onChange={handleDeviceChange}
                  >
                    {devicelist.map((item) => (
                      <MenuItem key={item.device} value={item.device}>
                        {item.device}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
            </FamilyContainer>
          )
        )}
        <ButtonContainer>
          <Button
            color="primary"
            variant="contained"
            onClick={() => {
              setFam1Del(true);
            }}
          >
            Add a device
          </Button>
        </ButtonContainer>
      </FilterContainer>
      {fam1del && (
        <>
          <FilterContainer>
            <Container>
              <Button className={classes.button} onClick={handleOpen2}>
                Select a Family
              </Button>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-controlled-open-select-label">
                  Family
                </InputLabel>
                <Select
                  labelId="demo-controlled-open-select-label"
                  id="demo-controlled-open-select"
                  open={openfamily2}
                  onClose={handleFam2Close}
                  onOpen={handleFam2Open}
                  value={fam2}
                  onChange={handleFam2Change}
                >
                  <MenuItem value={"stratix4"}>Stratix 4 - Intel</MenuItem>
                  <MenuItem value={"stratix5"}>Stratix 5 - Intel</MenuItem>
                  <MenuItem value={"stratix10"}>Stratix 10 - Intel</MenuItem>
                  <MenuItem value={"arria10"}>Arria 10 - Intel</MenuItem>
                  <MenuItem value={"arria5"}>Arria 5 - Intel</MenuItem>
                  <MenuItem value={"kintex7"}>Kintex 7 - Xilinx </MenuItem>
                  <MenuItem value={"virtex7"}>Virtex 7 - Xilinx</MenuItem>
                  <MenuItem value={"kintexultrascale"}>
                    Kintex Ultrascale - Xilinx
                  </MenuItem>
                  <MenuItem value={"virtexultrascale"}>
                    Virtex Ultrascale - Xilinx
                  </MenuItem>
                  <MenuItem value={"kintexultrascaleplus"}>
                    kintexultrascaleplus - Xilinx
                  </MenuItem>
                  <MenuItem value={"virtexultrascaleplus"}>
                    virtexultrascaleplus - Xilinx
                  </MenuItem>
                </Select>
              </FormControl>
            </Container>
            {(fam2 === "kintex7" ||
              fam2 === "virtex7" ||
              fam2 === "kintexultrascale" ||
              fam2 === "virtexultrascale" ||
              fam2 === "kintexultrascaleplus" ||
              fam2 === "virtexultrascaleplus") && (
              <div>
                <Button className={classes.button} onClick={handleOpen2}>
                  Select a Device
                </Button>
                <FormControl className={classes.formControl}>
                  <InputLabel id="demo-controlled-open-select-label">
                    Devices
                  </InputLabel>
                  <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    open={openDevice2}
                    onClose={handleDevice2Close}
                    onOpen={handleDevice2Open}
                    value={device2}
                    onChange={handleDevice2Change}
                  >
                    {devicelist2.map((item) => (
                      <MenuItem key={item.device} value={item.device}>
                        {item.device}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
            )}
            {fam2 === "arria5" ? (
              <FamilyContainer>
                <div>
                  <Button className={classes.button} onClick={handleOpen2}>
                    Select a Variant
                  </Button>
                  <FormControl className={classes.formControl}>
                    <InputLabel id="demo-controlled-open-select-label">
                      Variants
                    </InputLabel>
                    <Select
                      labelId="demo-controlled-open-select-label"
                      id="demo-controlled-open-select"
                      open={open2}
                      onClose={handleClose2}
                      onOpen={handleOpen2}
                      value={variant2}
                      onChange={handleChange2}
                    >
                      <MenuItem value={"GX"}>GX</MenuItem>
                      <MenuItem value={"SX"}>SX</MenuItem>
                      <MenuItem value={"GT"}>GT</MenuItem>
                      <MenuItem value={"GZ"}>GZ</MenuItem>
                      <MenuItem value={"ST"}>ST</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div>
                  <Button className={classes.button} onClick={handleOpen2}>
                    Select a Device
                  </Button>
                  <FormControl className={classes.formControl}>
                    <InputLabel id="demo-controlled-open-select-label">
                      Devices
                    </InputLabel>
                    <Select
                      labelId="demo-controlled-open-select-label"
                      id="demo-controlled-open-select"
                      open={openDevice2}
                      onClose={handleDevice2Close}
                      onOpen={handleDevice2Open}
                      value={device2}
                      onChange={handleDevice2Change}
                    >
                      {devicelist2.map((item) => (
                        <MenuItem key={item.device} value={item.device}>
                          {item.device}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
              </FamilyContainer>
            ) : fam2 === "arria10" ? (
              <FamilyContainer>
                <div>
                  <Button className={classes.button} onClick={handleOpen2}>
                    Select a Variant
                  </Button>
                  <FormControl className={classes.formControl}>
                    <InputLabel id="demo-controlled-open-select-label">
                      Variants
                    </InputLabel>
                    <Select
                      labelId="demo-controlled-open-select-label"
                      id="demo-controlled-open-select"
                      open={open2}
                      onClose={handleClose2}
                      onOpen={handleOpen2}
                      value={variant2}
                      onChange={handleChange2}
                    >
                      <MenuItem value={"GX"}>GX</MenuItem>
                      <MenuItem value={"SX"}>SX</MenuItem>
                      <MenuItem value={"GT"}>GT</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div>
                  <Button className={classes.button} onClick={handleOpen2}>
                    Select a Device
                  </Button>
                  <FormControl className={classes.formControl}>
                    <InputLabel id="demo-controlled-open-select-label">
                      Devices
                    </InputLabel>
                    <Select
                      labelId="demo-controlled-open-select-label"
                      id="demo-controlled-open-select"
                      open={openDevice2}
                      onClose={handleDevice2Close}
                      onOpen={handleDevice2Open}
                      value={device2}
                      onChange={handleDevice2Change}
                    >
                      {devicelist2.map((item) => (
                        <MenuItem key={item.device} value={item.device}>
                          {item.device}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
              </FamilyContainer>
            ) : fam2 === "stratix10" ? (
              <FamilyContainer>
                <div>
                  <Button className={classes.button} onClick={handleOpen2}>
                    Select a Variant
                  </Button>
                  <FormControl className={classes.formControl}>
                    <InputLabel id="demo-controlled-open-select-label">
                      Variants
                    </InputLabel>
                    <Select
                      labelId="demo-controlled-open-select-label"
                      id="demo-controlled-open-select"
                      open={open2}
                      onClose={handleClose2}
                      onOpen={handleOpen2}
                      value={variant2}
                      onChange={handleChange2}
                    >
                      <MenuItem value={"GX"}>GX</MenuItem>
                      <MenuItem value={"SX"}>SX</MenuItem>
                      <MenuItem value={"TX"}>TX</MenuItem>
                      <MenuItem value={"MX"}>MX</MenuItem>
                      <MenuItem value={"DX"}>DX</MenuItem>
                      <MenuItem value={"NX"}>NX</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div>
                  <Button className={classes.button} onClick={handleOpen2}>
                    Select a Device
                  </Button>
                  <FormControl className={classes.formControl}>
                    <InputLabel id="demo-controlled-open-select-label">
                      Devices
                    </InputLabel>
                    <Select
                      labelId="demo-controlled-open-select-label"
                      id="demo-controlled-open-select"
                      open={openDevice2}
                      onClose={handleDevice2Close}
                      onOpen={handleDevice2Open}
                      value={device2}
                      onChange={handleDevice2Change}
                    >
                      {devicelist2.map((item) => (
                        <MenuItem key={item.device} value={item.device}>
                          {item.device}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
              </FamilyContainer>
            ) : fam2 === "stratix4" ? (
              <FamilyContainer>
                <div>
                  <Button className={classes.button} onClick={handleOpen2}>
                    Select a Variant
                  </Button>
                  <FormControl className={classes.formControl}>
                    <InputLabel id="demo-controlled-open-select-label">
                      Variants
                    </InputLabel>
                    <Select
                      labelId="demo-controlled-open-select-label"
                      id="demo-controlled-open-select"
                      open={open2}
                      onClose={handleClose2}
                      onOpen={handleOpen2}
                      value={variant2}
                      onChange={handleChange2}
                    >
                      <MenuItem value={"GT"}>GT</MenuItem>
                      <MenuItem value={"GX"}>GX</MenuItem>
                      <MenuItem value={"E"}>E</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div>
                  <Button className={classes.button} onClick={handleOpen2}>
                    Select a Device
                  </Button>
                  <FormControl className={classes.formControl}>
                    <InputLabel id="demo-controlled-open-select-label">
                      Devices
                    </InputLabel>
                    <Select
                      labelId="demo-controlled-open-select-label"
                      id="demo-controlled-open-select"
                      open={openDevice2}
                      onClose={handleDevice2Close}
                      onOpen={handleDevice2Open}
                      value={device2}
                      onChange={handleDevice2Change}
                    >
                      {devicelist2.map((item) => (
                        <MenuItem key={item.device} value={item.device}>
                          {item.device}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
              </FamilyContainer>
            ) : (
              fam2 === "stratix5" && (
                <FamilyContainer>
                  <div>
                    <Button className={classes.button} onClick={handleOpen2}>
                      Select a Variant
                    </Button>
                    <FormControl className={classes.formControl}>
                      <InputLabel id="demo-controlled-open-select-label">
                        Variants
                      </InputLabel>
                      <Select
                        labelId="demo-controlled-open-select-label"
                        id="demo-controlled-open-select"
                        open={open2}
                        onClose={handleClose2}
                        onOpen={handleOpen2}
                        value={variant2}
                        onChange={handleChange2}
                      >
                        <MenuItem value={"GX"}>GX</MenuItem>
                        <MenuItem value={"GS"}>GS</MenuItem>
                        <MenuItem value={"E"}>E</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <div>
                    <Button className={classes.button} onClick={handleOpen2}>
                      Select a Device
                    </Button>
                    <FormControl className={classes.formControl}>
                      <InputLabel id="demo-controlled-open-select-label">
                        Devices
                      </InputLabel>
                      <Select
                        labelId="demo-controlled-open-select-label"
                        id="demo-controlled-open-select"
                        open={openDevice2}
                        onClose={handleDevice2Close}
                        onOpen={handleDevice2Open}
                        value={device2}
                        onChange={handleDevice2Change}
                      >
                        {devicelist2.map((item) => (
                          <MenuItem key={item.device} value={item.device}>
                            {item.device}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </div>
                </FamilyContainer>
              )
            )}
            <ButtonContainer>
              <Button
                color="secondary"
                variant="contained"
                size="small"
                onClick={() => {
                  setFam2Del(true);
                }}
              >
                Add a device
              </Button>
              <Button
                variant="contained"
                color="primary"
                size="small"
                onClick={() => {
                  setFam1Del(false);
                  setVariant2("");
                  setDevice2("");
                }}
                startIcon={<DeleteIcon />}
              >
                Delete
              </Button>
            </ButtonContainer>
          </FilterContainer>
        </>
      )}

      {fam2del && (
        <>
          <FilterContainer>
            <Container>
              <Button className={classes.button} onClick={handleOpen3}>
                Select a Family
              </Button>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-controlled-open-select-label">
                  Family
                </InputLabel>
                <Select
                  labelId="demo-controlled-open-select-label"
                  id="demo-controlled-open-select"
                  open={openfamily3}
                  onClose={handleFam3Close}
                  onOpen={handleFam3Open}
                  value={fam3}
                  onChange={handleFam3Change}
                >
                  <MenuItem value={"stratix4"}>Stratix 4 - Intel</MenuItem>
                  <MenuItem value={"stratix5"}>Stratix 5 - Intel</MenuItem>
                  <MenuItem value={"stratix10"}>Stratix 10 - Intel</MenuItem>
                  <MenuItem value={"arria10"}>Arria 10 - Intel</MenuItem>
                  <MenuItem value={"arria5"}>Arria 5 - Intel</MenuItem>
                  <MenuItem value={"kintex7"}>Kintex 7 - Xilinx </MenuItem>
                  <MenuItem value={"virtex7"}>Virtex 7 - Xilinx</MenuItem>
                  <MenuItem value={"kintexultrascale"}>
                    Kintex Ultrascale - Xilinx
                  </MenuItem>
                  <MenuItem value={"virtexultrascale"}>
                    Virtex Ultrascale - Xilinx
                  </MenuItem>
                  <MenuItem value={"kintexultrascaleplus"}>
                    kintexultrascaleplus - Xilinx
                  </MenuItem>
                  <MenuItem value={"virtexultrascaleplus"}>
                    virtexultrascaleplus - Xilinx
                  </MenuItem>
                </Select>
              </FormControl>
            </Container>
            {(fam3 === "kintex7" ||
              fam3 === "virtex7" ||
              fam3 === "kintexultrascale" ||
              fam3 === "virtexultrascale" ||
              fam3 === "kintexultrascaleplus" ||
              fam3 === "virtexultrascaleplus") && (
              <div>
                <Button className={classes.button} onClick={handleOpen2}>
                  Select a Device
                </Button>
                <FormControl className={classes.formControl}>
                  <InputLabel id="demo-controlled-open-select-label">
                    Devices
                  </InputLabel>
                  <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    open={openDevice3}
                    onClose={handleDevice3Close}
                    onOpen={handleDevice3Open}
                    value={device3}
                    onChange={handleDevice3Change}
                  >
                    {devicelist3.map((item) => (
                      <MenuItem key={item.device} value={item.device}>
                        {item.device}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
            )}
            {fam3 === "arria5" ? (
              <FamilyContainer>
                <div>
                  <Button className={classes.button} onClick={handleOpen3}>
                    Select a Variant
                  </Button>
                  <FormControl className={classes.formControl}>
                    <InputLabel id="demo-controlled-open-select-label">
                      Variants
                    </InputLabel>
                    <Select
                      labelId="demo-controlled-open-select-label"
                      id="demo-controlled-open-select"
                      open={open3}
                      onClose={handleClose3}
                      onOpen={handleOpen3}
                      value={variant3}
                      onChange={handleChange3}
                    >
                      <MenuItem value={"GX"}>GX</MenuItem>
                      <MenuItem value={"SX"}>SX</MenuItem>
                      <MenuItem value={"GT"}>GT</MenuItem>
                      <MenuItem value={"GZ"}>GZ</MenuItem>
                      <MenuItem value={"ST"}>ST</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div>
                  <Button className={classes.button} onClick={handleOpen3}>
                    Select a Device
                  </Button>
                  <FormControl className={classes.formControl}>
                    <InputLabel id="demo-controlled-open-select-label">
                      Devices
                    </InputLabel>
                    <Select
                      labelId="demo-controlled-open-select-label"
                      id="demo-controlled-open-select"
                      open={openDevice3}
                      onClose={handleDevice3Close}
                      onOpen={handleDevice3Open}
                      value={device3}
                      onChange={handleDevice3Change}
                    >
                      {devicelist3.map((item) => (
                        <MenuItem value={item.device} key={item.device}>
                          {item.device}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
              </FamilyContainer>
            ) : fam3 === "arria10" ? (
              <FamilyContainer>
                <div>
                  <Button className={classes.button} onClick={handleOpen3}>
                    Select a Variant
                  </Button>
                  <FormControl className={classes.formControl}>
                    <InputLabel id="demo-controlled-open-select-label">
                      Variants
                    </InputLabel>
                    <Select
                      labelId="demo-controlled-open-select-label"
                      id="demo-controlled-open-select"
                      open={open3}
                      onClose={handleClose3}
                      onOpen={handleOpen3}
                      value={variant3}
                      onChange={handleChange3}
                    >
                      <MenuItem value={"GX"}>GX</MenuItem>
                      <MenuItem value={"SX"}>SX</MenuItem>
                      <MenuItem value={"GT"}>GT</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div>
                  <Button className={classes.button} onClick={handleOpen2}>
                    Select a Device
                  </Button>
                  <FormControl className={classes.formControl}>
                    <InputLabel id="demo-controlled-open-select-label">
                      Devices
                    </InputLabel>
                    <Select
                      labelId="demo-controlled-open-select-label"
                      id="demo-controlled-open-select"
                      open={openDevice3}
                      onClose={handleDevice3Close}
                      onOpen={handleDevice3Open}
                      value={device3}
                      onChange={handleDevice3Change}
                    >
                      {devicelist3.map((item) => (
                        <MenuItem value={item.device} key={item.device}>
                          {item.device}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
              </FamilyContainer>
            ) : fam3 === "stratix10" ? (
              <FamilyContainer>
                <div>
                  <Button className={classes.button} onClick={handleOpen3}>
                    Select a Variant
                  </Button>
                  <FormControl className={classes.formControl}>
                    <InputLabel id="demo-controlled-open-select-label">
                      Variants
                    </InputLabel>
                    <Select
                      labelId="demo-controlled-open-select-label"
                      id="demo-controlled-open-select"
                      open={open3}
                      onClose={handleClose3}
                      onOpen={handleOpen3}
                      value={variant3}
                      onChange={handleChange3}
                    >
                      <MenuItem value={"GX"}>GX</MenuItem>
                      <MenuItem value={"SX"}>SX</MenuItem>
                      <MenuItem value={"TX"}>TX</MenuItem>
                      <MenuItem value={"MX"}>MX</MenuItem>
                      <MenuItem value={"DX"}>DX</MenuItem>
                      <MenuItem value={"NX"}>NX</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div>
                  <Button className={classes.button} onClick={handleOpen2}>
                    Select a Device
                  </Button>
                  <FormControl className={classes.formControl}>
                    <InputLabel id="demo-controlled-open-select-label">
                      Devices
                    </InputLabel>
                    <Select
                      labelId="demo-controlled-open-select-label"
                      id="demo-controlled-open-select"
                      open={openDevice3}
                      onClose={handleDevice3Close}
                      onOpen={handleDevice3Open}
                      value={device3}
                      onChange={handleDevice3Change}
                    >
                      {devicelist3.map((item) => (
                        <MenuItem value={item.device} key={item.device}>
                          {item.device}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
              </FamilyContainer>
            ) : fam3 === "stratix4" ? (
              <FamilyContainer>
                <div>
                  <Button className={classes.button} onClick={handleOpen3}>
                    Select a Variant
                  </Button>
                  <FormControl className={classes.formControl}>
                    <InputLabel id="demo-controlled-open-select-label">
                      Variants
                    </InputLabel>
                    <Select
                      labelId="demo-controlled-open-select-label"
                      id="demo-controlled-open-select"
                      open={open3}
                      onClose={handleClose3}
                      onOpen={handleOpen3}
                      value={variant3}
                      onChange={handleChange3}
                    >
                      <MenuItem value={"GT"}>GT</MenuItem>
                      <MenuItem value={"GX"}>GX</MenuItem>
                      <MenuItem value={"E"}>E</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div>
                  <Button className={classes.button} onClick={handleOpen3}>
                    Select a Device
                  </Button>
                  <FormControl className={classes.formControl}>
                    <InputLabel id="demo-controlled-open-select-label">
                      Devices
                    </InputLabel>
                    <Select
                      labelId="demo-controlled-open-select-label"
                      id="demo-controlled-open-select"
                      open={openDevice3}
                      onClose={handleDevice3Close}
                      onOpen={handleDevice3Open}
                      value={device3}
                      onChange={handleDevice3Change}
                    >
                      {devicelist3.map((item) => (
                        <MenuItem value={item.device} key={item.device}>
                          {item.device}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
              </FamilyContainer>
            ) : (
              fam3 === "stratix5" && (
                <FamilyContainer>
                  <div>
                    <Button className={classes.button} onClick={handleOpen3}>
                      Select a Variant
                    </Button>
                    <FormControl className={classes.formControl}>
                      <InputLabel id="demo-controlled-open-select-label">
                        Variants
                      </InputLabel>
                      <Select
                        labelId="demo-controlled-open-select-label"
                        id="demo-controlled-open-select"
                        open={open3}
                        onClose={handleClose3}
                        onOpen={handleOpen3}
                        value={variant3}
                        onChange={handleChange3}
                      >
                        <MenuItem value={"GX"}>GX</MenuItem>
                        <MenuItem value={"GS"}>GS</MenuItem>
                        <MenuItem value={"E"}>E</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <div>
                    <Button className={classes.button} onClick={handleOpen2}>
                      Select a Device
                    </Button>
                    <FormControl className={classes.formControl}>
                      <InputLabel id="demo-controlled-open-select-label">
                        Devices
                      </InputLabel>
                      <Select
                        labelId="demo-controlled-open-select-label"
                        id="demo-controlled-open-select"
                        open={openDevice3}
                        onClose={handleDevice3Close}
                        onOpen={handleDevice3Open}
                        value={device3}
                        onChange={handleDevice3Change}
                      >
                        {devicelist3.map((item) => (
                          <MenuItem value={item.device} key={item.device}>
                            {item.device}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </div>
                </FamilyContainer>
              )
            )}
            <ButtonContainer>
              <Button
                variant="contained"
                color="primary"
                size="small"
                onClick={() => {
                  setDevice3("");
                  setVariant3("");
                  setFam2Del(false);
                }}
                startIcon={<DeleteIcon />}
              >
                Delete
              </Button>
            </ButtonContainer>
          </FilterContainer>
        </>
      )}
      <ComparisonLogic
        varia={variant}
        varia2={variant2}
        varia3={variant3}
        family={fam}
        family2={fam2}
        family3={fam3}
        devices={device}
        devices2={device2}
        devices3={device3}
      />
    </>
  );
}
