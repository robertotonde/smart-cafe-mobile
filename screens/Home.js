import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React, { useState, useEffect} from "react";
import HeaderTabs from "../components/HeaderTabs";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import RestaurantItems, {
  localRestaurants,
} from "../components/RestaurantItems";


const YELP_API_KEY =
  "bdRJutLhFAQJ36t7b89CWjHFBU4OKzjt9wvZzcY-nkgmvTqlNMjZWV1eG7iBQ9R74SyfxRg9LWnBAkZY06BtAZAe4d2dfX-2vuX8a1l5V7foctHfX9UKEyoM5ts3YXYx";

//

export default function Home() {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);

 
  // const getRestaurantFromYelp = () => {
  //   const yelpUrl =
  //     "https://api.yelp.com/v3/businesses/WavvLdfdP6g8aZTtbBQHTw";

  //   const apiOptions = {
  //     headers: {
  //       Authorization: `Bearer ${YELP_API_KEY}`,
  //     },
  //   };
  //   return fetch(yelpUrl, apiOptions)
  //     .then((res) => res.json())
  //     .then((json) => setRestaurantData(json.businesses));
  // };

  // useEffect (() => {
  //   getRestaurantFromYelp();
  // },[])

  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs />
        <SearchBar />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems  restaurantData={restaurantData}/>
      </ScrollView>
    </SafeAreaView>
  );
}
