import React from "react";
import "./Home.css";
import Map from "../Map/Map";
import Slider from "../Imageslider/Slider";

export default function Home(props) {
  let content = {
    English: {
      title: "Lorem",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    Malayalam: {
      title: "à´²àµà´±àµà´ à´à´ªàµà´¸à´¿à´¯à´",
      description:
        "à´ªàµà´°à´¿à´¨àµà´±àµ à´àµ»à´¡àµ à´àµà´ªàµà´ªàµà´àµà´¯àµà´¯àµ½ à´µàµà´¯à´µà´¸à´¾à´¯à´¤àµà´¤à´¿à´¨àµà´±àµ† à´¡à´®ി കോഡിംഗ് ലോകത്തിലെ ലോകത്തിലുള്ള വ്യത്യസ്ത ഭാഷകളിൽ ഉൾപ്പെടുത്തുന്ന വ്യാഖ്യാനങ്ങൾ പ്രദർശിപ്പിക്കുന്നു. 1500-ൽ മുതൽ ലൊൺ ലൊൺ ഇൻ‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍ പ്രിൻ്‍റ് ചെയ്യുന്ന ഉൾപ്പെടുത്ത് ഉൾപ്പെടുത്ത്. "
    },
    Hindi: {
      title: "शीर्षक",
      description:
        "यहां विवरण होगा"
    },
    French: {
      title: "Titre",
      description:
        "Voici la description"
    }
  };

  switch(props.language) {
    case 'Malayalam':
      content = content.Malayalam;
      break;
    case 'Hindi':
      content = content.Hindi;
      break;
    case 'French':
      content = content.French;
      break;
    default:
      content = content.English;
  }

  
  return (
    <>
      <div className="container">
        <Slider/>
      </div>


      <div className="home_cm_container">
        <div className="text-center home_welcome_heading">
          <h2 className="display-4 wel_head">
            {/* Welcome to the Official Website of */}{content.title}
          </h2>
          <h2 className="state_head1">“One District-One Product”,</h2>
          <h2 className="state_head2">{content.description}</h2>
          <p className="welcome_matter">
          The jammu & kashmir Government’s One District-One Product Programme aims to encourage such indigenous and specialized products and crafts in jammu & kashmir that are found nowhere else – like the ancient and nutritious 'Kala Namak' rice, the rare and intriguing wheat-stalk craft, world-famous chikankari and zari-zardozi work on clothes, and the intricate and stunning horn-bone work that uses the remains of dead animals rather than live ones, a nature-friendly replacement for ivory.
          </p>
        </div>
        <div className="cm_img_container">
          <img
            src="https://cdn1.byjus.com/wp-content/uploads/blog/2022/08/12145200/Droupadi_Murmu_official_portrait_2022-700x875.jpg"
            width="200px"
            height="250px"
            alt=""
          ></img>

          <div className="cm_desc">Droupadi Murmu</div>
        </div>
        <div className="cm_img_container">
          <img
            src="https://th.bing.com/th/id/OIP.5uDT9avm5EeOdrOI9vcxCAHaI0?pid=ImgDet&rs=1"
            width="200px"
            height="250px"
            alt=""
            ></img>
          <div className="cm_desc">Jagdeep Dhankhar</div>
        </div>
      </div>
      <br/>
      <br/>
    <div className="cardtatalshadows">
      <div className="card mb-5 cardsshadows">
          <div className="row g-0">
            <div className="col-md-3 col-sm-6">
              <img
                src="https://www.thestatesman.com/wp-content/uploads/2019/09/QT-O4-1-1024x683.jpg"
                className="img-fluid"
                alt="Left Image"
              />
            </div>
            <div className="col-md-9 col-sm-6">
              <div className="card-body">
                <h5 className="card-title">Introduction</h5>
                <p className="card-text">
                Jammu and Kashmir, now a union territory in northern India, is characterized by diverse geography, encompassing the Himalayas, Pir Panjal Range, and Shivalik Range. It shares borders with Pakistan and China and features abundant rivers and lakes, including Dal Lake. The region experiences varying climates, from temperate in the Kashmir Valley to subtropical in Jammu and arid conditions in Ladakh. Rich biodiversity is found here, with protected areas for wildlife conservation. 
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
        {/* Card with Image on Right and Text on Left */}
        <div className="cardtatalshadows">
        <div className="card">
          <div className="row g-0">
            <div className="col-md-9">
              <div className="card-body">
                <h5 className="card-title">Geographical Data</h5>
                <p className="card-text">
                The Line of Control (LoC) divides the territory between India and Pakistan, and it was reorganized into two union territories, Jammu & Kashmir and Ladakh, in 2019. The population of the former state was estimated at around 12.5 million, subject to change over time. This reorganization followed the historic revocation of Article 370, leading to the alteration of its administrative and political status, with both union territories now under direct central government administration.
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <img
                src="https://images.squarespace-cdn.com/content/v1/5ab61c67ec4eb7ab7a2f40f2/1570767012756-3RB9F64GC745URU1GNA5/ke17ZwdGBToddI8pDm48kMEscrJZt_tmaeDMTaC3Grd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1USasn69Hr34dwVEWwP0LjT7TmWk4ozqjQRTjqwHqVncSD8iN_TR6rJlKCdD_scFx3Q/71087629_10216837803031064_7165896983389929472_o.jpg"
                className="img-fluid"
                alt="Right Image"
              />
            </div>
          </div>
        </div>
        </div>
    <br/>
  
      <Map />
    </>
  );
}
