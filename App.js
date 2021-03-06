import React, { Component } from 'react';
import {Image} from 'react-native';
import { Container, Header, Footer, Content, Left, Body, Right, Title, Text, Icon } from 'native-base';

import ViewList from './app/ViewList';
import Foot from './app/Foot';

export default class ListExample extends Component {

  data = [
    {nama: 'Arief Yusron',lokasi: 'Pulau Gili Labak',gambar: 'https://aishasnews.files.wordpress.com/2017/06/2-indonesiaexpat-biz.jpg',waktu: '2 minutes ago'},
    {nama: 'Arief Yusron',lokasi: 'Pantai 9',gambar: 'https://cdn.idntimes.com/content-images/community/2017/11/pondok-untuk-menginap-di-pantai-sembilan-image-source-1024x576-32303072105b16c23f1d552149bacc99.jpg',waktu: '5 minutes ago'},
    {nama: 'Arief Yusron',lokasi: 'Pantai Kahuripan',gambar: 'https://visitsumenep.com/wp-content/uploads/2017/05/Pantai-Kahuripan-800x421.jpg',waktu: '2 Days ago'}
  ]

  foot = [
    'home',
    'search',
    'add',
    'chatboxes',
    'person'
  ]

  render() {
    return (
      <Container>
        <Header style={{backgroundColor:'white', height:47}}>
          <Left>
            <Icon style={{fontSize:25}} name='camera' />
          </Left>
          <Body>
            <Title style={{color: 'black'}}>bootgram</Title>
          </Body>
          <Right>
            <Icon style={{fontSize:25}} name='paper-plane' />
          </Right>
        </Header>
        <Content>
          {this.data.map((data, key)=> <ViewList key={key} data={data} />)}
        </Content>
        <Footer style={{backgroundColor:'white', height:47}}>
          <Body>
            {this.foot.map((data,key)=> <Foot key={key} nama={data} />)}
          </Body>
        </Footer>
      </Container>
    );
  }
}