import React, { useState } from 'react';
import {BatteryUnknown, BatteryFull, Battery80, Battery50, Battery20} from '@material-ui/icons';
import {Chip} from '@material-ui/core'


const Battery = ({ charge }) => {
  // declare state for the charge of the battery as a number
  const [charge, setCharge] = useState(props.charge);
  // declare state for the Material.ui icon which matches the battery charge
  const [icon, setIcon] = useState(<BatteryUnknown />);

  // array of Material.ui battery icons
  const charges = [
    {percent: 100, icon: <BatteryFull />},
    {percent: 80, icon: <Battery80 />},
    {percent: 50, icon: <Battery50 />},
    {percent: 20, icon: <Battery20 />}    
  ]
  
  // set the battery icon to match the passed in charge number
  const switchIcon = (charge) => {
    if(charge === null) {
      setIcon(<BatteryUnknown />)
    } else {
      // find the battery icon with that matches the charge
      var closest = [100, 80, 50, 20].reduce((a, b) => {
        return Math.abs(b - charge) < Math.abs(a - charge) ? b : a;
      })

      // set the battery icon to match the charge
      charges.map((charge) => {
        if (closest === charge.percent) {
          setIcon(charge.icon)
        }
      })
    }
  }

  return (
    <Chip icon={icon} label={`${charge}%`} />     
  )
}

export default Battery