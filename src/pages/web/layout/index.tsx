import React, { useEffect } from 'react';
import { testAsyncThunk } from '@/store/common/slice';
import { useDispatch } from 'react-redux';
import { useSelector } from '@/store/hooks';
// import { connect } from 'react-redux';

const WebLayout = () => {
    const signInModalVisible = useSelector(
        state => state.common.signInModalVisible
    );
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(testAsyncThunk({ account: 'liulib', password: '1234561' }));
    }, [dispatch]);
    return <div>{signInModalVisible ? 'true' : 'false'}</div>;
};

export default WebLayout;
