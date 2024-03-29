import React from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList, Text, View } from 'react-native';

const Servicesreqhistory = ({ navigation }) => {
  const { t, i18n } = useTranslation();
  var requestnum = 1;
  return (
    <>
      <FlatList
        data={[
          {
            id: 1,
            procedurekind: 'Procedurekind',
            date: 'Date',
            price: 'Price',
            description: 'Description',
            Attach: {
              card: [{ name: 'file3' }, { name: 'file2' }, { name: 'file1' }],
              addtionalAttach: [
                { name: 'file3' },
                { name: 'file2' },
                { name: 'file1' },
              ],
            },
          },
          {
            id: 2,
            procedurekind: 'Procedurekind2',
            date: 'Date2',
            price: 'Price2',
            description: 'Description2',
            Attach: {
              card: [{ name: 'file3' }, { name: 'file2' }, { name: 'file1' }],
              addtionalAttach: [
                { name: 'file3' },
                { name: 'file2' },
                { name: 'file1' },
              ],
            },
          },
          {
            id: 3,
            procedurekind: 'Procedurekind3',
            date: 'Date3',
            price: 'Price3',
            description: 'Description3',
            Attach: {
              card: [{ name: 'file3' }, { name: 'file2' }, { name: 'file1' }],
              addtionalAttach: [
                { name: 'file3' },
                { name: 'file2' },
                { name: 'file1' },
              ],
            },
          },
        ]}
        scrollEnabled={true}
        renderItem={({ item, index }) => (
          <View
            style={{
              backgroundColor: 'white',
              marginTop: 15,
              marginBottom: 15,
              borderRadius: 40,
              marginLeft: 10,
              marginRight: 10,
            }}>
            <View
              style={{
                borderBottomColor: 'black',
                borderBottomWidth: 1.5,
                width: '100%',
                marginLeft: 20,
                width: 350,
                marginVertical: 10,
              }}
            />
            <Text
              style={{
                fontSize: 25,
                color: 'black',
                marginLeft: 100,
                marginTop: 5,
              }}>
              Request Number{item.id}
            </Text>
            <Text style={{ color: 'black', fontSize: 20, marginLeft: 30 }}>
              {item.procedurekind}
            </Text>
            <Text style={{ color: 'black', fontSize: 20, marginLeft: 30 }}>
              {item.date}
            </Text>
            <Text style={{ color: 'black', fontSize: 20, marginLeft: 30 }}>
              {item.price}
            </Text>
            <Text style={{ color: 'black', fontSize: 20, marginLeft: 30 }}>
              {item.description}
            </Text>
            <View
              style={{
                borderWidth: 3,
                width: 350,
                marginLeft: 20,
                marginBottom: 10,
                borderRadius: 20,
              }}>
              <Text style={{ color: 'black', fontSize: 20, marginLeft: 30 }}>
                card
              </Text>
              <FlatList
                data={item.Attach.card}
                renderItem={({ item, index }) => (
                  <View>
                    <Text
                      style={{ color: 'black', fontSize: 15, marginLeft: 30 }}>
                      #{item.name}
                    </Text>
                  </View>
                )}
              />
            </View>
            <View
              style={{
                borderWidth: 3,
                width: 350,
                marginLeft: 20,
                marginBottom: 10,
                borderRadius: 20,
              }}>
              <Text style={{ color: 'black', fontSize: 20, marginLeft: 30 }}>
                addtional attachments
              </Text>
              <FlatList
                data={item.Attach.addtionalAttach}
                renderItem={({ item, index }) => (
                  <Text
                    style={{ color: 'black', fontSize: 15, marginLeft: 30 }}>
                    #{item.name}
                  </Text>
                )}
              />
            </View>

            <View
              style={{
                borderBottomColor: 'black',
                borderBottomWidth: 1.5,
                marginLeft: 20,
                width: 350,
                marginVertical: 10,
              }}
            />
          </View>
        )}
      />
    </>
  );
};

export default Servicesreqhistory;
