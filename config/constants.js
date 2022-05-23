import { Dimensions } from "react-native"

 const SLIDER_WIDTH = Dimensions.get('window').width + 80
 const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8)

 const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

console.log(width);
console.log(height);

export default {
    SLIDER_WIDTH:SLIDER_WIDTH,
    ITEM_WIDTH:ITEM_WIDTH,
    h:height/859.8,
    w:(width/411.4),
}