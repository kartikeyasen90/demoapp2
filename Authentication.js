import React, { useEffect } from 'react'
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';

import { checkAuthenticated, load_user } from './redux/action/authenaction';
import ToHome from './Redirect';


const AuthCheck = (props) => {

    useEffect(() => {
        const fetchData = () => {
            try {
                props.checkAuthenticated();
            } catch (err) {
            }
        }
        fetchData();
    }, []);

    return (
        <View style={{ flex: 1 }}>
            <ToHome />
        </View>
    )
}

export default connect(null, { checkAuthenticated, load_user })(AuthCheck);