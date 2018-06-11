import { MetricUnits } from './constants';

const cmToFeet = (cm) => {
  let inches = (cm * 0.393700787).toFixed(0);
  const feet = Math.floor(inches / 12);
  inches = inches % 12;
  return { inches, feet };
};

const feetToCm = (feet, inches) => {
  const cm = feet * 30.48 + inches * 2.54;
  return Math.round(cm);
};

const displayStringForHeight = (height) => {
  if (height.preferredUnits === MetricUnits.cm) {
    return `${height.valueInCm}cm`;
  }

  const { feet, inches } = cmToFeet(height.valueInCm);
  return `${feet} ft ${inches} in`;
};

export const Converter = {
  cmToFeet,
  feetToCm,
  displayStringForHeight,
};
