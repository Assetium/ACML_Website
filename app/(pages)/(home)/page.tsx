

// import React from "react";
// import AIMLHeader from "@/app/sections/aiml-header";
// import AIMLServices from "@/app/sections/aiml-service";
// import AIMLProducts from "@/app/sections/aiml-products";
// import AIMLInsights from "@/app/sections/aiml-insighta";
// import AIMWhyUs from "@/app/sections/aiml-why-choose-us";

// export default function ComingSoon() {
//   return (
//     <>
//       <AIMLHeader />
//       <AIMLServices />
//       <AIMLProducts />
//       <AIMLInsights />
//       <AIMWhyUs />
//     </>
  
//   );
// }


import ACMLHeader from "@/app/sections/acml-header";
import ACMLManagement from "@/app/sections/acml-management";
import ACMLProuctOffernings from "@/app/sections/acml-product-offernings";
import ACMLServiceOfferings from "@/app/sections/acml-service-offernings";
import ATCCommoditiesCycles from "@/app/sections/atcl-commodity-cycles";
import ATCTrancheHistory from "@/app/sections/atcl-tranche-history";
import ATCHowItWorks from "@/app/sections/how-actl-work";
import OtherProducts from "@/app/sections/other-acml-products";
import React from "react";

const Acml = () => {
  return (
    <div>
      <ACMLHeader />
      <ACMLServiceOfferings />
      <ACMLProuctOffernings />
      <ATCCommoditiesCycles />
      <ATCHowItWorks />
      <ATCTrancheHistory />
      <OtherProducts />

      <ACMLManagement />
    </div>
  );
};

export default Acml;
