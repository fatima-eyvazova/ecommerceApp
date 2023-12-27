// mui
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import { useState, SyntheticEvent } from "react";

import { Comments } from "../..";
import "./TabItems.scss";

const TabItems = () => {
  const [value, setValue] = useState<string>("1");

  const handleChange = (_event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <section className="tab">
      <Box sx={{ width: "87%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Description" value="1" />
              <Tab label="More information" value="2" />
              <Tab label="Comments" value="3" />
              <Tab label="Reviews" value="4" />
              <Tab label="shipping policy" value="5" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <div className="description">
              <p>
                Lorem Ipsum es simplemente el texto de relleno de las imprentas
                y archivos de texto. Mañana, a partir de los botones de opción,
                sino un poco de dolor. Escribir en el freno ahora. No hay
                comentarios eran, en el mejor, pero el financiamiento de la
                atención de la salud o la risa. Bienvenido a aprender más acerca
                de la cultura popular, y el tiempo, no, ni a crecer fuerte.
                Miramos a los miembros de televisión por cable de televisión.
              </p>
              <p>
                Por otra parte, denunciamos con indignación a los hombres que
                son engañados y desmoralizados por los encantos del placer del
                momento, tan cegados por el deseo, que no pueden prever el dolor
                y la molestia que se va a producir, y la misma culpa es de los
                que faltan a su deber por debilidad de la voluntad, que es lo
                mismo que decir que fallan por la fatiga y el dolor. Estos casos
                son muy simples y fácil de distinguir. En una hora libre, sin
                las trabas de nuestro poder de elección y cuando nada impida que
                seamos capaces de hacer lo que más nos gusta, todo placer es de
                agradecer y cada dolor se puede evitar. Pero en ciertas
                circunstancias y debido a las exigencias del deber o de las
                obligaciones de la empresa, estos placeres tienen que ser
                repudiados y sus molestias aceptadas .El hombre sabio, por lo
                tanto, siempre tiene en estos asuntos una elección: rechaza
                placeres para asegurar otros placeres mayores, o de lo contrario
                evita los dolores para evitar dolores peores.
              </p>
            </div>
          </TabPanel>
          <TabPanel value="2">
            <div className="product-information">
              <br />
              name: Scanpan Classic Covered
              <br />
              color: orange , pink , yellow <br />
              size: xl, l , m , sl
              <br />
              length: 102cm, 110cm , 115cm <br />
              Brand: Nike, Religion, Diesel, Monki
              <br />
            </div>
          </TabPanel>
          <TabPanel value="3">
            <Comments />
          </TabPanel>
          <TabPanel value="4">
            <div className="review">
              <div className="review-container">
                <h2 className="header-title">Customer Reviews</h2>
                <span className="caption">No reviews yet</span>
              </div>
            </div>
          </TabPanel>
          <TabPanel value="5">
            <div className="shipping">
              <h2>Shipping policy for our store</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
                in hendrerit in vulputate
              </p>
              <ul>
                <li>1-2 business days (Typically by end of day)</li>
                <li>30 days money back guaranty</li>
                <li>24/7 live support</li>
                <li>odio dignissim qui blandit praesent</li>
                <li>luptatum zzril delenit augue duis dolore</li>
                <li>te feugait nulla facilisi.</li>
              </ul>
              <p>
                Nam liber tempor cum soluta nobis eleifend option congue nihil
                imperdiet doming id quod mazim placerat facer possim assum. Typi
                non habent claritatem insitam; est usus legentis in iis qui
                facit eorum
              </p>
              <p>
                claritatem. Investigationes demonstraverunt lectores legere me
                lius quod ii legunt saepius. Claritas est etiam processus
                dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum
                est notare quam littera gothica, quam nunc putamus parum claram,
                anteposuerit litterarum formas humanitatis per
              </p>
              <p>
                seacula quarta decima et quinta decima. Eodem modo typi, qui
                nunc nobis videntur parum clari, fiant sollemnes in futurum.
              </p>
            </div>
          </TabPanel>
        </TabContext>
      </Box>
    </section>
  );
};

export default TabItems;
