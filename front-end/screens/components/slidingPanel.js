import Animated, {
  withSpring,
  useAnimatedStyle,
} from "react-native-reanimated";
import { Dimensions, StyleSheet, View, Text } from "react-native";

const screenWidth = Dimensions.get("screen").width;
const screenHeight = Dimensions.get("screen").height;

function SlidingPanel({}) {
  const animatedStyles = useAnimatedStyle(() => {
    return {};
  });
  return (
    <Animated.View style={[s.panel, animatedStyles]}>
      <Text>CONTACT</Text>
      <Text>CONTACT</Text>
      <Text>CONTACT</Text>
      <Text>CONTACT</Text>
    </Animated.View>
  );
}

const s = (props) =>
  StyleSheet.create({
    panel: {
      position: "abslute",
      height: screenHeight,
      width: screenWidth,
      backgroundColor: "red",
    },
  });

export default SlidingPanel;
