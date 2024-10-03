import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Pressable,
  Alert
} from "react-native";
import React from "react";
import { useState } from "react";

function Login(): React.JSX.Element {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [nextVisible, setNextVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  // ตรวจสอบการกรอกข้อมูล
  const validateInputs = () => {
    // กรอกข้อมูลครบทุกช่องไหม
    if (!name || !password) {
      Alert.alert("แจ้งเตือน", "\nกรุณากรอกข้อมูลให้ครบทุกช่อง");
      return false;
    }
    /* const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      Alert.alert("แจ้งเตือน", "\nรูปแบบอีเมลไม่ถูกต้อง");
      return false;
    } */

    return true;
  };

  return (
    <View style={styles.container}>
      {/* รูปโลโก้ */}
      <Image
        source={require("../assets/Images/Logo_Edit.png")}
        resizeMode="contain"
        style={styles.myImage}
      />
      <Text style={styles.TextLogin}>เข้าสู่ระบบ</Text>
      {/* ผู้ใช้*/}
      <Text style={styles.Text}>ชื่อผู้ใช้</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} />
      {/* รหัสผ่าน*/}
      <Text style={styles.Text}>รหัสผ่าน</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
      />
      <Text style={styles.rightText}>ลืมรหัสผ่าน?</Text>

      {/* Button ถัดไป*/}
      <View>
        <Pressable
          style={[styles.button, styles.buttonOpenLogin]}
          onPress={() => {
            if (validateInputs()) {
              setModalVisible(true);
              setNextVisible(true);
            }
          }}
        >
          <Text style={styles.textStyleLogin}>เข้าสู่ระบบ</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
  myImage: {
    width: "100%",
    height: 300,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 30,
  },
  TextLogin: {
    marginTop: 20,
    textAlign: "center",
    fontSize: 25,
    color: "#6b8d71",
    fontWeight: "bold",
  },
  Text: {
    fontSize: 20,
    color: "#6b8d71",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 50,
    marginRight: 50,
  },
  rightText: {
    textAlign: "right", // จัดแนวข้อความไปที่ขวาสุด
    fontSize: 15,
    color: "#6b8d71",
    marginTop: 5,
    marginRight: 50,
  },
  button: {
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    elevation: 1,
    marginTop: 40,
    marginLeft: 50,
    marginRight: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonOpenLogin: {
    backgroundColor: "#6b8d71",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyleLogin: {
    color: "white",
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
    margin: 50,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  container: {
    flex: 1, // ทำให้ View ขยายเต็มหน้าจอ
    justifyContent: "center",
    backgroundColor: "white", // ตั้งค่าสีพื้นหลังเป็นสีขาว
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
    marginLeft: 50,
    marginRight: 50,
    paddingHorizontal: 15,
    backgroundColor: "#f9f9f9",
  },
  buttonSubmit: {
    marginTop: 20,
    padding: 10,
    alignItems: "center",
  },
  genderContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 5,
    marginBottom: 20,
    marginLeft: 50,
    marginRight: 50,
  },
  genderButton: {
    flex: 1,
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#e0e0e0",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
  },
  genderButtonSelected: {
    backgroundColor: "#6b8d71",
  },
  genderText: {
    fontSize: 18,
    color: "#000",
  },
});
