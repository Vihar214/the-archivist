import { IconSymbol } from "@/components/ui/icon-symbol";
import { Image } from "expo-image";
import { Text, TouchableOpacity, View } from "react-native";
import { TBrowseProduct } from "../data";
import { Colors } from "@/constants/theme";

type Props = {
  product: TBrowseProduct;
};

export const BrowseProductCard = ({ product }: Props) => {
  return (
    <View className="w-[46%] mb-10">
      <View className="border border-neutral-300 relative mb-4">
        <Image
          source={product.image}
          style={{ width: "100%", aspectRatio: 3 / 4 }}
          contentFit="cover"
        />
        <TouchableOpacity className="absolute top-3 right-3 opacity-30">
          <IconSymbol name="heart" size={16} color={Colors.brand.primary} />
        </TouchableOpacity>
      </View>
      <Text 
        className="font-playfair text-lg text-primary-900 leading-tight mb-1" 
        numberOfLines={2}
      >
        {product.title}
      </Text>
      <Text className="text-[11px] font-bold tracking-widest text-secondary-500 uppercase">
        {product.price}
      </Text>
    </View>
  );
};
