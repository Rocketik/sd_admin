import React from "react";
import Admin from "../Admin";
import AdminContentHeader from "../AdminContentHeader"; 
import logo1 from "../../../assets/images/partnersLogo1.png";
import logo2 from "../../../assets/images/partnersLogo2.png";
import logo3 from "../../../assets/images/partnersLogo3.png";
import logo4 from "../../../assets/images/partnersLogo4.png";
import logo5 from "../../../assets/images/partnersLogo5.png";
import logo6 from "../../../assets/images/partnersLogo6.png";
import logo7 from "../../../assets/images/partnersLogo7.png";
import logo8 from "../../../assets/images/partnersLogo8.png";
import logo9 from "../../../assets/images/partnersLogo9.png";
import logo10 from "../../../assets/images/partnersLogo10.png";
import PartnersItem from "./PartnersItem";
import addIcon from "../../../assets/images/addIcon.svg";

const partnersConfig = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7,
    logo8,
    logo9,
    logo10,

  ]

export default function Partners( ) {
  return (
    <Admin>
      <div className="admin_content">
        <AdminContentHeader title="Գործընկերներ" />
        <div className="admin_content_inner admin_content_inner-partners">
            <div className="admin_content_inner_add">
              <button><img src={addIcon} alt="" /> Ավելացնել </button>
            </div>
            <div className="admin_content_inner_partners">
                {partnersConfig.map( (el, i ) =>  <PartnersItem  key={i} image={ el }/> )} 
            </div>
        </div>
      </div>
    </Admin>
  );
}
