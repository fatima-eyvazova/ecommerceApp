import React, { useEffect, useState } from "react";
// mui
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";

import "./FilterAccardions.scss";
import { makeRequest } from "../../../../../services/api";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../redux/types";
import { GetBrandItem } from "../../../../dashboard/pages/Brands/types";

type Props = {
  selectedBrands: string[];
  setSelectedBrands: React.Dispatch<React.SetStateAction<string[]>>;
  setMinMaxPrice: React.Dispatch<
    React.SetStateAction<{ min: number; max: number }>
  >;
  setInOutStock: React.Dispatch<
    React.SetStateAction<{ inStock: boolean; outStock: boolean }>
  >;
};

const FilterAccardions = ({
  selectedBrands,
  setSelectedBrands,
  setMinMaxPrice,
  setInOutStock,
}: Props) => {
  const [isExpanded1, setIsExpanded1] = useState(false);
  const [isExpanded2, setIsExpanded2] = useState(false);
  const [isExpanded4, setIsExpanded4] = useState(false);
  const [brands, setBrands] = useState<GetBrandItem[]>([]);
  const { token } = useSelector((state: RootState) => state.auth);

  const handleAccordionClick1 = () => {
    setIsExpanded1(!isExpanded1);
  };
  const handleAccordionClick2 = () => {
    setIsExpanded2(!isExpanded2);
  };

  const handleAccordionClick4 = () => {
    setIsExpanded4(!isExpanded4);
  };

  const fetchBrands = async () => {
    try {
      const res = await makeRequest("/dashboard/brands", "get", null, token);
      const data = res?.data as { data: GetBrandItem[] };
      setBrands(data?.data?.reverse());
    } catch (error) {
      console.error("Error fetching brands:", error);
    }
  };

  const handleCheckBrand = (id: string) => {
    if (!selectedBrands.includes(id)) {
      setSelectedBrands((prev) => [...prev, id]);
    } else {
      setSelectedBrands((prev) => prev.filter((i) => i !== id));
    }
  };

  useEffect(() => {
    if (token) {
      fetchBrands();
    }
  }, [token]);

  return (
    <div className="filter-products">
      <Accordion
        expanded={isExpanded1}
        onChange={handleAccordionClick1}
        className="accordion1"
      >
        <AccordionSummary aria-controls="panel1a-content" id="panela-header">
          <Typography className="title">Availability</Typography>
          {isExpanded1 ? <HorizontalRuleIcon /> : <AddIcon />}
        </AccordionSummary>
        <AccordionDetails className="accordion-details">
          <Typography className="element">
            <div className="availability-details">
              <ul className="acardion-filter-list">
                <li className="acardion-checkbox">
                  <input
                    type="checkbox"
                    id="instock-checkbox"
                    style={{ width: 20, height: 20 }}
                    onChange={(e) =>
                      setInOutStock((prev) => ({
                        ...prev,
                        inStock: e.target.checked,
                      }))
                    }
                  />
                  <label htmlFor="instock-checkbox">In stock</label>
                </li>
                <li className="acardion-checkbox">
                  <input
                    type="checkbox"
                    id="outstock-checkbox"
                    style={{ width: 20, height: 20 }}
                    onChange={(e) =>
                      setInOutStock((prev) => ({
                        ...prev,
                        outStock: e.target.checked,
                      }))
                    }
                  />
                  <label htmlFor="outstock-checkbox">Out of stock</label>
                </li>
              </ul>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion onChange={handleAccordionClick2} className="accordion2">
        <AccordionSummary aria-controls="panel2a-content" id="panela-header">
          <Typography className="title">Price</Typography>
          {isExpanded2 ? <HorizontalRuleIcon /> : <AddIcon />}
        </AccordionSummary>
        <AccordionDetails className="accordion-details">
          <Typography className="element">
            <div className="price-detalis">
              <div className="filter-price">
                <div className="field">
                  <label className="field-label">Min price:</label>
                  <input
                    className="field-input"
                    type="number"
                    placeholder="Min Price"
                    onChange={(e) =>
                      setMinMaxPrice((prev) => ({
                        ...prev,
                        min: +e.target.value,
                      }))
                    }
                  />
                </div>
                <div className="field">
                  <label className="field-label">Max price:</label>
                  <input
                    className="field-input"
                    type="number"
                    placeholder="Max Price"
                    onChange={(e) =>
                      setMinMaxPrice((prev) => ({
                        ...prev,
                        max: +e.target.value,
                      }))
                    }
                  />
                </div>
              </div>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion onChange={handleAccordionClick4} className="accordion4">
        <AccordionSummary aria-controls="panel2a-content" id="panela-header">
          <Typography className="title">Brand</Typography>
          {isExpanded4 ? <HorizontalRuleIcon /> : <AddIcon />}
        </AccordionSummary>
        <AccordionDetails className="acardion-detalis">
          <Typography className="element">
            <div className="brand-detalis">
              {brands.map((brand) => (
                <ul className="acardion-filter-list" key={brand?._id}>
                  <li className="acardion-checkbox">
                    <input
                      type="checkbox"
                      name={brand?.name}
                      id={brand?._id}
                      checked={selectedBrands.includes(brand?._id)}
                      onChange={() => handleCheckBrand(brand?._id)}
                    />
                    <label htmlFor={brand?._id}>{brand?.name}</label>
                  </li>
                </ul>
              ))}
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default FilterAccardions;
