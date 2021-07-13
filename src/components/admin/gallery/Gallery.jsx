import React from "react";
import Admin from "./../Admin";
import AdminContentHeader from "./../AdminContentHeader";
import TRow from "./TRow";

const galleryTableConfig = {
  head: [
    "ID",
    "Շապիկ",
    "Հերտականություն",
    "Բաննեռ",
    "Վերնագիր",
    "Գործողություններ",
  ],
  data: [
    ["785459", "64656545665.jpg", "1", "64656545665.jpg", "Էվերեստ"],
    ["685459", "64656545665.jpg", "2", "64656545665.jpg", "  ID Բանկ"],
    ["785459", "64656545665.jpg", "1", "64656545665.jpg", "Էվերեստ"],
    ["685459", "64656545665.jpg", "2", "64656545665.jpg", "  ID Բանկ"],
    ["785459", "64656545665.jpg", "1", "64656545665.jpg", "Էվերեստ"],
    ["685459", "64656545665.jpg", "2", "64656545665.jpg", "  ID Բանկ"],
    ["785459", "64656545665.jpg", "1", "64656545665.jpg", "Էվերեստ"],
    ["685459", "64656545665.jpg", "2", "64656545665.jpg", "  ID Բանկ"],
    ["785459", "64656545665.jpg", "1", "64656545665.jpg", "Էվերեստ"],
    ["685459", "64656545665.jpg", "2", "64656545665.jpg", "  ID Բանկ"],
    ["785459", "64656545665.jpg", "1", "64656545665.jpg", "Էվերեստ"],
    ["685459", "64656545665.jpg", "2", "64656545665.jpg", "  ID Բանկ"],
  ],
};
export default function Gallery(props) {
  return (
    <Admin>
      <div className="admin_content">
        <AdminContentHeader title="Տեսադարան" />
        <div className="admin_content_inner">
          <table>
            <thead>
              <TRow type="head" data={galleryTableConfig.head} />
            </thead>
            <tbody> 
                {galleryTableConfig.data.map((el, i) => (
                  <TRow type="body" data={el} key={i} />
                ))}
      
            </tbody>
          </table>
        </div>
      </div>
    </Admin>
  );
}
