import { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import { useRouter } from "next/router";

export default function ({}) {
  // const router = useRouter();
  // const [vistor, setVistor] = useState(null);
  // const [send, setSend] = useState(0);
  // const getVister = async () => {
  //   const response = await fetch("https://ipapi.co/json/");
  //   const data = await response.json();
  //   setVistor(data);
  // };

  // useEffect(() => {
  //   getVister();
  // }, []);

  // useEffect(() => {
  //   if (vistor !== null) {
  //     const templateParams = {
  //       to_name: `iso the id is ${router.query.q}`,
  //       from_name: "ishak sebsib",
  //       vIp: vistor.ip,
  //       vCity: vistor.city,
  //       vCountry: vistor.country_name,
  //     };

  //     if (send === 0) {
  //       if (templateParams.vCountry !== "Ethiopia") {
  //         emailjs.send(
  //           "service_ms6dndb",
  //           "template_om0fayb",
  //           templateParams,
  //           "U2EWDGWZ5eAPS5nkl"
  //         );
  //         setSend(1);
  //       }
  //     }
  //   }
  // }, [vistor]);
  return (
    <div className="loadingbody">
      <div className="loading">
        <div className="loader"></div>
      </div>
    </div>
  );
}
