import { Colors } from "@/constants/theme";
import { ScrollView, Text, View } from "react-native";
import { savedProducts } from "../data";
import { SavedLoadMore } from "./saved-load-more";
import { SavedProductCard } from "./saved-product-card";
import { SavedTabToggle } from "./saved-tab-toggle";

export const Saved = () => {
  return (
    <ScrollView
      className="flex-1"
      style={{ backgroundColor: Colors.brand.neutral }}
    >
      <View className="px-6 pt-10 pb-6">
        {/* Editorial Header */}
        <View className="mb-12 border-b border-neutral-300 pb-8">
          <Text className="font-playfair text-5xl text-primary-900 leading-tight tracking-tighter uppercase">
            SAVED ARCHIVE
          </Text>
          <Text
            className="mt-4 text-tertiary-500 leading-relaxed"
            style={{ maxWidth: 400 }}
          >
            A personal repository of enduring craft, curated by your hand. These
            objects represent the intersection of form, function, and history.
          </Text>
        </View>

        {/* Toggle Tab Bar */}
        <SavedTabToggle />

        {/* Asymmetric Grid - Column 1 */}
        <View className="flex-row flex-wrap justify-between gap-y-6">
          {savedProducts.map((product) => (
            <View
              key={product.id}
              className="w-[48%]"
              style={{
                marginBottom: 32,
              }}
            >
              <SavedProductCard product={product} />
            </View>
          ))}
        </View>

        {/* Load More Section */}
        <SavedLoadMore shownCount={savedProducts.length} totalCount={28} />
      </View>
    </ScrollView>
  );
};
