import { StyleSheet } from "react-native";

const Login = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        backgroundColor: "#F8FAFC", // สีพื้นหลังโทนอวกาศ
    },
    spacing: {
        height: 50,
    },
    logo: {
        width: 180,
        height: 180,
        marginBottom: 15,
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#E0E1DD", // สีขาวอมฟ้า
        marginBottom: 15,
        textShadowColor: "rgba(173, 216, 230, 0.5)",
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 5,
    },
    input: {
        width: 260,
        height: 45,
        borderWidth: 1,
        borderColor: "#778DA9", // สีฟ้าอวกาศ
        borderRadius: 8,
        paddingHorizontal: 15,
        backgroundColor: "#ffffff", // สีเทาน้ำเงิน
        color: "#000", // สีข้อความ
        marginBottom: 12,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 2,
    },
    button: {
        backgroundColor: "#415A77", // สีฟ้าเข้มอวกาศ
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 8,
        shadowColor: "#ffffff",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.4,
        shadowRadius: 5,
        elevation: 4,
        marginTop: 10,
    },
    buttonText: {
        color: "#E0E1DD",
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        textShadowColor: "rgba(173, 216, 230, 0.5)",
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
    },
});

export default Login;
