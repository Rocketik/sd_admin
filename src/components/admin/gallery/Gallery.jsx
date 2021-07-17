import React, { useContext, useEffect, useState } from "react";
import Admin from "./../Admin";
import AdminContentHeader from "./../AdminContentHeader";
import TRow from "./TRow";
import { isAuthificationPassed } from "../../../js/lib/front-libik";

import { getData } from "./../../../js/requests";
import { useHistory } from "react-router-dom";

// const galleryTableConfig = {
//   head: [
//     "ID",
//     "Շապիկ",
//     "Հերտականություն",
//     "Բաննեռ",
//     "Վերնագիր",
//     "Գործողություններ",
//   ],
//   data: [
//     ["785459", "64656545665.jpg", "1", "64656545665.jpg", "Էվերեստ"],
//     ["685459", "64656545665.jpg", "2", "64656545665.jpg", "  ID Բանկ"],
//     ["785459", "64656545665.jpg", "1", "64656545665.jpg", "Էվերեստ"],
//     ["685459", "64656545665.jpg", "2", "64656545665.jpg", "  ID Բանկ"],
//     ["785459", "64656545665.jpg", "1", "64656545665.jpg", "Էվերեստ"],
//     ["685459", "64656545665.jpg", "2", "64656545665.jpg", "  ID Բանկ"],
//     ["785459", "64656545665.jpg", "1", "64656545665.jpg", "Էվերեստ"],
//     ["685459", "64656545665.jpg", "2", "64656545665.jpg", "  ID Բանկ"],
//     ["785459", "64656545665.jpg", "1", "64656545665.jpg", "Էվերեստ"],
//     ["685459", "64656545665.jpg", "2", "64656545665.jpg", "  ID Բանկ"],
//     ["785459", "64656545665.jpg", "1", "64656545665.jpg", "Էվերեստ"],
//     ["685459", "64656545665.jpg", "2", "64656545665.jpg", "  ID Բանկ"],
//   ],
// };
export const GalleryContext = React.createContext(null);

export default function Gallery(props) {
  const [galleryTableConfig, setgalleryTableConfig] = useState();
  const history = useHistory();

  useEffect(() => {
    const token = isAuthificationPassed();
    !token && history.push("/");

    getData((data) => {
      setgalleryTableConfig(data);
    });
  }, []);

  return (
    <GalleryContext.Provider value={setgalleryTableConfig}>
      <Admin>
        <div className="admin_content">
          <AdminContentHeader title="Տեսադարան" />
          <div className="admin_content_inner">
            <table>
              <thead>
                {galleryTableConfig && (
                  <TRow type="head" data={galleryTableConfig.head} />
                )}
              </thead>
              <tbody>
                {galleryTableConfig &&
                  galleryTableConfig.data.map((el, i) => (
                    <TRow type="body" data={el} key={i} />
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </Admin>
    </GalleryContext.Provider>
  );
}
