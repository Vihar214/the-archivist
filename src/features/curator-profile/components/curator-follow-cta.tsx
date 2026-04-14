import { Colors } from "@/constants/theme";
import { Text, TouchableOpacity, View } from "react-native";

type CuratorFollowCtaProps = {
  curatorName: string;
  onFollow?: () => void;
};

export const CuratorFollowCta = ({
  curatorName,
  onFollow,
}: CuratorFollowCtaProps) => {
  return (
    <View className="px-6 py-16 items-center">
      <Text
        style={{
          color: Colors.light.text,
          fontFamily: "PlayfairDisplay_700Bold",
        }}
        className="text-3xl text-center mb-6"
      >
        Stay updated with {curatorName}'s latest archival finds.
      </Text>
      <TouchableOpacity
        onPress={onFollow}
        style={{
          backgroundColor: Colors.brand.secondary,
        }}
        className="px-12 py-4 w-full md:w-auto"
      >
        <Text
          style={{
            color: Colors.light.surface,
            letterSpacing: 2,
          }}
          className="text-sm font-bold text-center"
        >
          FOLLOW CURATOR
        </Text>
      </TouchableOpacity>
    </View>
  );
};
