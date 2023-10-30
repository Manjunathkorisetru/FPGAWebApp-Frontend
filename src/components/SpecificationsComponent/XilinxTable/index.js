import React, { useEffect, useState } from "react";
import axios from "axios";
import Kintex7 from "./7series/Kintex7";
import Virtex7 from "./7series/Virtex7";
import KintexUltraScale from "./UltraScaleSeries/KintexUltraScale";
import VirtexUltraScale from "./UltraScaleSeries/VirtexUltraScale";
import KintexUltraScalePlus from "./UltraScalePlusSeries/KintexUltraScalePlus";
import VirtexUltraScalePlus from "./UltraScalePlusSeries/VirtexUltraScalePlus";

function XilinxTable(props) {
  const [posts, setPosts] = useState([]);

  const fam = props.family;

  const fetchPostList = async (fam) => {
    const { data } = await axios.get(
      "https://mysterious-galoshes-moth.cyclic.app/fpga",
      {
        params: {
          family: fam,
        },
      }
    );
    setPosts(data);
  };

  useEffect(() => {
    fetchPostList(fam);
  }, [fam]);

  return (
    <div>
      {fam === "kintex7" && <Kintex7 posts={posts} />}
      {fam === "virtex7" && <Virtex7 posts={posts} />}
      {fam === "kintexultrascale" && <KintexUltraScale posts={posts} />}
      {fam === "virtexultrascale" && <VirtexUltraScale posts={posts} />}
      {fam === "kintexultrascaleplus" && <KintexUltraScalePlus posts={posts} />}
      {fam === "virtexultrascaleplus" && <VirtexUltraScalePlus posts={posts} />}
    </div>
  );
}

export default XilinxTable;
