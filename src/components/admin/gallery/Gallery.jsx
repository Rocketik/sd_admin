import React, {  useEffect, useState } from "react";
import Admin from "./../Admin";
import AdminContentHeader from "./../AdminContentHeader";
import TRow from "./TRow";
import { isAuthificationPassed } from "../../../js/lib/front-libik";

import { getGalleryData } from "./../../../js/requests"; 
import Loading from './../../loading/Loading';

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

export default function Gallery({history}) {
  const [galleryTableConfig, setgalleryTableConfig] = useState(); 
  const [isLoadingOpen, setisLoadingOpen] = useState(false);

  useEffect(() => {
    const token = isAuthificationPassed();
    !token && history.push("/");
    setisLoadingOpen(true);
    getGalleryData((data) => {
      setgalleryTableConfig(data);
      setisLoadingOpen(false);
    });
  }, []);

  return (
    <GalleryContext.Provider value={setgalleryTableConfig}> 
      <Admin isGalery={true}>
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
      {isLoadingOpen && <Loading type="spin" />}
        
    </GalleryContext.Provider>
  );
}
