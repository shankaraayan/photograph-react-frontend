import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const SettingDot = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuPress = () => {
    setShowMenu(true);
  };

  const handleModalClose = () => {
    setShowMenu(false);
  };

  return (
    <View>
      <TouchableOpacity onPress={handleMenuPress}>
        <Icon name="ellipsis1" size={25} color="#000" style={{ marginRight: 5 }} />
      </TouchableOpacity>

      <Modal visible={showMenu} animationType="fade" transparent={true} onRequestClose={handleModalClose}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <View style={{ backgroundColor: '#fff', padding: 20 }}>
            <TouchableOpacity onPress={handleModalClose}>
              <Text>Need to work here</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleModalClose}>
              <Text>Option 2</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleModalClose}>
              <Text>Option 3</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default SettingDot;
