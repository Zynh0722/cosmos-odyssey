import React, { useEffect, useState } from 'react';

function PriceTitles({ currentSort, setCurrentSort }) {

    const [companyArrow, setCompanyArrow] = useState("");
    const [priceArrow, setPriceArrow] = useState("");
    const [distanceArrow, setDistanceArrow] = useState("");
    const [timeArrow, setTimeArrow] = useState("");

    useEffect(() => {
        document.getElementById("CompanyDiv").addEventListener("click", function () {
            handleSort("Company");
        });
        document.getElementById("PriceDiv").addEventListener("click", function () {
            handleSort("Price");
        });
        document.getElementById("DistanceDiv").addEventListener("click", function () {
            handleSort("Distance");
        });
        document.getElementById("TimeDiv").addEventListener("click", function () {
            handleSort("Time");
        });
    })

    function handleSort(sortee) {
        switch (sortee) {
            case "Company":
                if (currentSort === "CompanyAsc") {
                    setCurrentSort("CompanyDesc");
                    setCompanyArrow("⇓");
                } else {
                    setCurrentSort("CompanyAsc");
                    setCompanyArrow("⇑");
                    setPriceArrow("");
                    setDistanceArrow("");
                    setTimeArrow("");
                }
                break;
            case "Price":
                if (currentSort === "PriceAsc") {
                    setCurrentSort("PriceDesc");
                    setPriceArrow("⇓");
                } else {
                    setCurrentSort("PriceAsc");
                    setCompanyArrow("");
                    setPriceArrow("⇑");
                    setDistanceArrow("");
                    setTimeArrow("");
                }
                break;
            case "Distance":
                if (currentSort === "DistanceAsc") {
                    setCurrentSort("DistanceDesc");
                    setDistanceArrow("⇓");
                } else {
                    setCurrentSort("DistanceAsc");
                    setCompanyArrow("");
                    setPriceArrow("");
                    setDistanceArrow("⇑");
                    setTimeArrow("");
                }
                break;
            case "Time":
                if (currentSort === "TimeAsc") {
                    setCurrentSort("TimeDesc");
                    setTimeArrow("⇓");
                } else {
                    setCurrentSort("TimeAsc");
                    setCompanyArrow("");
                    setPriceArrow("");
                    setDistanceArrow("");
                    setTimeArrow("⇑");
                }
                break;

            default:
                break;
        }
    }

    return (
        <div className='row row-titles'>
            <div id='CompanyDiv' className="col-sm-2 pricelist-title">Company<span className='sort-arrow'>{companyArrow}</span></div>
            <div id='PriceDiv' className="col-sm-2 pricelist-title">Price<span className='sort-arrow'>{priceArrow}</span></div>
            <div id='DistanceDiv' className="col-sm-2 pricelist-title">Distance<span className='sort-arrow'>{distanceArrow}</span></div>
            <div className='col-sm-2'>Date</div>
            <div id='TimeDiv' className="col-sm-2 pricelist-title">Total Travel Time<span className='sort-arrow'>{timeArrow}</span></div>
        </div>
    );
}

export default PriceTitles;