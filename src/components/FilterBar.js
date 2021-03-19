import React from 'react';
import 'antd/dist/antd.css';
import { Input,Select,Button } from 'antd';
import { Grid } from '@material-ui/core';

const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}


const FilterBar = () => {
    const [date,setDate] = React.useState('18-03-21');

    return (
        <div>

            <Button>All</Button>
            <Select defaultValue="18-03-21" style={{ width: 120 }} onChange={handleChange}>
              <Option value="19-03-21">19-03-21</Option>
              <Option value="20-03-21">20-03-21</Option>
              <Option value="21-03-21">21-03-21</Option>
            </Select>
            
              <Select defaultValue="1" style={{marginLeft:30}}>
                <Option value="1">Between</Option>
                <Option value="2">Except</Option>
              </Select>
              <Input style={{ width: 100, textAlign: 'center' }} placeholder="Minimum" />
              <Input
                className="site-input-split"
                style={{
                  width: 30,
                  borderLeft: 0,
                  borderRight: 0,
                  pointerEvents: 'none',
                }}
                placeholder="~"
                disabled
              />
              <Input
                className="site-input-right"
                style={{
                  width: 100,
                  textAlign: 'center',
                }}
                placeholder="Maximum"
              />



        </div>
    )
}

export default FilterBar
