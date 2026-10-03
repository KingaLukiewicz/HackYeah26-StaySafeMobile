import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    borderRadius: 24,
    padding: 24,
    marginVertical: 10,
    boxShadow: "0px 12px 30px rgba(0, 0, 0, 0.08)",
    elevation: 5,
  },
  cardSafe: {
    backgroundColor: "#285c49",
  },
  cardAlert: {
    backgroundColor: "#a8433f",
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  eyebrow: {
    fontSize: 11,
    fontWeight: "700",
    color: "rgba(255, 255, 255, 0.8)",
    letterSpacing: 1.2,
  },
  iconBadge: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
  },
  badgeSafe: {
    backgroundColor: "rgba(255, 255, 255, 0.25)",
  },
  badgeAlert: {
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
  mainTitle: {
    fontSize: 32,
    fontWeight: "700",
    color: "#fff",
    letterSpacing: -0.8,
    marginVertical: 14,
  },
  locationRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginBottom: 20,
  },
  locationText: {
    fontSize: 14,
    color: "rgba(255, 255, 255, 0.9)",
    fontWeight: "500",
  },
  divider: {
    height: 1,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    marginBottom: 16,
  },
  footerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  footerText: {
    fontSize: 12,
    color: "rgba(255, 255, 255, 0.75)",
  },
  systemStatus: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  systemText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#fff",
  },
});
