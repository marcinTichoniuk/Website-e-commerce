import React from 'react';
import { FaBroom, FaDoorOpen, FaHandHoldingUsd } from 'react-icons/fa';

const services = [
  { id: 1, text: `Don't wait weeks for your package to arrive. Immediatly delivery!`, slogan: 'teleportation', icon: <FaBroom className="services__icon" /> },
  { id: 2, text: `Don't need to stay at home. We can leave your product even if you are not at home!`, slogan: 'locked door control', icon: <FaDoorOpen className="services__icon" /> },
  { id: 3, text: `You can pay by money or magic beans!`, slogan: 'fast payment', icon: <FaHandHoldingUsd className="services__icon" /> },
]

const Services = () => {

  const newServices = services.map(service => (
    <div key={service.id} className="services__item">
      {service.icon}
      <p className="services__text">{service.text}</p>
      <h3 className="services__slogan">{service.slogan}</h3>
    </div>
  ))

  return (
    <section className="services">
      {newServices}
    </section>
  );
}

export default Services;