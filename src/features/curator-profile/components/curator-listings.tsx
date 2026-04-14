import { router } from "expo-router";
import { Dimensions, Text, View } from "react-native";
import { TCuratorListing } from "../data";
import { CuratorListingCard } from "./curator-listing-card";

const { width } = Dimensions.get("window");
const isWide = width >= 768;

type CuratorListingsProps = {
  listings: TCuratorListing[];
};

export const CuratorListings = ({ listings }: CuratorListingsProps) => {
  if (isWide) {
    return (
      <View className="grid grid-cols-12 gap-8">
        {listings.map((listing, index) => {
          const isWideCard = index % 3 === 0;
          const offsetClass = index % 3 === 1 ? "-mt-12" : index % 3 === 2 ? "-mt-24" : "";

          return (
            <View
              key={listing.id}
              className={`col-span-7 ${offsetClass} ${!isWideCard ? "col-start-1" : ""}`}
            >
              <CuratorListingCard
                {...listing}
                onPress={() => router.push(`/product-detail/${listing.id}`)}
              />
            </View>
          );
        })}
      </View>
    );
  }

  return (
    <View className="flex-col gap-4">
      {listings.map((listing) => (
        <CuratorListingCard
          key={listing.id}
          {...listing}
          onPress={() => router.push(`/product-detail/${listing.id}`)}
        />
      ))}
    </View>
  );
};
