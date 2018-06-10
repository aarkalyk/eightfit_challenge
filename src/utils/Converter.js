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

const displayStringForHeight = (height) =>
  height.preferredUnits === MetricUnits.cm
    ? `${height.centimiters}cm`
    : `${height.feet} ft ${height.inches} in`;

export const Converter = {
  cmToFeet,
  feetToCm,
  displayStringForHeight,
};
