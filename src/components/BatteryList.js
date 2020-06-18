import React, { useState } from 'react';
import {BatteryUnknown, BatteryFull, Battery80, Battery50, Battery20} from '@material-ui/icons';
import Battery from './Battery'

const BatteryList = ({ charges }) => {
  // Declare state which stores and array of battery charges as numbers

  const displayCharges = (chargeArray) => {
    var batteryArray = chargeArray.map((charge) => {
      return <Battery charge={charge} />
      }
    )
    console.log(batteryArray)
    return batteryArray
  }

  return (
    <div>
      {(var) = displayCharges}
    </div>
  )
}

export default BatteryList