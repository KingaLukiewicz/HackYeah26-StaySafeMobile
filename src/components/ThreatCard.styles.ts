import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  threatCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: 13,
    borderWidth: 1,
    borderColor: "#e0e7e3",
    backgroundColor: "#white",
    borderRadius: 18,
    padding: 13,
    marginBottom: 12,
  },
  threatCardSelected: {
    borderColor: "#4f7565",
    backgroundColor: "#f8fbf9",
  },
  threatIcon: {
    display: "flex",
    width: 44,
    height: 44,
    flexShrink: 0,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 14,
  },

  toneRed: { color: "#bd3d35", backgroundColor: "#ffe8e4" },
  toneOrange: { color: "#b9622c", backgroundColor: "#fff0e1" },
  toneBlue: { color: "#3d6d8c", backgroundColor: "#e8f2f8" },
  tonePurple: { color: "#665f8e", backgroundColor: "#efedf8" },

  textContainer: {
    minWidth: 0,
    flex: 1,
  },
  title: {
    fontSize: 15,
    fontWeight: "600",
    color: "#202c28",
  },
  description: {
    marginTop: 2,
    fontSize: 12,
    lineHeight: 16,
    color: "#77807d",
  },
  selectionDot: {
    display: "flex",
    width: 22,
    height: 22,
    flexShrink: 0,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#cbd4d0",
    borderRadius: 999,
  },
  selectionDotActive: {
    borderColor: "#35614f",
    backgroundColor: "#35614f",
  },
});
