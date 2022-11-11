export const getBackgroundColor = (score) => {
  switch (score) {
    case "A":
      return "#1A844C33";

    case "B":
      return "#8ACC4733";

    case "C":
      return "#EEE95D33";

    case "D":
      return "#F2CB2633";

    case "E": 
      return "#EF901B33";
  
    default:
      return "#E6E6E633";
  }
}