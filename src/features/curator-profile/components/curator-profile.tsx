import { Colors } from "@/constants/theme";
import { useState } from "react";
import { ScrollView, View } from "react-native";
import { TCuratorProfile } from "../data";
import { CuratorAboutTab } from "./curator-about-tab";
import { CuratorFollowCta } from "./curator-follow-cta";
import { CuratorHero } from "./curator-hero";
import { CuratorInfo } from "./curator-info";
import { CuratorListings } from "./curator-listings";
import { CuratorQuote } from "./curator-quote";
import { CuratorReviewsTab } from "./curator-reviews-tab";
import { CuratorTabs } from "./curator-tabs";
import { tabs } from "../data";

type CuratorProfileProps = {
  curator: TCuratorProfile;
};

export const CuratorProfile = ({ curator }: CuratorProfileProps) => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const handleFollow = () => {
    console.log(`Following ${curator.name}`);
  };

  return (
    <ScrollView
      style={{ backgroundColor: Colors.brand.neutral }}
      contentContainerStyle={{ paddingBottom: 96 }}
    >
      <CuratorHero portrait={curator.portrait} />

      <View className="px-6 md:px-12 -mt-20 relative z-10">
        <CuratorInfo
          role={curator.role}
          name={curator.name}
          location={curator.location}
          stats={curator.stats}
        />
      </View>

      <View className="px-6 md:px-12 mt-12">
        <CuratorQuote quote={curator.quote} author={curator.quoteAuthor} />
      </View>

      <View className="mt-12">
        <View className="px-6 md:px-12">
          <CuratorTabs
            tabs={tabs}
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />
        </View>

        <View className="px-6 md:px-12 mt-8">
          {activeTab === "LISTINGS" && (
            <CuratorListings listings={curator.listings} />
          )}
          {activeTab === "ABOUT" && (
            <CuratorAboutTab
              bio={curator.bio}
              approach={curator.approach}
              expertise={curator.expertise}
            />
          )}
          {activeTab === "REVIEWS" && (
            <CuratorReviewsTab reviews={curator.reviews} />
          )}
        </View>
      </View>

      <CuratorFollowCta
        curatorName={curator.name.split(" ")[0]}
        onFollow={handleFollow}
      />
    </ScrollView>
  );
};
