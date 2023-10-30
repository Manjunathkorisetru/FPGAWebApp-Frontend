import React, { useEffect, useState } from "react";
import axios from "axios";
import Stratix10GX from "./Stratix10/Stratix10GX";
import Stratix10SX from "./Stratix10/Stratix10SX";
import Stratix10MX from "./Stratix10/Stratix10MX";
import Stratix10TX from "./Stratix10/Stratix10TX";
import Stratix10DX from "./Stratix10/Stratix10DX";
import Stratix10NX from "./Stratix10/Stratix10NX";

import Arria10 from "./Arria10";
import Arria5 from "./Arria5";

import Stratix4GX from "./Stratix4/Stratix4GX";
import Stratix4GT from "./Stratix4/Stratix4GT";
import Stratix4E from "./Stratix4/Stratix4E";

import Stratix5GX from "./Stratix5/Stratix5GX";
import Stratix5GS from "./Stratix5/Stratix5GS";
import Stratix5E from "./Stratix5/Stratix5E";

function TableFpga(props) {
  const [posts, setPosts] = useState([]);
  const variant = props.varia;
  const fam = props.family;
  const manufacturer = props.manufacturer;

  const fetchPostList = async (variant, fam, manufacturer) => {
    const { data } = await axios.get("http://localhost:4000/fpga", {
      params: {
        variant: variant,
        family: fam,
        manufacturer: manufacturer,
      },
    });

    setPosts(data);
  };

  useEffect(() => {
    fetchPostList(variant, fam, manufacturer);
  }, [variant, fam, manufacturer]);

  let FamList = [];
  posts.map((item) => (FamList = item));
  let FamKeys = Object.keys(FamList);

  return (
    <div>
      {variant === "GX" && fam === "stratix10" && <Stratix10GX posts={posts} />}
      {variant === "SX" && fam === "stratix10" && <Stratix10SX posts={posts} />}
      {variant === "MX" && fam === "stratix10" && <Stratix10MX posts={posts} />}
      {variant === "TX" && fam === "stratix10" && <Stratix10TX posts={posts} />}
      {variant === "DX" && fam === "stratix10" && <Stratix10DX posts={posts} />}
      {variant === "NX" && fam === "stratix10" && <Stratix10NX posts={posts} />}
      {(variant === "GX" || variant === "SX" || variant === "GT") &&
        fam === "arria10" && <Arria10 posts={posts} FamKeys={FamKeys} />}

      {(variant === "GT" ||
        variant === "GX" ||
        variant === "GZ" ||
        variant === "SX" ||
        variant === "ST") &&
        fam === "arria5" && <Arria5 posts={posts} FamKeys={FamKeys} />}

      {variant === "GX" && fam === "stratix4" && <Stratix4GX posts={posts} />}
      {variant === "GT" && fam === "stratix4" && <Stratix4GT posts={posts} />}
      {variant === "E" && fam === "stratix4" && <Stratix4E posts={posts} />}
      {variant === "GX" && fam === "stratix5" && <Stratix5GX posts={posts} />}
      {variant === "GS" && fam === "stratix5" && <Stratix5GS posts={posts} />}
      {variant === "E" && fam === "stratix5" && <Stratix5E posts={posts} />}
    </div>
  );
}

export default TableFpga;
