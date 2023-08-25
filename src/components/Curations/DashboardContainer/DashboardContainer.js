"use client";

import "./DashboardContainer.css";
import Carousel from "../Carousel/Carousel";
import React, { useState, useEffect } from "react";

export default function DashboardContainer() {
  const [curationsData, setCurationsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl = "/api/curations"; // 서버 API 엔드포인트 URL

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setCurationsData(data.items); // data 객체 안에 items가 array로 있어서, 이를 curationsData로 받아옴.
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  console.log(curationsData);

  return (
    <div className="dashboard-container">
      {loading ? (
        <p>Loading...</p>
      ) : (
        curationsData.map((curation) => (
          <div className="curation-container" key={curation.id}>
            <h3 className="curation-title">{curation.title}</h3>
            <Carousel contents={curation.contents} />
          </div>
        ))
      )}
    </div>
  );
}
