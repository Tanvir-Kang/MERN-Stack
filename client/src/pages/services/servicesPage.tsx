import React from 'react';
import { NavBar } from '../../core/components/navbar/navbar';
import { Footer } from '../../core/components/footer/footer';
import { CardItem, ICardProps } from '../../core/components/cards/cards';

var serviceList: ICardProps[] = [
  { title: "Service 1", text: "An intensive wash process consisting of: \n - Thorough-pre rinse \n - Tar, bug, sap removal ( if applicable ) \n- Foam bath \n - Hand wash \n- Detailed agitation of badges and trim \n- Hand dry \n- Tire scrub \n- Wheel decontamination \n- Tire shine \n- Door and trunk jambs", subtitle: "Express Wash" },
  { title: "Service 2", text: "Express Wash", subtitle: "Wash and Wax" },
  { title: "Service 3", text: "Express Wash", subtitle: "Paint Enhancement" },
  { title: "Service 4", text: "Express Wash", subtitle: "Express Interior" },
  { title: "Service 5", text: "Express Wash", subtitle: "Moderate Interior" },
  { title: "Service 6", text: "Express Wash", subtitle: "Full Interior" },
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