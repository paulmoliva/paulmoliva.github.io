import React, { useState } from "react";
import  {AutoComplete, Card, Col, Layout, Menu, Row} from 'antd';
import 'antd/dist/antd.css';

import './App.css';
import {players, feats} from './feats';

const {Header, Footer, Sider, Content} = Layout;

function App() {
  let [selectedPlayer, setSelectedPlayer] = useState(null);
  const [options, setOptions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showRules, setShowRules] = useState(false);
  const [showBoard, setShowBoard] = useState(false);

  const onSearch = (searchText) => {
    setSearchTerm(searchText)
    setOptions(
      !searchText ? [] : [getPlayerNames().filter((player) => player.value.includes(searchText))],
    );
  };

  function onSelect(player) {
    setSelectedPlayer(player);
    setSearchTerm('');
  }

  function getPlayerNames() {
    return Object.keys(players).map((name) => ({ label: players[name].name, value: name }));
  }

  function showFeat(name) {
    const feat = feats[name];
    return (
      <Col lg={8} sm={16} justify={'start'}>
        <Card title={feat.name} style={{height: '100%'}}>
          <p style={{textAlign: 'start'}}><i>{feat.description}</i></p>
          {feat.effects.map((effect) => <p style={{textAlign: 'start'}}>{effect}</p> )}
        </Card>
      </Col>
    )
  }

  function showCharacter(name) {
    const player = players[name];
    if (!player) return;

    return (
      <div className={'flex-column'}>
        <h1>{player.name}</h1>
        <div className="flex-row">
          <strong className={'padded-stats'}>
            +{player.strength} Strength
          </strong>
          <strong className={'padded-stats'}>
            +{player.dexterity} Dexterity
          </strong>
        </div>
        <Row gutter={16} justify={'center'}>
          {player.feats.map(showFeat)}
        </Row>
      </div>
    )
  }

  function rulesOnClick() {
    setSelectedPlayer(null);
    setShowBoard(false);
    setShowRules(true);
  }

  function boardOnClick() {
    setSelectedPlayer(null);
    setShowRules(false);
    setShowBoard(true);
  }

  function renderRules() {
    return (
      <iframe
        src="https://docs.google.com/document/d/e/2PACX-1vQrM4aZhQ4rqz8Z8r4ZKa9uu1qAJA8upOWyORyVhfPyVuzSb-jSJDjQ8NXtUuF329C0vFYIRltS2pHw/pub?embedded=true"
        style={{width: '90vh', height: '95vh'}}
      ></iframe>
    )
  }

  function renderBoard() {
    return (
      <div style={{height: '90vh', width: '90vw', overflow: 'hidden', margin: '0 auto'}}>
        <iframe src={'https://docs.google.com/presentation/d/1jmTqB1F631Ttg19ljCt6Rr5ifdRqxTnfRGuFz554MAI/edit?usp=sharing'}
        style={{top: '-105px', left: '-222px', minWidth: '100%', minHeight: '100%', position: 'relative'}}></iframe>
      </div>
    )
  }

  return (
    <Layout theme={'dark'} style={{minHeight: '100vh'}}>
      <Header>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <AutoComplete
            style={{ width: 200 }}
            options={getPlayerNames()}
            onSelect={onSelect}
            placeholder="Enter a player name"
            filterOption={(inputValue, option) =>
              option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
            }
            value={searchTerm}
            onChange={setSearchTerm}
          />
          <Menu.Item key="1" onClick={rulesOnClick}>Rules</Menu.Item>
          <Menu.Item key="2" onClick={boardOnClick}>Board</Menu.Item>
        </Menu>
      </Header>
      <Content>
        <div className="App">
          {selectedPlayer && showCharacter(selectedPlayer)}
          {showRules && renderRules()}
          {showBoard && renderBoard()}
        </div>
      </Content>
    </Layout>
  );
}

export default App;
