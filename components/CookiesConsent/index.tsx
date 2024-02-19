"use client";

import "./style.scss";

import { useEffect, useState } from "react";
import { hasCookie, setCookie } from "cookies-next";
import Link from "next/link";
import { LiaCookieSolid } from "react-icons/lia";

const CookiesConsent = () => {
  const [showConsent, setShowConsent] = useState<boolean>(true);

  useEffect(() => {
    setShowConsent(hasCookie("cookiesConsent"));
  }, []);

  const acceptCookies = () => {
    setShowConsent(true);
    setCookie("cookiesConsent", "true", {
      expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    });
  };

  if (showConsent) {
    return null;
  }

  return (
    <div className="cookiesConsentOverlay">
      <div className="cookiesConsentContainer">
        <h1>
          Kolačići <LiaCookieSolid />
        </h1>
        <span>
          Ova web stranica koristi kolačiće kako bi se osiguralo bolje
          korisničko iskustvo. Više informacija pronađite{" "}
          <Link href="/uvjeti-koristenja">ovdje.</Link>
        </span>
        <button
          className="bg-white py-2 px-10 rounded"
          onClick={() => acceptCookies()}
        >
          Prihvati
        </button>
      </div>
    </div>
  );
};

export default CookiesConsent;
