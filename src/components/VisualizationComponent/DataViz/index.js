import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import axios from "axios";
import {
  Container,
  FilterContainer,
  MainFilterContainer,
  SpecificationMainContainer,
  SecondFamilyFilterContainer,
  ThirdFamilyFilterContainer,
  SecondThirdFamilyMainContainer,
} from "./DataViz.styled";

import CustomLegend from "./CustomLegend";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";

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

function DataViz() {
  const classes = useStyles();
  const [fam, setFam] = React.useState("");
  const [spec, setSpec] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [openspec, setOpenspec] = React.useState(false);
  const [fam1, setFam1] = React.useState("");
  const [open1, setOpen1] = React.useState(false);
  const [fam2, setFam2] = React.useState("");
  const [open2, setOpen2] = React.useState(false);
  const [fam2del, setFam2Del] = useState(false);
  const [fam1del, setFam1Del] = useState(false);
  const [openspec1, setOpenspec1] = React.useState(false);
  const [spec1, setSpec1] = React.useState("");

  const clearState = () => {
    setSpec("");
  };

  // First Filter
  const handleChange = (event) => {
    setFam(event.target.value);
    clearState();
    setFam1Del(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  // functions for specifications filter
  const handleSpecChange = (event) => {
    setSpec(event.target.value);
  };

  const handleSpecClose = () => {
    setOpenspec(false);
  };

  const handleSpecOpen = () => {
    setOpenspec(true);
  };

  // functions for xilinx specifications filter
  const handleSpecChange1 = (event) => {
    setSpec1(event.target.value);
  };

  const handleSpecClose1 = () => {
    setOpenspec1(false);
  };

  const handleSpecOpen1 = () => {
    setOpenspec1(true);
  };

  // Second Filter

  const handleChange1 = (event) => {
    setFam1(event.target.value);
    setFam2Del(true);
    if (
      (fam === "stratix4" ||
        fam === "stratix5" ||
        fam === "stratix10" ||
        fam === "arria5" ||
        fam === "arria10") &&
      (event.target.value === "virtex7" ||
        event.target.value === "kintex7" ||
        event.target.value === "virtexultrascale" ||
        event.target.value === "kintexultrascale" ||
        event.target.value === "kintexultrascaleplus" ||
        event.target.value === "virtexultrascaleplus")
    ) {
      setFam2Del(false);
      setFam2("");
    }

    if (
      (fam === "virtex7" ||
        fam === "kintex7" ||
        fam === "virtexultrascale" ||
        fam === "kintexultrascale" ||
        fam === "kintexultrascaleplus" ||
        fam === "virtexultrascaleplus") &&
      (event.target.value === "stratix4" ||
        event.target.value === "stratix5" ||
        event.target.value === "stratix10" ||
        event.target.value === "arria5" ||
        event.target.value === "arria10")
    ) {
      setFam2Del(false);
      setFam2("");
    }
  };

  const handleClose1 = () => {
    setOpen1(false);
  };

  const handleOpen1 = () => {
    setOpen1(true);
  };

  //Third Filter
  const handleChange2 = (event) => {
    setFam2(event.target.value);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  const handleOpen2 = () => {
    setOpen2(true);
  };

  const [value, setValue] = useState([]);
  const [value1, setValue1] = useState([]);
  const [value2, setValue2] = useState([]);

  const fetchVizData = async (fam) => {
    const { data } = await axios.get("http://localhost:4000/vis", {
      params: {
        family: fam,
      },
    });
    setValue(data);
  };

  const fetchVizData1 = async (fam1) => {
    const { data } = await axios.get("http://localhost:4000/vis", {
      params: {
        family: fam1,
      },
    });

    setValue1(data);
  };

  const fetchVizData2 = async (fam2) => {
    const { data } = await axios.get("http://localhost:4000/vis", {
      params: {
        family: fam2,
      },
    });
    setValue2(data);
  };

  // let FamManufacturer;
  // if (fam) {
  //   for (let i = 0; i < 1; i++) {
  //     FamManufacturer = value[0];
  //   }
  // }

  useEffect(() => {
    fetchVizData(fam);

    fetchVizData1(fam1);

    fetchVizData2(fam2);
  }, [fam, fam1, fam2]);

  const result = [...new Set([...value, ...value1, ...value2])];

  let vizdata = result.map((items) => {
    return items[spec];
  });

  // Replacing undefined with 0
  let valofIndex;
  for (let k = 0; k < vizdata.length; k++) {
    valofIndex = vizdata.indexOf(undefined);
    if (valofIndex !== -1) {
      vizdata[valofIndex] = 0;
    }
  }

  const vizdevices = result.map((items) => {
    return items.device;
  });

  var customizedColors = [];
  for (let i = 0; i < value.length; i++) {
    customizedColors.push("#545454");
  }
  for (let i = 0; i < value1.length; i++) {
    customizedColors.push("#77B6EA");
  }
  for (let i = 0; i < value2.length; i++) {
    customizedColors.push("#1C5BF0");
  }

  // Intel vs Xilinx

  if (
    ((fam === "stratix4" ||
      fam === "stratix5" ||
      fam === "stratix10" ||
      fam === "arria5" ||
      fam === "arria10") &&
      (fam1 === "kintex7" ||
        fam1 === "virtex7" ||
        fam1 === "virtexultrascale" ||
        fam1 === "kintexultrascale" ||
        fam1 === "kintexultrascaleplus" ||
        fam1 === "virtexultrascaleplus")) ||
    ((fam1 === "stratix4" ||
      fam1 === "stratix5" ||
      fam1 === "stratix10" ||
      fam1 === "arria5" ||
      fam1 === "arria10") &&
      (fam === "kintex7" ||
        fam === "virtex7" ||
        fam === "virtexultrascale" ||
        fam === "kintexultrascale" ||
        fam === "kintexultrascaleplus" ||
        fam === "virtexultrascaleplus"))
  ) {
    let IntelData = value.map((items) => {
      return items[spec];
    });

    let XilinxData = value1.map((items) => {
      return items[spec1];
    });

    vizdata = [...IntelData, ...XilinxData];
  }

  //Specifications List
  let Fam1List = [];
  value1.map((item) => (Fam1List = item));
  let Fam1Keys = Object.keys(Fam1List);
  let fam1index;
  const RemoveKeys = [
    "family",
    "series",
    "device",
    "_id",
    "manufacturer",
    "variant",
  ];
  RemoveKeys.forEach((item) => {
    fam1index = Fam1Keys.indexOf(item);
    if (fam1index > -1) {
      Fam1Keys.splice(fam1index, 1);
    }
  });

  let FamList = [];
  value.map((item) => (FamList = item));
  let FamKeys = Object.keys(FamList);
  let famindex;
  RemoveKeys.forEach((item) => {
    famindex = FamKeys.indexOf(item);
    if (famindex > -1) {
      FamKeys.splice(famindex, 1);
    }
  });

  let Fam2List = [];
  value2.map((item) => (Fam2List = item));
  let Fam2Keys = Object.keys(Fam2List);

  let commonKeys;
  let difference;
  let mostCommonKeys;

  if (fam && fam1) {
    commonKeys = FamKeys.filter((x) => Fam1Keys.includes(x));

    difference = FamKeys.filter((x) => !Fam1Keys.includes(x)).concat(
      Fam1Keys.filter((x) => !FamKeys.includes(x))
    );
    mostCommonKeys = commonKeys.concat(difference);
    RemoveKeys.forEach((item) => {
      famindex = mostCommonKeys.indexOf(item);
      if (famindex > -1) {
        mostCommonKeys.splice(famindex, 1);
      }
    });
  }

  let common13Keys;
  let difference13;
  let mostCommon13Keys;
  if (fam && fam2) {
    common13Keys = FamKeys.filter((x) => Fam2Keys.includes(x));

    difference13 = FamKeys.filter((x) => !Fam2Keys.includes(x)).concat(
      Fam2Keys.filter((x) => !FamKeys.includes(x))
    );
    mostCommon13Keys = common13Keys.concat(difference13);
    RemoveKeys.forEach((item) => {
      famindex = mostCommon13Keys.indexOf(item);
      if (famindex > -1) {
        mostCommon13Keys.splice(famindex, 1);
      }
    });
  }

  let differenceOfThree;
  let commonOfThreeKeys;
  let finalDifferenceOfThree;
  if (fam && fam1 && fam2) {
    commonOfThreeKeys = commonKeys.filter((x) => Fam2Keys.includes(x));
    differenceOfThree = Fam2Keys.filter((x) => !difference.includes(x));
    finalDifferenceOfThree = differenceOfThree.filter(
      (x) => !commonOfThreeKeys.includes(x)
    );
    RemoveKeys.forEach((item) => {
      famindex = finalDifferenceOfThree.indexOf(item);
      if (famindex > -1) {
        finalDifferenceOfThree.splice(famindex, 1);
      }
    });
  }
  return (
    <>
      <MainFilterContainer>
        <FilterContainer>
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
              open={open}
              onClose={handleClose}
              onOpen={handleOpen}
              value={fam}
              onChange={handleChange}
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
        </FilterContainer>

        <SpecificationMainContainer>
          {fam && (
            <div>
              <Button className={classes.button} onClick={handleOpen}>
                Select a Specification
              </Button>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-controlled-open-select-label">
                  Specifications
                </InputLabel>
                <Select
                  labelId="demo-controlled-open-select-label"
                  id="demo-controlled-open-select"
                  open={openspec}
                  onClose={handleSpecClose}
                  onOpen={handleSpecOpen}
                  value={spec}
                  onChange={handleSpecChange}
                >
                  {fam &&
                    !fam1 &&
                    !fam2 &&
                    FamKeys.map((item) => (
                      <MenuItem value={item}>{item}</MenuItem>
                    ))}
                  {fam &&
                    fam1 &&
                    mostCommonKeys.map((item) => (
                      <MenuItem value={item}>{item}</MenuItem>
                    ))}
                  {fam &&
                    fam1 &&
                    fam2 &&
                    finalDifferenceOfThree.map((item) => (
                      <MenuItem value={item}>{item}</MenuItem>
                    ))}
                  {fam &&
                    fam2 &&
                    !fam1 &&
                    mostCommon13Keys.map((item) => (
                      <MenuItem value={item}>{item}</MenuItem>
                    ))}
                </Select>
              </FormControl>
            </div>
          )}
        </SpecificationMainContainer>
      </MainFilterContainer>
      <SecondThirdFamilyMainContainer>
        {fam1del && (
          <SecondFamilyFilterContainer>
            <Button className={classes.button} onClick={handleOpen1}>
              Select a 2nd Family
            </Button>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-controlled-open-select-label">
                Second Family
              </InputLabel>

              <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                open={open1}
                onClose={handleClose1}
                onOpen={handleOpen1}
                value={fam1}
                onChange={handleChange1}
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

            <Button
              variant="contained"
              color="primary"
              size="small"
              onClick={() => {
                setFam1Del(false);
                setFam1("");
                setSpec1("");
              }}
              startIcon={<DeleteIcon />}
            >
              Delete
            </Button>
          </SecondFamilyFilterContainer>
        )}

        {fam2del &&
          (fam === "stratix4" ||
            fam === "stratix5" ||
            fam === "stratix10" ||
            fam === "arria5" ||
            fam === "arria10") &&
          (fam1 === "stratix4" ||
            fam1 === "stratix5" ||
            fam1 === "stratix10" ||
            fam1 === "arria5" ||
            fam1 === "arria10" ||
            fam2 === "stratix4" ||
            fam2 === "stratix5" ||
            fam2 === "stratix10" ||
            fam2 === "arria5" ||
            fam2 === "arria10") && (
            <ThirdFamilyFilterContainer>
              <Button className={classes.button} onClick={handleOpen2}>
                Select a 3rd Family
              </Button>

              <FormControl className={classes.formControl}>
                <InputLabel id="demo-controlled-open-select-label">
                  3rd Family
                </InputLabel>

                <Select
                  labelId="demo-controlled-open-select-label"
                  id="demo-controlled-open-select"
                  open={open2}
                  onClose={handleClose2}
                  onOpen={handleOpen2}
                  value={fam2}
                  onChange={handleChange2}
                >
                  <MenuItem value={"stratix4"}>Stratix 4 - Intel</MenuItem>
                  <MenuItem value={"stratix5"}>Stratix 5 - Intel</MenuItem>
                  <MenuItem value={"stratix10"}>Stratix 10 - Intel</MenuItem>
                  <MenuItem value={"arria10"}>Arria 10 - Intel</MenuItem>
                  <MenuItem value={"arria5"}>Arria 5 - Intel</MenuItem>
                </Select>
              </FormControl>
              <Button
                variant="contained"
                color="primary"
                size="small"
                onClick={() => {
                  setFam2Del(false);
                  setFam2("");
                }}
                startIcon={<DeleteIcon />}
              >
                Delete
              </Button>
            </ThirdFamilyFilterContainer>
          )}

        {fam2del &&
          (fam === "kintex7" ||
            fam === "virtex7" ||
            fam === "virtexultrascale" ||
            fam === "kintexultrascale" ||
            fam === "kintexultrascaleplus" ||
            fam === "virtexultrascaleplus") &&
          (fam1 === "kintex7" ||
            fam1 === "virtex7" ||
            fam1 === "virtexultrascale" ||
            fam1 === "kintexultrascale" ||
            fam1 === "kintexultrascaleplus" ||
            fam1 === "virtexultrascaleplus" ||
            fam2 === "kintex7" ||
            fam2 === "virtex7" ||
            fam2 === "virtexultrascale" ||
            fam2 === "kintexultrascale" ||
            fam2 === "kintexultrascaleplus" ||
            fam2 === "virtexultrascaleplus") && (
            <ThirdFamilyFilterContainer>
              <Button className={classes.button} onClick={handleOpen2}>
                Select a 3rd Family
              </Button>

              <FormControl className={classes.formControl}>
                <InputLabel id="demo-controlled-open-select-label">
                  3rd Family
                </InputLabel>

                <Select
                  labelId="demo-controlled-open-select-label"
                  id="demo-controlled-open-select"
                  open={open2}
                  onClose={handleClose2}
                  onOpen={handleOpen2}
                  value={fam2}
                  onChange={handleChange2}
                >
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
              <Button
                variant="contained"
                color="primary"
                size="small"
                onClick={() => {
                  setFam2Del(false);
                  setFam2("");
                }}
                startIcon={<DeleteIcon />}
              >
                Delete
              </Button>
            </ThirdFamilyFilterContainer>
          )}

        {(fam === "stratix4" ||
          fam === "stratix5" ||
          fam === "stratix10" ||
          fam === "arria5" ||
          fam === "arria10") &&
          (fam1 === "kintex7" ||
            fam1 === "virtex7" ||
            fam1 === "virtexultrascale" ||
            fam1 === "kintexultrascale" ||
            fam1 === "kintexultrascaleplus" ||
            fam1 === "virtexultrascaleplus") && (
            <div>
              <Button className={classes.button} onClick={handleSpecOpen1}>
                Select a Specification
              </Button>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-controlled-open-select-label">
                  Specifications
                </InputLabel>
                <Select
                  labelId="demo-controlled-open-select-label"
                  id="demo-controlled-open-select"
                  open={openspec1}
                  onClose={handleSpecClose1}
                  onOpen={handleSpecOpen1}
                  value={spec1}
                  onChange={handleSpecChange1}
                >
                  {Fam1Keys.map((item) => (
                    <MenuItem value={item}>{item}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          )}
        {(fam1 === "stratix4" ||
          fam1 === "stratix5" ||
          fam1 === "stratix10" ||
          fam1 === "arria5" ||
          fam1 === "arria10") &&
          (fam === "kintex7" ||
            fam === "virtex7" ||
            fam === "virtexultrascale" ||
            fam === "kintexultrascale" ||
            fam === "kintexultrascaleplus" ||
            fam === "virtexultrascaleplus") && (
            <div>
              <Button className={classes.button} onClick={handleSpecOpen1}>
                Select a Specification
              </Button>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-controlled-open-select-label">
                  Specifications
                </InputLabel>
                <Select
                  labelId="demo-controlled-open-select-label"
                  id="demo-controlled-open-select"
                  open={openspec1}
                  onClose={handleSpecClose1}
                  onOpen={handleSpecOpen1}
                  value={spec1}
                  onChange={handleSpecChange1}
                >
                  {Fam1Keys.map((item) => (
                    <MenuItem value={item}>{item}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          )}
      </SecondThirdFamilyMainContainer>

      <FilterContainer>
        {(fam === "stratix4" ||
          fam === "stratix5" ||
          fam === "stratix10" ||
          fam === "arria5" ||
          fam === "arria10") &&
          spec &&
          !spec1 &&
          !fam1 &&
          !fam2 && (
            <Container>
              <CustomLegend
                fam={fam}
                famColor="#545454"
                fam1={fam1}
                fam1Color="#77B6EA"
                fam2={fam2}
                fam2Color="#1C5BF0"
              />
              <Chart
                options={{
                  chart: {
                    type: "bar",
                    height: "auto",
                    dropShadow: {
                      enabled: true,
                      color: "#000",
                      top: 18,
                      left: 7,
                      blur: 10,
                      opacity: 0.2,
                    },
                    toolbar: {
                      show: true,
                    },
                  },
                  plotOptions: {
                    bar: {
                      columnWidth: "45%",
                      distributed: true,
                    },
                  },
                  xaxis: {
                    categories: vizdevices,
                    title: {
                      text: "Devices",
                      style: {
                        fontSize: "15px",
                      },
                    },
                    labels: {
                      show: true,
                    },
                  },
                  yaxis: {
                    title: {
                      text: spec,
                    },
                    labels: {
                      formatter: function (val) {
                        return val.toFixed(0);
                      },
                    },
                  },
                  colors: customizedColors,
                  dataLabels: {
                    enabled: false,
                  },
                  stroke: {
                    curve: "smooth",
                  },
                  labels: {
                    style: {
                      fontSize: "18px",
                    },
                  },

                  markers: {
                    size: 1,
                  },

                  legend: {
                    show: false,
                    position: "top",
                    horizontalAlign: "center",
                    floating: true,
                    offsetY: 10,
                    offsetX: 0,
                  },
                }}
                series={[{ data: vizdata }]}
                type="bar"
                width="1300"
              />
            </Container>
          )}

        {(fam || fam1 || fam2) &&
          spec &&
          !spec1 &&
          (fam === "stratix4" ||
            fam === "stratix5" ||
            fam === "stratix10" ||
            fam === "arria5" ||
            fam === "arria10") &&
          (fam1 === "stratix4" ||
            fam1 === "stratix5" ||
            fam1 === "stratix10" ||
            fam1 === "arria5" ||
            fam1 === "arria10" ||
            fam2 === "stratix4" ||
            fam2 === "stratix5" ||
            fam2 === "stratix10" ||
            fam2 === "arria5" ||
            fam2 === "arria10") && (
            <Container>
              <CustomLegend
                fam={fam}
                famColor="#545454"
                fam1={fam1}
                fam1Color="#77B6EA"
                fam2={fam2}
                fam2Color="#1C5BF0"
              />
              <Chart
                options={{
                  chart: {
                    type: "bar",
                    height: "auto",
                    dropShadow: {
                      enabled: true,
                      color: "#000",
                      top: 18,
                      left: 7,
                      blur: 10,
                      opacity: 0.2,
                    },
                    toolbar: {
                      show: true,
                    },
                  },
                  plotOptions: {
                    bar: {
                      columnWidth: "45%",
                      distributed: true,
                    },
                  },
                  xaxis: {
                    categories: vizdevices,
                    title: {
                      text: "Devices",
                      style: {
                        fontSize: "15px",
                      },
                    },
                    labels: {
                      show: true,
                    },
                  },
                  yaxis: {
                    title: {
                      text: spec,
                    },
                    labels: {
                      formatter: function (val) {
                        return val.toFixed(0);
                      },
                    },
                  },
                  colors: customizedColors,
                  dataLabels: {
                    enabled: false,
                  },
                  stroke: {
                    curve: "smooth",
                  },
                  labels: {
                    style: {
                      fontSize: "18px",
                    },
                  },

                  markers: {
                    size: 1,
                  },

                  legend: {
                    show: false,
                    position: "top",
                    horizontalAlign: "center",
                    floating: true,
                    offsetY: 10,
                    offsetX: 0,
                  },
                }}
                series={[{ data: vizdata }]}
                type="bar"
                width="1300"
              />
            </Container>
          )}
      </FilterContainer>
      <FilterContainer>
        {(fam || fam1 || fam2) &&
          spec &&
          !spec1 &&
          (fam === "kintex7" ||
            fam === "virtex7" ||
            fam === "virtexultrascale" ||
            fam === "kintexultrascale" ||
            fam === "kintexultrascaleplus" ||
            fam === "virtexultrascaleplus" ||
            fam1 === "kintex7" ||
            fam1 === "virtex7" ||
            fam1 === "virtexultrascale" ||
            fam1 === "kintexultrascale" ||
            fam1 === "kintexultrascaleplus" ||
            fam1 === "virtexultrascaleplus" ||
            fam2 === "kintex7" ||
            fam2 === "virtex7" ||
            fam2 === "virtexultrascale" ||
            fam2 === "kintexultrascale" ||
            fam2 === "kintexultrascaleplus" ||
            fam2 === "virtexultrascaleplus") && (
            <Container>
              <CustomLegend
                fam={fam}
                famColor="#545454"
                fam1={fam1}
                fam1Color="#77B6EA"
                fam2={fam2}
                fam2Color="#1C5BF0"
              />
              <Chart
                options={{
                  chart: {
                    type: "bar",
                    height: "auto",
                    dropShadow: {
                      enabled: true,
                      color: "#000",
                      top: 18,
                      left: 7,
                      blur: 10,
                      opacity: 0.2,
                    },
                    toolbar: {
                      show: true,
                    },
                  },
                  plotOptions: {
                    bar: {
                      columnWidth: "45%",
                      distributed: true,
                    },
                  },
                  xaxis: {
                    categories: vizdevices,
                    title: {
                      text: "Devices",
                      style: {
                        fontSize: "15px",
                      },
                    },
                    labels: {
                      show: true,
                    },
                  },
                  yaxis: {
                    title: {
                      text: spec,
                    },
                    labels: {
                      formatter: function (val) {
                        return val.toFixed(0);
                      },
                    },
                  },
                  colors: customizedColors,
                  dataLabels: {
                    enabled: false,
                  },
                  stroke: {
                    curve: "smooth",
                  },
                  labels: {
                    style: {
                      fontSize: "18px",
                    },
                  },

                  markers: {
                    size: 1,
                  },

                  legend: {
                    show: false,
                    position: "top",
                    horizontalAlign: "center",
                    floating: true,
                    offsetY: 10,
                    offsetX: 0,
                  },
                }}
                series={[{ data: vizdata }]}
                type="bar"
                width="1300"
              />
            </Container>
          )}
      </FilterContainer>

      <FilterContainer>
        {fam && fam1 && spec1 && spec && (
          <Container>
            <CustomLegend
              fam={fam}
              famColor="#545454"
              fam1={fam1}
              fam1Color="#77B6EA"
            />
            <Chart
              options={{
                chart: {
                  type: "bar",
                  height: "auto",
                  dropShadow: {
                    enabled: true,
                    color: "#000",
                    top: 18,
                    left: 7,
                    blur: 10,
                    opacity: 0.2,
                  },
                  toolbar: {
                    show: true,
                  },
                },
                plotOptions: {
                  bar: {
                    columnWidth: "45%",
                    distributed: true,
                  },
                },
                xaxis: {
                  categories: vizdevices,
                  title: {
                    text: "Devices",
                    style: {
                      fontSize: "15px",
                    },
                  },
                  labels: {
                    show: true,
                  },
                },
                yaxis: [
                  {
                    title: {
                      text: spec,
                    },
                    labels: {
                      formatter: function (val) {
                        return val.toFixed(0);
                      },
                    },
                  },
                  {
                    opposite: true,
                    title: {
                      text: spec1,
                      style: {
                        color: "#77B6EA",
                      },
                    },
                    labels: {
                      formatter: function (val) {
                        return val.toFixed(0);
                      },
                      style: {
                        colors: "#77B6EA",
                      },
                    },
                    axisBorder: {
                      show: true,
                      color: "#77B6EA",
                    },
                  },
                ],
                colors: customizedColors,
                dataLabels: {
                  enabled: false,
                },
                stroke: {
                  curve: "smooth",
                },
                labels: {
                  style: {
                    fontSize: "18px",
                  },
                },

                markers: {
                  size: 1,
                },

                legend: {
                  show: false,
                  position: "top",
                  horizontalAlign: "center",
                  floating: true,
                  offsetY: 10,
                  offsetX: 0,
                },
              }}
              series={[{ data: vizdata }]}
              type="bar"
              width="1300"
            />
          </Container>
        )}
      </FilterContainer>
    </>
  );
}

export default DataViz;
