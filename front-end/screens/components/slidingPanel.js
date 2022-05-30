import Animated, {
  withSpring,
  useAnimatedStyle,
} from "react-native-reanimated";
import { Dimensions, StyleSheet, View, Text } from "react-native";

const screenWidth = Dimensions.get("screen").width;

function SlidingPanel({ height }) {
  const animatedStyles = useAnimatedStyle(() => {
    return {
      height: height,
      width: screenWidth,
    };
  });
  return (
    <Animated.View style={animatedStyles}>
      <Text>CONTACT</Text>
      <Text>CONTACT</Text>
      <Text>CONTACT</Text>
      <Text>CONTACT</Text>
    </Animated.View>
  );
}

const s = (props) =>
  StyleSheet.create({
    panel: {},
  });

export default SlidingPanel;
