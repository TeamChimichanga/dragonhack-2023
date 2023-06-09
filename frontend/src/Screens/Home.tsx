import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { theme } from "../theme";
import { useAppStore } from "../store/app-store";
import Pet from "../components/Pet";
import { PetColors } from "../data/types";
import Score from "../components/Score";
import EditBtn from "../components/EditBtn";
import CameraBtn from "../components/CameraBtn";
import HappinessMeter from "../components/HappinessMeter";
import { MainStackParams } from "../Main";
import { StackScreenProps } from "@react-navigation/stack";

type Props = StackScreenProps<MainStackParams, "Home">;

const Home = ({ navigation }: Props) => {
  const { pet } = useAppStore();

  if (!pet?.data) {
    return null; // loading
  }

  return (
    <View style={styles.container}>
      <View style={styles.topGreenBackground}>
        <HappinessMeter happiness={pet?.data?.happinessLevel} />
        <Text style={styles.title}>{pet?.data?.name}</Text>
      </View>
      <View style={styles.row}>
        <Score score={pet?.data?.co2emission} />
        <EditBtn />
      </View>
      <View style={styles.pet}>
        <Pet color={pet?.data?.color || PetColors.GREEN} />
      </View>
      <CameraBtn onPress={() => navigation.navigate("Scan")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    gap: 18,
    paddingBottom: 18,
  },
  topGreenBackground: {
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: theme.colors.g1,
    paddingVertical: 40,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  pet: {
    minHeight: 250,
  },
  title: {
    color: theme.colors.white,
    fontSize: 32,
    lineHeight: 32,
    fontWeight: "700",
    marginTop: 15,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    alignItems: "center",
  },
  subtitle: {
    color: theme.colors.b1,
    fontSize: 24,
    lineHeight: 32,
    fontWeight: "700",
  },
  button: {
    backgroundColor: theme.colors.o2,
    borderRadius: 44,
    paddingHorizontal: 28,
    paddingVertical: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: theme.colors.white,
    fontSize: 18,
    lineHeight: 16,
    fontWeight: "600",
  },
  input: {
    height: 60,
    padding: 15,
    width: "90%",
    borderRadius: 44,
    backgroundColor: theme.colors.gray,
    fontSize: 18,
  },
});

export default Home;
