import { useState } from "react";
// mui
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";

import "./FilterAccardions.scss";
const FilterAccardions = () => {
  const [isExpanded1, setIsExpanded1] = useState(false);
  const [isExpanded2, setIsExpanded2] = useState(false);
  const [isExpanded3, setIsExpanded3] = useState(false);
  const [isExpanded4, setIsExpanded4] = useState(false);

  const handleAccordionClick1 = () => {
    setIsExpanded1(!isExpanded1);
  };
  const handleAccordionClick2 = () => {
    setIsExpanded2(!isExpanded2);
  };
  const handleAccordionClick3 = () => {
    setIsExpanded3(!isExpanded3);
  };

  const handleAccordionClick4 = () => {
    setIsExpanded4(!isExpanded4);
  };

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
              <div className="top">
                <span className="selected">0 selected</span>
                <span className="reset">Reset</span>
              </div>
              <ul className="acardion-filter-list">
                <li>
                  <label className="acardion-checkbox">
                    <input type="checkbox" />
                    <span>In stock</span>
                  </label>
                  <span className="filter-count">(3)</span>
                </li>
                <li>
                  <label className="acardion-checkbox">
                    <input type="checkbox" />
                    <span>Out of stock</span>
                  </label>
                  <span className="filter-count">(1)</span>
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
              <div className="top">
                <span className="selected">The highest price is 646.00USD</span>
                <span className="reset">Reset</span>
              </div>
              <div className="filter-price">
                <div className="field">
                  <label className="field-label">Min price:</label>
                  <input
                    className="field-input"
                    type="text"
                    placeholder="Min Price"
                  />
                </div>
                <div className="field">
                  <label className="field-label">Max price:</label>
                  <input
                    className="field-input"
                    type="text"
                    placeholder="Max Price"
                  />
                </div>
              </div>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion onChange={handleAccordionClick3} className="accordion3">
        <AccordionSummary aria-controls="panel2a-content" id="panela-header">
          <Typography className="title">Product type</Typography>
          {isExpanded3 ? <HorizontalRuleIcon /> : <AddIcon />}
        </AccordionSummary>
        <AccordionDetails className="accordion-details">
          <Typography className="element">
            <div className="product-type-detalis">
              <div className="top">
                <span className="selected">0 selected</span>
                <span className="reset">Reset</span>
              </div>
              <ul className="acardion-filter-list">
                <li>
                  <label className="acardion-checkbox">
                    <input type="checkbox" name="Headset" />
                    <span>Headset</span>
                  </label>
                  <span className="filter-count">(3)</span>
                </li>
                <li>
                  <label className="acardion-checkbox">
                    <input type="checkbox" name="Keycaps" />
                    <span>Keycaps</span>
                  </label>
                  <span className="filter-count">(1)</span>
                </li>
                <li>
                  <label className="acardion-checkbox">
                    <input type="checkbox" name="Remote" />
                    <span>Remote</span>
                  </label>
                  <span className="filter-count">(1)</span>
                </li>
              </ul>
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
              <div className="top">
                <span className="selected">0 selected</span>
                <span className="reset">Reset</span>
              </div>
              <ul className="acardion-filter-list">
                <li>
                  <label className="acardion-checkbox">
                    <input type="checkbox" name="XFX" />
                    <span>XFX</span>
                  </label>
                  <span className="filter-count">(3)</span>
                </li>
                <li>
                  <label className="acardion-checkbox">
                    <input type="checkbox" name="Sony PS5" />
                    <span>Sony PS5</span>
                  </label>
                  <span className="filter-count">(1)</span>
                </li>
                <li>
                  <label className="acardion-checkbox">
                    <input type="checkbox" name="Vulture" />
                    <span>Vulture</span>
                  </label>
                  <span className="filter-count">(1)</span>
                </li>
              </ul>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default FilterAccardions;
