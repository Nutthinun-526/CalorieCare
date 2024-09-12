import {
  StyleSheet,
  Text,
  Image,
  View,
  Pressable,
  Modal,
  Button,
} from "react-native";
import React, { useState } from "react";
import Apply from "./Apply";
import Login from "./Login";

const Logo = ({ navigation, route }: any): React.JSX.Element => {
  const [modalVisible, setModalVisible] = useState(false);
  const [applyVisible, setApplyVisible] = useState(false);
  const [logInVisible, setlogInVisible] = useState(false);

  // กำหนดให้สามารถไป Apply.tsx
  const gotoApply = () => {
    navigation.navigate("Apply");
  };

  // กำหนดให้สามารถไป Login.tsx
  const gotoLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      {/* รูปโลโก้ */}
      <Image
        source={require("../assets/Images/Logo_Edit.png")}
        resizeMode="contain"
        style={styles.myImage}
      />

      {/* เว้นบรรทัด */}
      <Text style={styles.Line}></Text>

      {/* Apply Button */}
      <Pressable
        style={[styles.button, styles.buttonOpenApply]}
        onPress={() => {
          setModalVisible(true);
          gotoApply(); // เรียกใช้ฟังก์ชันการเปลี่ยนหน้าจอ
        }}
      >
        <Text style={styles.textStyleApply}>เริ่มสมัครเลย</Text>
      </Pressable>

      <Text style={styles.LineTwo}>
        ----------------------- หรือ -----------------------
      </Text>

      {/* Log In Button */}
      <Pressable
        style={[styles.button, styles.buttonOpenLogIn]}
        onPress={() => {
          setModalVisible(true);
          gotoLogin(); // เรียกใช้ฟังก์ชันการเปลี่ยนหน้าจอ
        }}
      >
        <Text style={styles.textStyleLogIn}>เข้าสู่ระบบ</Text>
      </Pressable>
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({
  myImage: {
    width: "100%",
    height: 300,
    marginTop: 50,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 30,
  },
  Line: {
    marginTop: 40,
  },
  button: {
    borderRadius: 5,
    paddingVertical: 10, // ใช้ paddingVertical แทน padding เพื่อจัดตำแหน่งในแนวตั้ง
    paddingHorizontal: 20, // ใช้ paddingHorizontal เพื่อจัดตำแหน่งในแนวนอน
    elevation: 1,
    marginLeft: 50,
    marginRight: 50,
    alignItems: "center", // จัดตำแหน่งในแนวนอน
    justifyContent: "center", // จัดตำแหน่งในแนวตั้ง
  },
  buttonOpenApply: {
    backgroundColor: "#6b8d71",
  },
  buttonOpenLogIn: {
    backgroundColor: "#ffffff", // พื้นหลังสีขาว
    borderColor: "#6b8d71", // ขอบสีเขียว
    borderWidth: 2, // ความหนาของขอบ
  },
  /* buttonClose: {
    backgroundColor: "#2196F3",
  }, */
  textStyleApply: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
  },
  textStyleLogIn: {
    color: "#6b8d71",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
  },
  LineTwo: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 50,
    marginRight: 50,
    fontSize: 20,
    color: "#6b8d71",
    textAlign: "center",
  },
  centeredView: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },
  modalView: {
    backgroundColor: "white",
  },
  container: {
    flex: 1, // ทำให้ View ขยายเต็มหน้าจอ
    backgroundColor: "white", // ตั้งค่าสีพื้นหลังเป็นสีขาว
  },
});
