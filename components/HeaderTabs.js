import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";

export default function HeaderTabs() {
  const [activetab, setactivetab] = useState("Delivery");
  return (
    <View style={{ flexDirection: "row", alignSelf: "center" }}>
      <HeaderButton
        text="Delivery"
        btncolor="black"
        textcolor="white"
        activetab={activetab}
        setactivetab={setactivetab}
      />
      <HeaderButton
        text="Pickup"
        btncolor="white"
        textcolor="black"
        activetab={activetab}
        setactivetab={setactivetab}
      />
    </View>
  );
}

const HeaderButton = (props) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: props.activetab === props.text ? "black" : "white",
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 30,
      }}
      onPress={() => props.setactivetab(props.text)}
    >
      <Text
        style={{
          color: props.activetab === props.text ? "white" : "black",
          fontSize: 15,
          fontWeight: "900",
        }}
      >
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};
