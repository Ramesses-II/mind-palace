import React, { Component } from 'react';
import { Layout, Table, Form, Input, Select, Button, Divider, Badge } from 'antd';
import Texty      from 'rc-texty';
import QueueAnim  from 'rc-queue-anim';
import './App.css';

const { Header, Content, Footer } = Layout;
const { Option } = Select;
const FormItem = Form.Item;
const statusMap = ['default', 'processing'];
const status    = ['OFFLINE', 'ONLINE'];

const columns = [
  {
    title:      'NAME',
    dataIndex:  'name',
    key:        'name',
  },
  {
    title:      'STATUS',
    key:        'status',
    dataIndex:  'status',
    render(val) {
      return <Badge status={statusMap[val]} text={status[val]} />;
    },
  },
  {
    title:      'ACTION',
    key:        'action',
    render: (text, record) => (
      <span>
        <a href="javascript:;">EDIT</a>
        <Divider type="vertical" />
        <a href="javascript:;">DELETE</a>
      </span>
    ),
  }
];
const dataSource = [
  {
    key:    '1',
    name:   '221B Baker Street',
    status: '1',
  },
  {
    key:    '2',
    name:   'Headquarters',
    status: '1',
  },
  {
    key:    '3',
    name:   'Pera Palace',
    status: '0',
  },
];

class SearchForm extends Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form layout="inline">
        <FormItem label="NAME"    style={{ float:'left'}}>
          {getFieldDecorator('name')(<Input placeholder="image"/>)}
        </FormItem>
        <FormItem label="STATUS"  style={{ float:'left'}}>
          {getFieldDecorator('status')(
            <Select placeholder="status" style={{ width: '200px' }}>
              <Option value="0">ONLINE</Option>
              <Option value="1">OFFLINE</Option>
            </Select>
          )}
        </FormItem>
        <Button type="primary" htmlType="submit">SEARCH </Button>
        <Button>CLEAR</Button>
      </Form>
    );
  }
}
const WrappedSearchForm = Form.create()(SearchForm);

class Images extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
    }
  }
  render() {
    return (
      <Layout className='App'>
        <Header className='App-header'>
          {this.state.show ?
            <div key='title'><Texty type='alpha' mode='smooth'>IMAGES</Texty></div>
            : null}
        </Header>
        <Content className='App-content'>
          <QueueAnim style={{ width:'80%' }}
            animConfig={[
              { opacity: [1, 0], scaleY:[1, 0] },
              { opacity: [1, 0], scaleY:[1, 0] }
            ]}
            ease={['easeOutQuart', 'easeInOutQuart']}>
            {this.state.show ? [
              <div key='a' className={'table-wrapper'}>
                <div className={'action-bar'}>
                  <WrappedSearchForm/>
                  <Button type="primary" style={{ float:'right', marginRight:'10px' }}>ADD</Button>
                </div>
                <Table columns={columns} dataSource={dataSource}/>
              </div>,
              <div key='b'>
              </div>] : null }
          </QueueAnim>
        </Content>
        <Footer  className='App-footer'>created by Ant-Man</Footer>
      </Layout>
    );
  }
}

export default Images;
