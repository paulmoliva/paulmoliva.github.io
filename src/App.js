import React, { useState } from "react";
import {AutoComplete, Card, Col, Layout, Row} from 'antd';
import 'antd/dist/antd.css';

import './App.css';
import {players, feats} from './feats';

const {Header, Footer, Sider, Content} = Layout;

function App() {
  let [selectedPlayer, setSelectedPlayer] = useState(null);
  const [options, setOptions] = useState([]);
  const [searchTerm, setsearchTerm] = useState('');

  const onSearch = (searchText) => {
    setsearchTerm(searchText)
    setOptions(
      !searchText ? [] : [getPlayerNames().filter((player) => player.value.includes(searchText))],
    );
  };

  function onSelect(player) {
    setSelectedPlayer(player);
    setsearchTerm('');
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

  return (
    <Layout theme={'dark'} style={{minHeight: '100vh'}}>
      <Header>
        <AutoComplete
          style={{ width: 200 }}
          options={getPlayerNames()}
          onSelect={setSelectedPlayer}
          placeholder="Enter a player name"
          filterOption={(inputValue, option) =>
            option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
          }
        />
      </Header>
      <Content>
        <div className="App">
          {selectedPlayer && showCharacter(selectedPlayer)}
        </div>
      </Content>
    </Layout>
  );
}

export default App;
