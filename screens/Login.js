import React,{useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { ErrorMessage, Formik } from 'formik';
import * as yup from 'yup'
import { SocialIcon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import axios from "axios";
import { connect } from 'react-redux';
import Toast from 'react-native-simple-toast';

import Input from '../components/TextInput';
import Buttons from '../components/Buttons';
import styles from "./Login.style"
import { LOGIN_SUCCESS } from '../redux/action/actiontype';
import Waiting from '../components/Waiting';


const object1 = {
  bgcolor: 'black',
  color: 'white',
  topleftradius: 5,
  bottomleftradius: 5,
  toprightradius: 5,
  bottomrightradius: 5,
  width: "90%",
  marginVertical: 20
}

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email()
    .required("Email is a required field"),

  password: yup
    .string()
    .required("Please enter your password")
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Password must contain at least 8 characters, one uppercase, one number and one special case character"
    ),
})


function Login(props) {
  const [loading,setloading] = useState(false);

  const handleSubmit = (values) => {
    console.log(values, 'printinig')
  }

  const navigation = useNavigation();

  const submitform = async ({ email, password, }) => {
    setloading(true);

    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Accept': '*/*',
      }
    };

    const body = JSON.stringify({ email, password });
    console.log(body);

    try {
      const res = await axios.post('https://thenightmarketer-hiring.herokuapp.com/user/login', body, config)
      props.loginsuccess(res.data);
      setloading(false);
      Toast.show("Succesfull Login")
    }
    catch (error) {
      setloading(false);
      Toast.show("invalid email or password")
    }
   
  }


  return (
    <View style={styles.maincontainer}>
    <Waiting visible={loading} />
      <Formik
        validationSchema={loginSchema}
        initialValues={{ email: '', password: '' }}
        onSubmit={submitform}
        style={{ backgroundColor: "black" }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <View style={styles.container}>

            <Text style={styles.title}>
              Welcome Back!
            </Text>

            <Text style={styles.description}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </Text>

            <Input
              placeholder="Email,phone or username"
              values={values.email}
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={handleChange('email')}
              error={touched.email && errors.email}
            />

            <Input
              placeholder="Password"
              error={touched.password && errors.password}
              values={values.password}
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry={true}
              onChangeText={handleChange('password')}
            />

            <View style={styles.logincon}>
              <View style={styles.loginbutton}>
                <TouchableOpacity
                  onPress={() => { navigation.navigate("Register") }}
                >

                  <Text style={styles.logintext}>Forgot Password?</Text>

                </TouchableOpacity>
              </View>
            </View>

            <Buttons title='Sign in' onPress={handleSubmit} obj={object1} />

          </View>
        )}

      </Formik>


      <View style={styles.line}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
          <View>
            <Text style={{ width: 50, textAlign: 'center' }}>OR</Text>
          </View>
          <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
        </View>
      </View>

      <View
        style={styles.socialLogin}>
        <View style={{ flexDirection: 'row' }}>

          <View style={{ flexDirection: 'column' }}>
            <SocialIcon
              type="google"
              onPress={() => {
                alert('google');
              }}
            />
          </View>

          <View style={{ flexDirection: 'column' }}>
            <SocialIcon
              type="facebook"
              onPress={() => {
                alert('facebook');
              }}
            />
          </View>

          <View style={{ flexDirection: 'column' }}>
            <SocialIcon
              type="twitter"
              onPress={() => {
                alert('apple');
              }}
            />
          </View>

        </View>
      </View>

      <View style={styles.Register}>
        <View >
          <Text style={styles.Regcon}>Don't have an account ?</Text>
        </View>
        <View >
          <TouchableOpacity
            onPress={() => { navigation.navigate("Register") }}
          >
            <Text style={styles.Regtext}>Register now</Text>
          </TouchableOpacity>
        </View>
      </View>

    </View>
  );
}


const mapStateToProps = state => ({
  isAuthenticated: state.isAuthenticated
})

const mapDispatchToProps = (dispatch) => {
  return {

    loginsuccess: (res) => dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    }),

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);