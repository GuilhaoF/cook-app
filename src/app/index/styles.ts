import { theme } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  title: {
    fontSize: theme.fonts.size.heading.lg,
    lineHeight: 40,
    marginTop: 42,
    fontFamily: theme.fonts.family.bold,
  },
  subTitle: {
    fontFamily: theme.fonts.family.regular,
  },
  message: {
    fontSize: theme.fonts.size.body.md,
    fontFamily: theme.fonts.family.regular,
    color: theme.colors.gray_400,
    marginTop: 12,
    marginBottom: 38,
  },
  ingredient: {
    flexWrap: "wrap",
    flexDirection: "row",
    paddingBottom: 200,
    gap: 12,
  },
});
