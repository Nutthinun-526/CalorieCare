import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Pressable,
  Alert,
} from "react-native";
import React from "react";
import { useState } from "react";

function Apply(): React.JSX.Element {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [nextVisible, setNextVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  // เช็คการกรอกข้อมูล
  const validateInputs = () => {
    // กรอกข้อมูลครบทุกช่องไหม
    if (!name || !email || !password || !gender) {
      Alert.alert("แจ้งเตือน", "\nกรุณากรอกข้อมูลให้ครบทุกช่อง");
      return false;
    }

    // ตรวจสอบรูปแบบอีเมล
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      Alert.alert("แจ้งเตือน", "\nรูปแบบอีเมลไม่ถูกต้อง");
      return false;
    }

    return true;
  };

  // ช่องกรอกข้อมูล
  return (
    <View style={styles.container}>
      {/* รูปโลโก้ */}
      <Image
        source={require("../assets/Images/Logo_Edit.png")}
        resizeMode="contain"
        style={styles.myImage}
      />

      <Text style={styles.TextApply}>สมัครสมาชิก</Text>

      {/* ผู้ใช้*/}
      <Text style={styles.Text}>ชื่อผู้ใช้</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} />

      {/* อีเมล*/}
      <Text style={styles.Text}>อีเมล</Text>
      <TextInput style={styles.input} value={email} onChangeText={setEmail} />

      {/* รหัสผ่าน*/}
      <Text style={styles.Text}>รหัสผ่าน</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
      />

      {/* เพศ*/}
      <Text style={styles.Text}>เพศ</Text>
      <View style={styles.genderContainer}>
        <TouchableOpacity
          style={[
            styles.genderButton,
            gender === "male" && styles.genderButtonSelected,
          ]}
          onPress={() => setGender("male")}
        >
          <Text style={styles.genderText}>เพศชาย</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.genderButton,
            gender === "female" && styles.genderButtonSelected,
          ]}
          onPress={() => setGender("female")}
        >
          <Text style={styles.genderText}>เพศหญิง</Text>
        </TouchableOpacity>
      </View>

      {/* Button ถัดไป*/}
      <View>
        <Pressable
          style={[styles.button, styles.buttonOpenApply]}
          onPress={() => {
            if (validateInputs()) {
              setModalVisible(true);
              setNextVisible(true);
            }
          }}
        >
          <Text style={styles.textStyleApply}>ถัดไป</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default Apply;

const styles = StyleSheet.create({
  icons: {
    fontSize: 25,
    color: "#6b8d71",
    fontWeight: "bold",
    marginLeft: 20,
    marginBottom: 10,
  },
  myImage: {
    width: "100%",
    height: 250,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 30,
  },
  TextApply: {
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
  button: {
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    elevation: 1,
    marginLeft: 50,
    marginRight: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonOpenApply: {
    backgroundColor: "#6b8d71",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyleApply: {
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
    backgroundColor: "white",
    justifyContent: "center",
    padding: 20,
    width: "100%",
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
