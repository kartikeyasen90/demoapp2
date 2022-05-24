import { Dimensions } from "react-native"

 const SLIDER_WIDTH = Dimensions.get('window').width + 80
 const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8)



export default {
    SLIDER_WIDTH:SLIDER_WIDTH,
    ITEM_WIDTH:ITEM_WIDTH,
  
}
