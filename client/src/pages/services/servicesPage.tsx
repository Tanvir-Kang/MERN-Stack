import React from 'react';
import { NavBar } from '../../core/components/navbar/navbar';
import { Footer } from '../../core/components/footer/footer';
import { CardItem, ICardProps } from '../../core/components/cards/cards';

var serviceList: ICardProps[] = [
  { title: "Service 1", text: "An intensive wash process consisting of: \n - Thorough-pre rinse \n - Tar, bug, sap removal ( if applicable ) \n- Foam bath \n - Hand wash \n- Detailed agitation of badges and trim \n- Hand dry \n- Tire scrub \n- Wheel decontamination \n- Tire shine \n- Door and trunk jambs", subtitle: "Express Wash" },
  { title: "Service 2", text: "- Express wash followed up by an application of gloss enhancing wax (4 month durability) \n (+) optional spray sealant: + $15 (6 month durability) \n (+) optional ceramic spray wax: + $20 (6+ month durability)", subtitle: "Wash and Wax" },
  { title: "Service 3", text: "This package is intended for those who want to take it a notch above a wash. A paint enhancement will remove light swirls, scratches, and oxidation in the clear coat of the vehicle. An enhancement will restore gloss, increase clarity, and improves the condition of the paint. \n- Express wash (Service 1) \n- Complete paint decontamination \n- Machine polish \n- Paint protection", subtitle: "Paint Enhancement" },
  { title: "Service 4", text: "A quick interior cleaning of the cabin and trunk \n- Vaccumm \n- Dust and debris removal \n- Glass cleaning \n- Door and trunk jambs", subtitle: "Express Interior" },
  { title: "Service 5", text: "A deeper clean \n- Express interior (Service 4) \n- Dashboard, center console, doors, pillars are scrubbed and UV protection is applied \n- Leather seats are cleaned and conditioned", subtitle: "Moderate Interior" },
  { title: "Service 6", text: "The deepest clean \n- Express + Moderate Interior (Service 4 + Service 5) \n- Full carpet steam clean, shampoo and extraction \n- Cloth seats are shampooed and extracted \n- Every interior surface is coated with protection", subtitle: "Full Interior" },
]

export const Services = () => {

  return (
    <>
      <NavBar />
      <CardItem services={serviceList}/>
    <Footer/>
    </>
  )
}