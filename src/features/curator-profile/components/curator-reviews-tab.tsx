import { Colors } from "@/constants/theme";
import { Text, View } from "react-native";
import { TCuratorReview } from "../data";

type CuratorReviewsTabProps = {
  reviews: TCuratorReview[];
};

export const CuratorReviewsTab = ({ reviews }: CuratorReviewsTabProps) => {
  return (
    <View className="px-6 pt-6 gap-6">
      {reviews.map((review) => (
        <View
          key={review.id}
          style={{ borderBottomColor: Colors.light.border }}
          className="border-b pb-5 gap-3"
        >
          <View className="flex-row justify-between items-center">
            <View className="flex-row items-center gap-3">
              <View
                style={{
                  backgroundColor: Colors.palette.neutral100,
                }}
                className="w-10 h-10 items-center justify-center"
              >
                <Text
                  style={{
                    color: Colors.light.text,
                    fontFamily: "PlayfairDisplay_700Bold",
                  }}
                  className="text-sm"
                >
                  {review.name.charAt(0)}
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    color: Colors.light.text,
                    fontFamily: "PlayfairDisplay_700Bold",
                  }}
                  className="text-base"
                >
                  {review.name}
                </Text>
                <Text
                  style={{
                    color: Colors.light.textSecondary,
                    letterSpacing: 1,
                  }}
                  className="text-xs"
                >
                  {review.date}
                </Text>
              </View>
            </View>
            <View className="flex-row gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Text
                  key={i}
                  style={{
                    color:
                      i < review.rating
                        ? Colors.brand.secondary
                        : Colors.light.border,
                  }}
                  className="text-sm"
                >
                  ★
                </Text>
              ))}
            </View>
          </View>
          <Text
            style={{
              color: Colors.light.textSecondary,
              lineHeight: 24,
            }}
            className="text-sm leading-6"
          >
            {review.text}
          </Text>
        </View>
      ))}
    </View>
  );
};
