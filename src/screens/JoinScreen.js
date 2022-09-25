import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, PermissionsAndroid,StatusBar } from 'react-native';

import { useCameraDevices, Camera } from 'react-native-vision-camera';
import { useScanBarcodes, BarcodeFormat } from 'vision-camera-code-scanner';
import { RNHoleView } from 'react-native-hole-view';

const JoinScreen = () => {
  const [hasPermission, setHasPermission] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isScanned, setIsScanned] = useState(false);
  const [barcode, setBarcode] = React.useState('');
  

  
  const [frameProcessor, barcodes] = useScanBarcodes([
    BarcodeFormat.ALL_FORMATS, // You can only specify a particular format
]);
  console.log(barcodes);
  const checkCameraPermission = async () => {
    setLoading(true);
    const status = await Camera.getCameraPermissionStatus();
    setHasPermission(status === 'authorized');
    setLoading(false);
  };

  const renderQR = () => {
    if (loading) {
      return <ActivityIndicator size='large' />;
    }
    else {
      return(
        device != null &&
          hasPermission && (
            <>
              
              <Camera
                style={StyleSheet.absoluteFill}
                device={device}
                isActive={!isScanned}
                frameProcessor={frameProcessor}
                frameProcessorFps={5}
                audio={false}
              />
             <RNHoleView
                  holes={[
                    {
                      x:110,
                      y: 210,
                      width: 200,
                      height: 200,
                      borderRadius: 10,
                    },
                  ]}
                  style={styles.rnholeView}
                />
            </>
          )
      );
    }
  }

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: " Camera Permission ",
          message:
            "Pay and GoApp needs access to your camera " +
            "so you can scan QR code.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        setHasPermission(true);
      } else {
        setHasPermission(false);
      }
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
    checkCameraPermission();
    if (!hasPermission) {
      requestCameraPermission();
    }
  }, []);

  useEffect(() => {
    toggleActiveState();
    return () => {
      barcodes;
    };
  }, [barcodes]);

  const toggleActiveState = async () => {
    if (barcodes && barcodes.length > 0 && isScanned === false) {
      setIsScanned(true);
      // setBarcode('');
      barcodes.forEach(async (scannedBarcode) => {
        if (scannedBarcode.rawValue !== '') {
          setBarcode(scannedBarcode.rawValue);
          Alert.alert(barcode);
        }
      });
    }
  };
  const devices = useCameraDevices();
  const device = devices.back;
  
  

  return (
   <View>
    {renderQR()}
   </View>
    
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rnholeView: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
})

export default JoinScreen;